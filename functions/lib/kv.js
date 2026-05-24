/**
 * Typed KV helpers for the USERS_KV namespace.
 *
 * Binding is `env.USERS_KV` (configured in wrangler.toml + the Cloudflare
 * dashboard Pages → Settings → Functions → KV namespace bindings).
 */

import { isSuperUser } from "./superusers.js";

const USER_KEY = (email) => `user:${email.toLowerCase().trim()}`;
const MAGIC_KEY = (token) => `magiclink:${token}`;

/**
 * Look up a user by email. Returns null if not found.
 *
 * Super-users are always returned as full-access users even if KV has
 * no record (failsafe — see lib/superusers.js for why).
 */
export async function getUser(env, email) {
  if (!email) return null;
  const e = email.toLowerCase().trim();
  if (isSuperUser(e)) {
    // Failsafe: always return a super-user record regardless of KV state
    const kvVal = await env.USERS_KV?.get(USER_KEY(e), { type: "json" });
    return {
      email: e,
      role: "superuser",
      courses: "*",
      created_at: kvVal?.created_at ?? null,
      last_login: kvVal?.last_login ?? null,
    };
  }
  const val = await env.USERS_KV.get(USER_KEY(e), { type: "json" });
  if (!val) return null;
  // Validate the record shape
  if (!val.role || !val.courses) return null;
  return { email: e, ...val };
}

export async function putUser(env, user) {
  const e = user.email.toLowerCase().trim();
  if (!user.role || !user.courses) {
    throw new Error("user record requires role and courses");
  }
  // Block API attempts to promote anyone to superuser
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
 * For a site with <50 students this is one fast call.
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
        users.push({ email, ...val });
        seenEmails.add(email);
      }
    }
    cursor = res.list_complete ? undefined : res.cursor;
  } while (cursor);

  // Ensure hardcoded super-users are always in the list, even if KV is empty
  const { listSuperUsers } = await import("./superusers.js");
  for (const su of listSuperUsers()) {
    if (!seenEmails.has(su)) {
      users.unshift({
        email: su,
        role: "superuser",
        courses: "*",
        created_at: null,
        notes: "(hardcoded super-user; not in KV)",
      });
    }
  }
  return users;
}

// === Magic links ===

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
  // Delete immediately to prevent replay
  await env.USERS_KV.delete(MAGIC_KEY(token));
  return val.email || null;
}
