/**
 * GET /api/auth/verify?token=<32-byte-token>&next=<safe-path>
 *
 * Consume the magic-link token. If valid:
 *   - Look up the user record (or super-user)
 *   - Mint a session JWT
 *   - Set HttpOnly cookie
 *   - Redirect to ?next= (or /)
 *
 * If invalid or expired: redirect to /login?error=expired
 */

import { redirect, sessionCookie } from "../../lib/response.js";
import { consumeMagicLink, getUser, putUser } from "../../lib/kv.js";
import { signJWT } from "../../lib/jwt.js";

const SESSION_COOKIE = "ch_session";

export async function onRequestGet({ request, env }) {
  const url = new URL(request.url);
  const token = url.searchParams.get("token");
  const next = url.searchParams.get("next") || "/";
  const safeNext = next.startsWith("/") && !next.startsWith("//") ? next : "/";

  if (!token) {
    return redirect(`/login/?error=missing_token`);
  }

  const email = await consumeMagicLink(env, token);
  if (!email) {
    return redirect(`/login/?error=expired`);
  }

  const user = await getUser(env, email);
  if (!user) {
    return redirect(`/login/?error=unknown_user`);
  }

  // Update last_login (best-effort; don't block the redirect on failure)
  try {
    if (user.role !== "superuser") {
      await putUser(env, { ...user, last_login: new Date().toISOString() });
    }
  } catch (e) {
    console.error("last_login update failed:", e);
  }

  // Mint session JWT
  const ttl = parseInt(env.SESSION_TTL_SECONDS || "2592000", 10); // 30 days default
  const jwt = await signJWT(
    {
      email: user.email,
      role: user.role,
      courses: user.courses,
    },
    env.JWT_SECRET,
    ttl
  );

  return new Response(null, {
    status: 302,
    headers: {
      "location": safeNext,
      "set-cookie": sessionCookie(SESSION_COOKIE, jwt, ttl),
    },
  });
}
