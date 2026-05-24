/**
 * Hardcoded super-user list.
 *
 * SECURITY DESIGN — DO NOT MOVE THIS TO ENV VARS OR KV.
 *
 * Super-users get full access to every course and every admin endpoint,
 * regardless of what the KV store says. Hardcoding here ensures:
 *   1. A wiped or corrupted KV cannot lock out the site owner.
 *   2. A compromised admin account cannot delete the super-user record.
 *   3. A leaked env var cannot grant super-user privileges.
 *
 * To add or remove a super-user, edit this file, deploy a new commit,
 * and rotate JWT_SECRET so existing sessions are invalidated.
 */

const SUPERUSER_EMAILS = new Set([
  "syed@transcrypts.com",
]);

/**
 * @param {string} email
 * @returns {boolean}
 */
export function isSuperUser(email) {
  if (!email || typeof email !== "string") return false;
  return SUPERUSER_EMAILS.has(email.toLowerCase().trim());
}

export function listSuperUsers() {
  return Array.from(SUPERUSER_EMAILS);
}
