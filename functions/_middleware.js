/**
 * Auth gate middleware — runs on EVERY request hitting Cloudflare Pages.
 *
 * Reads the session JWT from cookies, decides:
 *   - Public route → serve content (homepage, login, marketing).
 *   - Course content → check entitlement.
 *   - Admin route → require super-user role.
 *
 * If unauthenticated and the route requires auth → redirect to /login?next=<url>.
 * If authenticated but lacks entitlement → 403 with a "Subscription required" page.
 *
 * Super-users always pass.
 */

import { verifyJWT } from "./lib/jwt.js";
import { parseCookies } from "./lib/response.js";
import { courseIdFromPath } from "./lib/courses.js";
import { isSuperUser } from "./lib/superusers.js";

const SESSION_COOKIE = "ch_session";

// Routes that are always public (no auth required, no entitlement check).
// NOTE: the homepage "/" is NOT listed here — it's handled by the exact-match
// check in isPublic() below. Including "/" in this list would be catastrophic
// because pathname.startsWith("/") is true for EVERY path (the auth gate would
// pass everything through as "public").
const PUBLIC_PREFIXES = [
  "/login",             // login page
  "/api/auth/",         // request-link, verify, logout, me
  "/assets/",           // CSS, JS, fonts, images
  "/Resources/",        // resources hub (free preview material)
  "/00-Study-Plan/",    // study plan (free preview)
  "/Privacy-Setup/",    // privacy / deindex docs
  "/version.txt",       // cache-bust check (must stay public)
  "/favicon",
  "/sitemap",
  "/robots.txt",
];

// Routes that REQUIRE super-user role (returns 403 otherwise).
const SUPERUSER_PREFIXES = [
  "/Manage-Users/",
  "/api/admin/",
];

function isPublic(pathname) {
  // Exact homepage
  if (pathname === "/" || pathname === "") return true;
  return PUBLIC_PREFIXES.some(p => pathname === p || pathname.startsWith(p));
}

function isSuperUserRoute(pathname) {
  return SUPERUSER_PREFIXES.some(p => pathname.startsWith(p));
}

/**
 * The Pages Functions middleware contract: export onRequest.
 * `context.next()` calls the next handler or serves the underlying static asset.
 */
export async function onRequest(context) {
  const { request, env, next } = context;
  const url = new URL(request.url);
  const pathname = url.pathname;

  // Course READMEs (e.g. /01-Scrum-Master/) are public landing pages.
  // Only Module-* and Practice-Exams subpaths require entitlement.
  const courseId = courseIdFromPath(pathname);
  const isCourseLandingOnly = courseId && /^\/\d{2}-[A-Za-z0-9-]+\/?$/.test(pathname);

  // Try to read & verify the session cookie
  let session = null;
  const cookies = parseCookies(request);
  const token = cookies[SESSION_COOKIE];
  if (token && env.JWT_SECRET) {
    try {
      session = await verifyJWT(token, env.JWT_SECRET);
    } catch {
      session = null;  // invalid / expired / tampered
    }
  }

  // === Public routes ===
  if (isPublic(pathname) || isCourseLandingOnly) {
    // Even on public routes, attach session info as a header so the page can
    // render "Welcome, Humayun" or hide the login link if applicable.
    const res = await next();
    if (session) {
      const newRes = new Response(res.body, res);
      newRes.headers.set("x-ch-user", session.email || "");
      newRes.headers.set("x-ch-role", session.role || "");
      return newRes;
    }
    return res;
  }

  // === Super-user only routes ===
  if (isSuperUserRoute(pathname)) {
    if (!session) {
      // For API calls, return 401 JSON; for page requests, redirect to login
      if (pathname.startsWith("/api/")) {
        return new Response(JSON.stringify({ error: "not authenticated" }), {
          status: 401,
          headers: { "content-type": "application/json" },
        });
      }
      return Response.redirect(`${url.origin}/login/?next=${encodeURIComponent(pathname)}`, 302);
    }
    if (session.role !== "superuser" && !isSuperUser(session.email)) {
      if (pathname.startsWith("/api/")) {
        return new Response(JSON.stringify({ error: "forbidden — super-user only" }), {
          status: 403,
          headers: { "content-type": "application/json" },
        });
      }
      return forbiddenPage("This admin area is restricted to the site owner.");
    }
    return next();
  }

  // === Course content routes ===
  if (courseId && !isCourseLandingOnly) {
    if (!session) {
      return Response.redirect(`${url.origin}/login/?next=${encodeURIComponent(pathname)}`, 302);
    }
    // Super-user: always allow
    if (session.role === "superuser" || isSuperUser(session.email)) {
      return next();
    }
    // Check entitlement
    const courses = session.courses;
    const hasAccess = courses === "*" ||
      (Array.isArray(courses) && courses.includes(courseId));
    if (!hasAccess) {
      return subscriptionRequiredPage(courseId, session.email);
    }
    return next();
  }

  // Default: serve the page
  return next();
}

