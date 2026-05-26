/**
 * Typed KV helpers for the USERS_KV namespace.
 *
 * Binding is `env.USERS_KV` (configured in the Cloudflare Pages dashboard
 * Settings → Bindings).
 *
 * User record schema:
 *   {
 *     email:               "student@example.com",
 *     role:                "superuser" | "administrator" | "student",
 *     courses:             ["01-Scrum-Master", ...] | "*",
 *     password_hash:       "base64 PBKDF2 hash" | null,
 *     password_salt:       "base64 random salt" | null,
 *     must_change_password: true | false,
 *     disabled:            true | false,
 *     created_at:          ISO timestamp,
 *     created_by:          email of the user who created this account,
 *     last_login:          ISO timestamp | null,
 *     updated_at:          ISO timestamp,
 *     updated_by:          email of the user who last modified this record,
 *     expires_at:          ISO timestamp | null,
 *     notes:               free-text from the super-user,
 *   }
 *
 * Super-users (hardcoded in lib/superusers.js) are ALWAYS returned as
 * full-access regardless of KV state — even if KV has no record for them.
 * This is the deliberate failsafe so the owner cannot be locked out.
 */

import { isSuperUser } from "./superusers.js";

const USER_KEY = (email) => `user:${email.toLowerCase().trim()}`;
const MAGIC_KEY = (token) => `magiclink:${token}`;

/**
 * Look up a user by email. Returns null if not found.
 *
 * Super-users always get a synthesized record (full course access) even
 * if KV is empty. If they DO have a KV record, password_hash / disabled /
 * etc. from KV are merged in so they can use password auth like everyone else.
 */
export async function getUser(env, email) {
  if (!email) return null;
  const e = email.toLowerCase().trim();
  const kvVal = env.USERS_KV ? await env.USERS_KV.get(USER_KEY(e), { type: "json" }) : null;

  if (isSuperUser(e)) {
    // Failsafe: super-user always exists with full access; KV record (if
    // present) supplies password + audit fields.
    return {
      email: e,
      role: "superuser",
      courses: "*",
      password_hash: kvVal?.password_hash || null,
      password_salt: kvVal?.password_salt || null,
      must_change_password: kvVal?.must_change_password || false,
      disabled: false,  // hardcoded super-user can NEVER be disabled
      created_at: kvVal?.created_at || null,
      last_login: kvVal?.last_login || null,
      notes: kvVal?.notes || "(hardcoded super-user)",
    };
  }

  if (!kvVal) return null;
  if (!kvVal.role || !kvVal.courses) return null;
  return { email: e, ...kvVal };
}

/**
 * Upsert a user record.
 *
 * Refuses to write role:"superuser" unless the email is in the hardcoded
 * super-user list (defense in depth — admin/users.js also rejects this).
 */
export async function putUser(env, user) {
  const e = user.email.toLowerCase().trim();
  if (!user.role || !user.courses) {
    throw new Error("user record requires role and courses");
  }
  if (user.role === "superuser" && !isSuperUser(e)) {
    throw new Error("Cannot create superuser via API. Edit lib/superusers.js and redeploy.");
  }
  await env.USERS_KV.put(USER_KEY(e), JSON.stringify(user));
}

export async function deleteUser(env, email) {
  const e = email.toLowerCase().trim();
  if (isSuperUser(e)) {
    throw new Error("Cannot delete a hardcoded super-user.");
  }
  await env.USERS_KV.delete(USER_KEY(e));
}

/**
 * List all users in the KV. Includes the hardcoded super-users at the top.
 *
 * KV LIST returns up to 1000 keys per call; we paginate if needed.
 * For a site with <50 users this is one fast call.
 */
export async function listUsers(env) {
  const users = [];
  const seenEmails = new Set();
  let cursor = undefined;
  do {
    const res = await env.USERS_KV.list({ prefix: "user:", cursor });
    for (const k of res.keys) {
      const email = k.name.replace(/^user:/, "");
      const val = await env.USERS_KV.get(k.name, { type: "json" });
      if (val) {
        // Never leak password fields out of the admin list endpoint
        const { password_hash, password_salt, ...safe } = val;
        users.push({
          email,
          ...safe,
          has_password: Boolean(password_hash),
        });
        seenEmails.add(email);
      }
    }
    cursor = res.list_complete ? undefined : res.cursor;
  } while (cursor);

  // Ensure hardcoded super-users are always at the top of the list
  const { listSuperUsers } = await import("./superusers.js");
  for (const su of listSuperUsers()) {
    if (!seenEmails.has(su)) {
      users.unshift({
        email: su,
        role: "superuser",
        courses: "*",
        disabled: false,
        has_password: false,
        created_at: null,
        notes: "(hardcoded super-user; no KV record yet — sign in to create one)",
      });
    }
  }
  return users;
}

// === Magic links (kept as "forgot password" recovery channel) ===

export async function storeMagicLink(env, token, email, ttlSeconds) {
  await env.USERS_KV.put(
    MAGIC_KEY(token),
    JSON.stringify({
      email: email.toLowerCase().trim(),
      issued_at: new Date().toISOString(),
    }),
    { expirationTtl: ttlSeconds }
  );
}

/**
 * Consume a magic link: returns the email if valid, then deletes the link.
 * Returns null if the token doesn't exist or is expired.
 */
export async function consumeMagicLink(env, token) {
  if (!token) return null;
  const val = await env.USERS_KV.get(MAGIC_KEY(token), { type: "json" });
  if (!val) return null;
  await env.USERS_KV.delete(MAGIC_KEY(token));  // one-shot
  return val.email || null;
}
