/**
 * The Cert Hub — Cloudflare Pages Functions middleware
 * ===================================================
 *
 * Runs BEFORE every static asset is served. Handles:
 *   1. Identifying the user via the Cloudflare Access JWT
 *   2. Loading their KV record (role + course entitlements)
 *   3. Deciding whether to:
 *      - Serve the requested page (allowed)
 *      - Replace it with the "Subscription Required" page (gated, user lacks entitlement)
 *      - Return 401 (not authenticated for a gated path)
 *
 * Super-users (syed@transcrypts.com + any other email in SUPERUSER_EMAILS) bypass
 * every entitlement check. This is the explicit, hardcoded guarantee the site
 * owner asked for. See _dev/auth-design.md §1 and §4.
 *
 * STATUS: DRAFT — not deployed yet. Lives in _dev/cloudflare-functions/ until
 * Phase 3 of the migration. When we deploy, this file moves to /functions/_middleware.js
 * at the repo root.
 */

// =============================================================================
// 1. CONFIGURATION
// =============================================================================

/**
 * Super-user emails. These accounts get unconditional full access to every
 * page, every course, every admin endpoint. They cannot be deleted or
 * demoted from the admin UI — only by editing this file and redeploying.
 *
 * Add more by editing the array and pushing a new commit.
 */
const SUPERUSER_EMAILS = [
  "syed@transcrypts.com",   // Syed Humayun Zafar Rizvi — site owner / developer
];

/**
 * Public path patterns. Anyone (authenticated or not) can access these.
 * Everything NOT matching one of these patterns is treated as gated content
 * and requires both authentication AND course entitlement.
 *
 * Each entry is a RegExp tested against the URL pathname.
 */
const PUBLIC_PATH_PATTERNS = [
  /^\/$/,                                      // homepage
  /^\/index\.html$/,
  /^\/version\.txt$/,
  /^\/robots\.txt$/,
  /^\/favicon\.ico$/,
  /^\/assets\//,                               // CSS, JS, images
  /^\/00-Study-Plan\//,                        // shared study plan (cert-agnostic)
  /^\/Resources\//,                            // shared resources
  /^\/\d{2}-[^/]+\/?$/,                        // course landing pages (READMEs): /03-AWS-Cloud-Practitioner/
  /^\/\d{2}-[^/]+\/README\/?$/,                // explicit README path
];

/**
 * Gated path patterns. These are the per-course CONTENT routes where we
 * enforce entitlement (or super-user bypass).
 */
const GATED_PATH_PATTERNS = [
  /^\/(\d{2})-[^/]+\/Module-/,                 // /03-AWS-Cloud-Practitioner/Module-01-.../...
  /^\/(\d{2})-[^/]+\/Practice-Exams\//,        // /04-AWS-SAA/Practice-Exams/Final-Mock-Exam/
  /^\/(\d{2})-[^/]+\/Flashcards\/?$/,          // /05-Azure-Fundamentals/Flashcards/
];

/**
 * Admin path patterns. Only super-users and admins reach these.
 */
const ADMIN_PATH_PATTERNS = [
  /^\/admin\//,
  /^\/admin$/,
];

// =============================================================================
// 2. ENTRY POINT — every request hits onRequest first
// =============================================================================

