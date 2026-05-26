/**
 * GET /api/auth/verify?token=<token>&next=<safe-path>
 *
 * Consume a magic-link token (sent via /api/auth/request-link as the
 * "forgot password" recovery flow).
 *
 * IMPORTANT: A successful magic-link sign-in RESETS the user's password
 * back to the standard temp password (87654321) and sets must_change_password
 * to true. This is by design — if the user needed a magic link, they
 * forgot their password, so the old one is gone. They sign in via the
 * link, then are forced to /change-password/ to pick a new one.
 *
 * For super-users with no password yet (fresh setup), the same flow
 * applies: temp password gets set, then they pick a real one.
 */

import { redirect, sessionCookie } from "../../lib/response.js";
import { consumeMagicLink, getUser, putUser } from "../../lib/kv.js";
import { signJWT } from "../../lib/jwt.js";
import { buildPasswordRecord, TEMP_PASSWORD } from "../../lib/password.js";
import { isSuperUser } from "../../lib/superusers.js";

const SESSION_COOKIE = "ch_session";

export async function onRequestGet({ request, env }) {
  const url = new URL(request.url);
  const token = url.searchParams.get("token");
  const next = url.searchParams.get("next") || "/change-password/";
  const safeNext = next.startsWith("/") && !next.startsWith("//") ? next : "/change-password/";

  if (!token) return redirect("/login/?error=missing_token");

  const email = await consumeMagicLink(env, token);
  if (!email) return redirect("/login/?error=expired");

  const user = await getUser(env, email);
  if (!user) return redirect("/login/?error=unknown_user");
  if (user.disabled) return redirect("/login/?error=account_disabled");

  // Reset password to temp + force change
  const pw = await buildPasswordRecord(TEMP_PASSWORD);
  const updated = {
    ...user,
    password_hash: pw.password_hash,
    password_salt: pw.password_salt,
    must_change_password: true,
    last_login: new Date().toISOString(),
    last_magic_link_at: new Date().toISOString(),
  };

  // For hardcoded super-user with no prior KV record, this creates one
  try {
    if (!isSuperUser(email) || user.notes !== "(hardcoded super-user)") {
      // Existing KV record OR super-user that already has one
      await putUser(env, updated);
    } else {
      // Hardcoded super-user, no KV record yet — create one so the
      // password we just set actually persists.
      await putUser(env, {
        email,
        role: "superuser",
        courses: "*",
        password_hash: pw.password_hash,
        password_salt: pw.password_salt,
        must_change_password: true,
        disabled: false,
        created_at: new Date().toISOString(),
        last_login: new Date().toISOString(),
        last_magic_link_at: new Date().toISOString(),
        notes: "Super-user (initial password set via magic link)",
      });
    }
  } catch (e) {
    console.error("verify.js: failed to persist password reset:", e);
    return redirect("/login/?error=persist_failed");
  }

  // Mint session JWT including the must_change_password flag
  const ttl = parseInt(env.SESSION_TTL_SECONDS || "2592000", 10);
  const jwt = await signJWT(
    {
      email: user.email,
      role: user.role,
      courses: user.courses,
      must_change_password: true,
    },
    env.JWT_SECRET,
    ttl
  );

  // Redirect to change-password (or to ?next= if explicitly provided)
  // Middleware will catch must_change_password and re-route to /change-password/
  // anyway, but we set the location header now so the user lands there directly.
  return new Response(null, {
    status: 302,
    headers: {
      "location": "/change-password/?reason=magic_link",
      "set-cookie": sessionCookie(SESSION_COOKIE, jwt, ttl),
    },
  });
}