function forbiddenPage(message) {
  return new Response(`<!DOCTYPE html>
<html><head><meta charset="utf-8"><title>403 — Forbidden</title>
<style>body{font-family:-apple-system,sans-serif;display:grid;place-items:center;min-height:100vh;margin:0;background:#0f172a;color:#e2e8f0;padding:20px}
.card{max-width:480px;text-align:center;background:#1e293b;padding:48px 32px;border-radius:16px;box-shadow:0 25px 60px -15px rgba(0,0,0,0.6)}
h1{font-size:48px;margin:0 0 8px;background:linear-gradient(135deg,#f97316,#ec4899);-webkit-background-clip:text;background-clip:text;color:transparent}
p{font-size:16px;line-height:1.6;color:#94a3b8;margin:16px 0}
a{display:inline-block;background:linear-gradient(135deg,#6366f1,#8b5cf6);color:#fff;text-decoration:none;padding:12px 24px;border-radius:10px;font-weight:700;margin-top:16px}</style>
</head><body><div class="card">
<h1>🔒 403</h1><p>${message}</p>
<a href="/">← Back to homepage</a>
</div></body></html>`, {
    status: 403,
    headers: { "content-type": "text/html; charset=utf-8" },
  });
}

function subscriptionRequiredPage(courseId, email) {
  return new Response(`<!DOCTYPE html>
<html><head><meta charset="utf-8"><title>Subscription Required — The Cert Hub</title>
<style>body{font-family:-apple-system,sans-serif;display:grid;place-items:center;min-height:100vh;margin:0;background:#0f172a;color:#e2e8f0;padding:20px}
.card{max-width:520px;text-align:center;background:#1e293b;padding:48px 32px;border-radius:16px;box-shadow:0 25px 60px -15px rgba(0,0,0,0.6)}
h1{font-size:48px;margin:0 0 8px}
h2{font-size:24px;margin:0 0 16px;background:linear-gradient(135deg,#f59e0b,#f97316);-webkit-background-clip:text;background-clip:text;color:transparent}
p{font-size:16px;line-height:1.6;color:#94a3b8;margin:16px 0}
code{background:#0f172a;padding:2px 8px;border-radius:4px;color:#fbbf24;font-size:14px}
a{display:inline-block;background:linear-gradient(135deg,#6366f1,#8b5cf6);color:#fff;text-decoration:none;padding:12px 24px;border-radius:10px;font-weight:700;margin:16px 8px}
.email{color:#cbd5e1;font-size:13px;margin-top:24px;border-top:1px solid #334155;padding-top:16px}</style>
</head><body><div class="card">
<h1>🔒</h1>
<h2>Subscription Required</h2>
<p>You're signed in as <code>${email}</code>, but your account doesn't include access to <code>${courseId}</code>.</p>
<p>Contact the site owner to add this course to your subscription.</p>
<a href="/">← Back to homepage</a>
<a href="/api/auth/logout">Sign out</a>
<p class="email">Need access? Email <a href="mailto:syed@transcrypts.com" style="background:transparent;padding:0;color:#a5b4fc">syed@transcrypts.com</a></p>
</div></body></html>`, {
    status: 403,
    headers: { "content-type": "text/html; charset=utf-8" },
  });
}