export async function onRequest(context) {
  const { request, env, next } = context;
  const url = new URL(request.url);
  const path = url.pathname;

  // -------------------------------------------------------------------------
  // PUBLIC PATH? Serve immediately, no auth lookup.
  // -------------------------------------------------------------------------
  if (isPublicPath(path)) {
    return next();
  }

  // -------------------------------------------------------------------------
  // Everything below requires Cloudflare Access authentication.
  // The cf-access-jwt-assertion header is set by Cloudflare Access once
  // the user has authenticated. If it's missing, Access already redirected
  // them to the login page; we should never see a missing JWT on a gated
  // path. But defensive code below handles it anyway.
  // -------------------------------------------------------------------------

  const user = await identifyUser(request, env);
  if (!user) {
    // Not authenticated. Cloudflare Access should have caught this; if we got here
    // it means Access isn't configured for this path yet, or the JWT verification failed.
    return new Response("Authentication required.", {
      status: 401,
      headers: { "Content-Type": "text/plain" },
    });
  }

  // -------------------------------------------------------------------------
  // ADMIN PATH? Only super-users and admins allowed.
  // -------------------------------------------------------------------------
  if (isAdminPath(path)) {
    if (user.role === "superuser" || user.role === "admin") {
      return next();
    }
    return new Response("Forbidden — admin access required.", {
      status: 403,
      headers: { "Content-Type": "text/plain" },
    });
  }

  // -------------------------------------------------------------------------
  // GATED COURSE CONTENT? Check entitlement.
  // -------------------------------------------------------------------------
  const courseSlug = extractCourseSlug(path);
  if (courseSlug && isGatedPath(path)) {
    if (userHasAccess(user, courseSlug)) {
      return next();
    }
    return subscriptionRequiredResponse(env, user, courseSlug, path);
  }

  // -------------------------------------------------------------------------
  // Fallthrough: not public, not admin, not a gated course path. Serve.
  // (E.g. an unexpected URL — let static handling 404 it.)
  // -------------------------------------------------------------------------
  return next();
}

// =============================================================================
// 3. USER IDENTIFICATION (Cloudflare Access JWT → KV record)
// =============================================================================

/**
 * Reads the Cloudflare Access JWT from request headers, extracts the user's
 * email, and looks up their record in the CERT_HUB_USERS KV namespace.
 *
 * Returns a normalized user object: { email, role, courses, ... }
 * Returns null if no JWT or invalid.
 *
 * NOTE: We do NOT cryptographically verify the JWT here. Cloudflare Access has
 * ALREADY verified it before forwarding the request to the Worker — that's
 * the whole point of Access being the auth gate. We just decode the payload.
 * In a stricter setup we'd verify against Cloudflare's JWKS; for now we trust
 * Access has done its job.
 */
async function identifyUser(request, env) {
  const jwt =
    request.headers.get("cf-access-jwt-assertion") ||
    request.headers.get("Cf-Access-Jwt-Assertion");
  if (!jwt) return null;

  const email = extractEmailFromJWT(jwt);
  if (!email) return null;

  // Hardcoded super-user check FIRST — guarantees access even if KV is wiped.
  if (SUPERUSER_EMAILS.includes(email.toLowerCase())) {
    return {
      email: email.toLowerCase(),
      role: "superuser",
      courses: "*",
      source: "hardcoded",
    };
  }

  // Otherwise look up in KV.
  const kvKey = `user:${email.toLowerCase()}`;
  const record = await env.CERT_HUB_USERS.get(kvKey, { type: "json" });
  if (!record) {
    return {
      email: email.toLowerCase(),
      role: "unauthorized",
      courses: [],
      source: "no-kv-record",
    };
  }

  return {
    email: email.toLowerCase(),
    role: record.role || "student",
    courses: record.courses || [],
    subscription_ends_at: record.subscription_ends_at,
    source: "kv",
    ...record,
  };
}

/**
 * Decodes the JWT payload (no verification — Cloudflare Access already did that).
 * Returns the `email` claim, or null on parse error.
 */
function extractEmailFromJWT(jwt) {
  try {
    const parts = jwt.split(".");
    if (parts.length !== 3) return null;
    const payload = JSON.parse(
      atob(parts[1].replace(/-/g, "+").replace(/_/g, "/"))
    );
    return payload.email || payload.sub || null;
  } catch (e) {
    console.error("JWT parse error", e);
    return null;
  }
}

// =============================================================================
// 4. ACCESS DECISIONS
// =============================================================================

function isPublicPath(path) {
  return PUBLIC_PATH_PATTERNS.some((p) => p.test(path));
}

function isGatedPath(path) {
  return GATED_PATH_PATTERNS.some((p) => p.test(path));
}

