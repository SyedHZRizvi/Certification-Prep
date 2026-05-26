/**
 * POST /api/auth/login   { email, password } → set session cookie
 *
 * The primary sign-in endpoint. Magic-link via /api/auth/request-link is
 * kept as a "forgot password" recovery channel only.
 *
 * Flow:
 *   1. Look up user by email
 *   2. Reject if not found, disabled, or password mismatch (generic error
 *      message — never leak which it was, to prevent enumeration)
 *   3. Mint a session JWT including must_change_password if applicable
 *   4. Set HttpOnly Secure SameSite=Lax cookie
 *   5. Respond with { ok: true, mustChangePassword: bool } so the client
 *      can redirect to /change-password/ if needed
 */

import { json, error, sessionCookie } from "../../lib/response.js";
import { getUser, putUser } from "../../lib/kv.js";
import { signJWT } from "../../lib/jwt.js";
import { verifyPassword } from "../../lib/password.js";
import { isSuperUser } from "../../lib/superusers.js";

const SESSION_COOKIE = "ch_session";

export async function onRequestPost({ request, env }) {
  let body;
  try { body = await request.json(); } catch { return error("invalid JSON", 400); }

  const email = (body.email || "").toString().toLowerCase().trim();
  const password = (body.password || "").toString();

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return error("Please enter a valid email address.", 400);
  }
  if (!password) {
    return error("Password is required.", 400);
  }

  const user = await getUser(env, email);

  // Uniform error to prevent enumeration
  const INVALID = error("Invalid email or password.", 401);

  if (!user) return INVALID;
  if (user.disabled) {
    return error("This account has been disabled. Contact the site owner.", 403);
  }

  // Special case: hardcoded super-user with no password yet (fresh setup).
  // They cannot log in by password; tell them to use the magic link.
  if (isSuperUser(email) && !user.password_hash) {
    return error(
      "No password set for this account yet. Use the 'Forgot password?' link to receive a sign-in email, then set your password.",
      403,
      { needs_magic_link: true }
    );
  }

  if (!user.password_hash || !user.password_salt) {
    // Non-super-user record without a password (shouldn't happen if admin
    // panel was used correctly — but guard anyway).
    return error(
      "This account has no password configured. Ask the site owner to reset it.",
      403
    );
  }

  const ok = await verifyPassword(password, user.password_salt, user.password_hash);
  if (!ok) return INVALID;

  // Update last_login (best-effort)
  try {
    if (!isSuperUser(email)) {
      await putUser(env, { ...user, last_login: new Date().toISOString() });
    } else if (user.password_hash) {
      // Super-user with a real KV record — update last_login there too
      const kvVal = await env.USERS_KV?.get(`user:${email}`, { type: "json" });
      if (kvVal) {
        kvVal.last_login = new Date().toISOString();
        await env.USERS_KV.put(`user:${email}`, JSON.stringify(kvVal));
      }
    }
  } catch (e) {
    console.error("last_login update failed:", e);
  }

  // Mint session JWT (include must_change_password so middleware can route)
  const ttl = parseInt(env.SESSION_TTL_SECONDS || "2592000", 10);
  const jwt = await signJWT(
    {
      email: user.email,
      role: user.role,
      courses: user.courses,
      must_change_password: Boolean(user.must_change_password),
    },
    env.JWT_SECRET,
    ttl
  );

  return new Response(
    JSON.stringify({
      ok: true,
      mustChangePassword: Boolean(user.must_change_password),
      role: user.role,
      email: user.email,
    }),
    {
      status: 200,
      headers: {
        "content-type": "application/json",
        "set-cookie": sessionCookie(SESSION_COOKIE, jwt, ttl),
      },
    }
  );
}
