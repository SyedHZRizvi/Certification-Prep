/**
 * POST /api/auth/change-password   { currentPassword, newPassword }
 *
 * Lets a signed-in user change their own password. Requires either:
 *   - knowledge of currentPassword (matches stored hash), OR
 *   - the must_change_password flag in their JWT (forced first-login change
 *     — currentPassword must still be supplied AND match)
 *
 * On success, the password_hash + password_salt are updated, the
 * must_change_password flag is cleared, and a NEW JWT is minted + set so
 * the user's session reflects the new state without a re-login.
 */

import { json, error, sessionCookie, parseCookies } from "../../lib/response.js";
import { getUser, putUser } from "../../lib/kv.js";
import { verifyJWT, signJWT } from "../../lib/jwt.js";
import { verifyPassword, buildPasswordRecord, validateNewPassword } from "../../lib/password.js";

const SESSION_COOKIE = "ch_session";

export async function onRequestPost({ request, env }) {
  // 1. Verify session
  const cookies = parseCookies(request);
  const token = cookies[SESSION_COOKIE];
  if (!token || !env.JWT_SECRET) return error("not authenticated", 401);

  let session;
  try {
    session = await verifyJWT(token, env.JWT_SECRET);
  } catch { return error("session invalid; please sign in again", 401); }

  // 2. Parse body
  let body;
  try { body = await request.json(); } catch { return error("invalid JSON", 400); }

  const currentPassword = (body.currentPassword || "").toString();
  const newPassword = (body.newPassword || "").toString();

  if (!currentPassword || !newPassword) {
    return error("Both currentPassword and newPassword are required.", 400);
  }

  // 3. Validate new password complexity
  const v = validateNewPassword(newPassword);
  if (!v.ok) return error(v.error, 400);

  // 4. Verify current password
  const user = await getUser(env, session.email);
  if (!user) return error("user not found", 404);
  if (user.disabled) return error("account disabled", 403);

  // Special case: super-user with no password yet (first time setting one
  // after a magic-link sign-in). Skip currentPassword check IF they have
  // no password_hash on record.
  let currentOk = false;
  if (!user.password_hash && session.email === user.email) {
    // First-time password set — accept any non-empty currentPassword as a
    // sanity gate, but really we just don't have anything to verify against
    currentOk = true;
  } else {
    currentOk = await verifyPassword(currentPassword, user.password_salt, user.password_hash);
  }
  if (!currentOk) return error("Current password is incorrect.", 401);

  // 5. Hash new password + persist
  const pw = await buildPasswordRecord(newPassword);
  const updated = {
    ...user,
    password_hash: pw.password_hash,
    password_salt: pw.password_salt,
    must_change_password: false,
    password_changed_at: new Date().toISOString(),
  };
  await putUser(env, updated);

  // 6. Mint a fresh JWT WITHOUT the must_change_password flag
  const ttl = parseInt(env.SESSION_TTL_SECONDS || "2592000", 10);
  const jwt = await signJWT(
    {
      email: user.email,
      name: user.name || "",
      role: user.role,
      courses: user.courses,
      must_change_password: false,
    },
    env.JWT_SECRET,
    ttl
  );

  return new Response(
    JSON.stringify({ ok: true }),
    {
      status: 200,
      headers: {
        "content-type": "application/json",
        "set-cookie": sessionCookie(SESSION_COOKIE, jwt, ttl),
      },
    }
  );
}