function isAdminPath(path) {
  return ADMIN_PATH_PATTERNS.some((p) => p.test(path));
}

function extractCourseSlug(path) {
  const m = path.match(/^\/(\d{2}-[^/]+)\//);
  return m ? m[1] : null;
}

/**
 * Does the user have entitlement to view content in `courseSlug`?
 *
 * Rules (in order):
 *  1. super-user OR admin role → YES (always)
 *  2. courses === "*" wildcard → YES
 *  3. subscription expired → NO
 *  4. courseSlug in the courses array → YES
 *  5. otherwise → NO
 */
function userHasAccess(user, courseSlug) {
  if (user.role === "superuser" || user.role === "admin") return true;
  if (user.courses === "*") return true;

  // Subscription expiration check
  if (user.subscription_ends_at) {
    const expiresAt = new Date(user.subscription_ends_at);
    if (expiresAt < new Date()) return false;
  }

  if (!Array.isArray(user.courses)) return false;
  return user.courses.includes(courseSlug);
}

// =============================================================================
// 5. "SUBSCRIPTION REQUIRED" RESPONSE
// =============================================================================

/**
 * When an authenticated student tries to open content they don't have
 * entitlement for, we return a 200 with a polished "Subscription Required" page
 * (NOT a 403). The site chrome stays visible — they can still see the sidebar
 * with all 13 tracks. They just can't see the lesson content.
 *
 * This satisfies the explicit requirement: "other courses names and module
 * names can be visible but not allowed to see if they are not allowed".
 */
function subscriptionRequiredResponse(env, user, courseSlug, path) {
  const courseTitle = courseSlugToTitle(courseSlug);
  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Subscription Required — The Cert Hub</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="stylesheet" href="/assets/quiz.css" />
  <script src="https://cdn.tailwindcss.com"></script>
  <style>
    body { font-family: 'Inter', system-ui, sans-serif; background: #f8fafc; }
  </style>
</head>
<body class="min-h-screen flex items-center justify-center p-6">
  <div class="max-w-md w-full bg-white rounded-2xl shadow-xl border border-slate-200 p-8 text-center">
    <div class="text-5xl mb-4">🔒</div>
    <h1 class="text-2xl font-extrabold mb-2">Subscription Required</h1>
    <p class="text-slate-600 mb-6">
      You're signed in as <strong>${escapeHTML(user.email)}</strong>, but this
      content belongs to a course you haven't subscribed to:
    </p>
    <div class="bg-slate-50 rounded-lg p-4 mb-6">
      <p class="text-xs uppercase tracking-wider text-slate-500 mb-1">Course</p>
      <p class="font-bold">${escapeHTML(courseTitle)}</p>
      <p class="text-xs text-slate-500 mt-2">Page: <code>${escapeHTML(path)}</code></p>
    </div>
    <a href="/" class="inline-block bg-slate-900 hover:bg-slate-800 text-white font-semibold px-6 py-3 rounded-lg transition">
      Back to all tracks
    </a>
    <p class="text-xs text-slate-400 mt-6">
      Already paid? Contact <a href="mailto:syed@transcrypts.com" class="text-blue-600 hover:underline">syed@transcrypts.com</a>.
    </p>
  </div>
</body>
</html>`;

  return new Response(html, {
    status: 200, // 200 not 403 — we WANT this page to render nicely in the browser
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "Cache-Control": "no-store",
    },
  });
}

function courseSlugToTitle(slug) {
  // 03-AWS-Cloud-Practitioner → "AWS Cloud Practitioner"
  return slug
    .replace(/^\d{2}-/, "")
    .replace(/-/g, " ")
    .replace(/\bASCM\b|\bISM\b|\bAWS\b|\bAzure\b|\bAI\b|\bCSCP\b|\bCPIM\b|\bCLTD\b|\bCPSM\b|\bCLF-C02\b|\bSAA-C03\b|\bAZ-900\b|\bAZ-104\b|\bAI-102\b|\bAIF-C01\b/g, (m) => m);
}

function escapeHTML(s) {
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
