/**
 * Auth gate middleware — runs on EVERY request hitting Cloudflare Pages.
 *
 * Order of checks (high to low priority):
 *   1. Disabled account?       → 403
 *   2. Must change password?   → redirect to /change-password/
 *   3. Public route?           → serve
 *   4. Super-user / admin route? (Manage-Users, /api/admin/) → require admin role
 *   5. Course content?         → require entitlement
 *   6. Anything else?          → serve (or require auth if not public)
 *
 * The hardcoded super-user (lib/superusers.js) always passes the role checks
 * regardless of JWT contents — failsafe so the owner cannot lock themselves out.
 */

import { verifyJWT } from "./lib/jwt.js";
import { parseCookies, clearCookie } from "./lib/response.js";
import { courseIdFromPath } from "./lib/courses.js";
import { isSuperUser } from "./lib/superusers.js";
import { ROLES } from "./lib/roles.js";

const SESSION_COOKIE = "ch_session";

// Routes that are always public (no auth check, no entitlement check).
// NOTE: "/" is handled by the exact-match check in isPublic() below — do NOT
// add it here, otherwise every path would match via startsWith.
const PUBLIC_PREFIXES = [
  "/login",                  // login page
  "/change-password",        // forced password change page (must be reachable when must_change_password=true)
  "/enroll",                 // public enrollment form (anyone can apply)
  "/api/auth/",              // login, change-password, logout, me, request-link, verify
  "/api/enrollment/",        // public enrollment submission
  "/assets/",                // CSS, JS, fonts, images
  "/Resources/",             // resources hub (free preview material)
  "/00-Study-Plan/",         // study plan (free preview)
  "/Privacy-Setup/",         // privacy / deindex docs
  "/version.txt",            // cache-bust check
  "/favicon",
  "/sitemap",
  "/robots.txt",
];

// Routes that REQUIRE super-user OR administrator role.
const ADMIN_PREFIXES = [
  "/Manage-Users",
  "/api/admin/",
];

// Routes the user must be able to reach even when must_change_password=true
// (otherwise they'd be in an infinite redirect loop).
const ALWAYS_REACHABLE_WHEN_MUST_CHANGE_PASSWORD = [
  "/change-password",
  "/api/auth/",   // logout, change-password, me
  "/assets/",
  "/favicon",
];

function startsWithAny(pathname, prefixes) {
  return prefixes.some(p => pathname === p || pathname.startsWith(p));
}
function isPublic(pathname) {
  if (pathname === "/" || pathname === "") return true;
  return startsWithAny(pathname, PUBLIC_PREFIXES);
}
function isAdminRoute(pathname) {
  return startsWithAny(pathname, ADMIN_PREFIXES);
}
function isReachableWhenMustChangePassword(pathname) {
  if (pathname === "/" || pathname === "") return false;
  return startsWithAny(pathname, ALWAYS_REACHABLE_WHEN_MUST_CHANGE_PASSWORD);
}

function effectiveRole(session) {
  if (!session) return null;
  if (isSuperUser(session.email)) return ROLES.SUPERUSER;
  return session.role || null;
}

function isAdminOrSuper(role) {
  return role === ROLES.SUPERUSER || role === ROLES.ADMINISTRATOR;
}

export async function onRequest(context) {
  const { request, env, next } = context;
  const url = new URL(request.url);
  const pathname = url.pathname;

  // Verify session cookie (if present)
  let session = null;
  const cookies = parseCookies(request);
  const token = cookies[SESSION_COOKIE];
  if (token && env.JWT_SECRET) {
    try {
      session = await verifyJWT(token, env.JWT_SECRET);
    } catch {
      session = null;
    }
  }

  // === Forced password change ===
  // If user is signed in but must_change_password is true, force them to
  // /change-password/ (except for endpoints they need to reach to actually
  // change it: the page itself, the API, logout, assets).
  //
  // Exception: hardcoded super-users are NEVER force-redirected. They're the
  // owner of the site — they can pick when to change their password. The UI
  // surfaces a banner ("change password recommended") but never blocks them.
  if (session && session.must_change_password &&
      !isSuperUser(session.email) &&
      !isReachableWhenMustChangePassword(pathname)) {
    return Response.redirect(`${url.origin}/change-password/`, 302);
  }

  // Course landing pages (e.g. /01-Scrum-Master/) are public; only
  // Module-* / Practice-Exams etc. inside require entitlement.
  const courseId = courseIdFromPath(pathname);
  const isCourseLandingOnly = courseId && /^\/\d{2}-[A-Za-z0-9-]+\/?$/.test(pathname);

  // === Public routes ===
  if (isPublic(pathname) || isCourseLandingOnly) {
    return next();
  }

  // === Admin routes ===
  if (isAdminRoute(pathname)) {
    if (!session) {
      if (pathname.startsWith("/api/")) {
        return new Response(JSON.stringify({ error: "not authenticated" }), {
          status: 401,
          headers: { "content-type": "application/json" },
        });
      }
      return Response.redirect(`${url.origin}/login/?next=${encodeURIComponent(pathname)}`, 302);
    }
    const role = effectiveRole(session);
    if (!isAdminOrSuper(role)) {
      if (pathname.startsWith("/api/")) {
        return new Response(JSON.stringify({ error: "forbidden — admin only" }), {
          status: 403,
          headers: { "content-type": "application/json" },
        });
      }
      return forbiddenPage("This admin area is restricted to the site owner and administrators.");
    }
    return next();
  }

  // === Course content (Module-*, Practice-Exams, etc.) ===
  if (courseId && !isCourseLandingOnly) {
    if (!session) {
      return Response.redirect(`${url.origin}/login/?next=${encodeURIComponent(pathname)}`, 302);
    }
    const role = effectiveRole(session);
    // Super-user and administrator can access any course
    if (role === ROLES.SUPERUSER || role === ROLES.ADMINISTRATOR) {
      return next();
    }
    // Students: check entitlement
    const courses = session.courses;
    const hasAccess = courses === "*" || (Array.isArray(courses) && courses.includes(courseId));
    if (!hasAccess) {
      return subscriptionRequiredPage(courseId, session.email);
    }
    return next();
  }

  // === Default: serve ===
  return next();
}

// ---------- inline error pages ----------

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
