/**
 * /api/admin/users — CRUD + admin actions on user records.
 *
 * GUARDED by _middleware.js — only super-user or administrator can reach this
 * file. We re-verify via cookie+JWT here as defense in depth.
 *
 * Methods:
 *   GET    /api/admin/users
 *     → list all users (with role + course access, but NEVER password hashes)
 *
 *   POST   /api/admin/users
 *     { email, role?, courses, notes? }
 *     → create a new account. Password is ALWAYS set to TEMP_PASSWORD ("87654321")
 *       with must_change_password:true. Tell the user verbally that's their initial
 *       password.
 *
 *   PATCH  /api/admin/users
 *     { email, role?, courses?, notes?, action? }
 *     action ∈ ["reset_password", "disable", "enable"]
 *     - reset_password: set password back to TEMP_PASSWORD + must_change_password:true
 *     - disable:        set disabled:true (next login fails with "account disabled")
 *     - enable:         set disabled:false
 *     - otherwise:      partial update of role/courses/notes
 *
 *   DELETE /api/admin/users?email=<email>
 *     → remove user
 *
 * Authorization rules (see lib/roles.js):
 *   - Super-user can do anything except modify another super-user
 *   - Administrator can manage students only (not other administrators or super-users)
 *   - Administrator cannot CREATE administrators (only super-user can)
 *   - Nobody can create a super-user via API (hardcoded in lib/superusers.js)
 */

import { json, error, parseCookies } from "../../lib/response.js";
import { verifyJWT } from "../../lib/jwt.js";
import { getUser, putUser, deleteUser, listUsers } from "../../lib/kv.js";
import { isSuperUser } from "../../lib/superusers.js";
import { COURSE_IDS } from "../../lib/courses.js";
import { ROLES, can, canActOn } from "../../lib/roles.js";
import { buildPasswordRecord, TEMP_PASSWORD } from "../../lib/password.js";

const SESSION_COOKIE = "ch_session";

/**
 * Verify the request comes from a super-user or administrator.
 * Returns the claims if authorized, null otherwise.
 */
async function requireAdmin(request, env) {
  const cookies = parseCookies(request);
  const token = cookies[SESSION_COOKIE];
  if (!token || !env.JWT_SECRET) return null;
  try {
    const claims = await verifyJWT(token, env.JWT_SECRET);
    const role = isSuperUser(claims.email) ? ROLES.SUPERUSER : claims.role;
    if (role === ROLES.SUPERUSER || role === ROLES.ADMINISTRATOR) {
      return { ...claims, role };
    }
  } catch { /* fall through */ }
  return null;
}

function validateCourses(value) {
  if (value === "*") return { ok: true, value: "*" };
  if (!Array.isArray(value)) return { ok: false, error: "courses must be an array of course IDs or the string '*'" };
  const unknown = value.filter(c => !COURSE_IDS.includes(c));
  if (unknown.length) return { ok: false, error: `unknown course IDs: ${unknown.join(", ")}` };
  return { ok: true, value };
}

// =====================================================================
// GET — list users
// =====================================================================
export async function onRequestGet({ request, env }) {
  const actor = await requireAdmin(request, env);
  if (!actor) return error("forbidden — admin only", 403);
  const users = await listUsers(env);
  return json({ users, actor: { email: actor.email, role: actor.role } });
}

// =====================================================================
// POST — create a user (with temp password)
// =====================================================================
export async function onRequestPost({ request, env }) {
  const actor = await requireAdmin(request, env);
  if (!actor) return error("forbidden — admin only", 403);

  let body;
  try { body = await request.json(); } catch { return error("invalid JSON", 400); }

  const email = (body.email || "").toString().toLowerCase().trim();
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return error("invalid email", 400);
  }
  const v = validateCourses(body.courses);
  if (!v.ok) return error(v.error, 400);

  const role = (body.role || ROLES.STUDENT).toString();
  if (![ROLES.STUDENT, ROLES.ADMINISTRATOR, ROLES.SUPERUSER].includes(role)) {
    return error("role must be 'student', 'administrator', or 'superuser'", 400);
  }
  if (isSuperUser(email)) {
    return error("cannot modify hardcoded super-user via API", 400);
  }

  // Authorization: administrator cannot CREATE administrators
  if (role === ROLES.ADMINISTRATOR && !can(actor.role, "create_administrator")) {
    return error("only super-user can create administrators", 403);
  }
  // Authorization: only super-user can CREATE another super-user
  if (role === ROLES.SUPERUSER && !can(actor.role, "create_superuser")) {
    return error("only super-user can create or promote another super-user", 403);
  }

  // Block over-write of existing user (use PATCH for that)
  const existing = await getUser(env, email);
  if (existing) {
    return error("user already exists; use PATCH to modify", 409);
  }

  const pw = await buildPasswordRecord(TEMP_PASSWORD);
  const record = {
    email,
    name: (body.name || "").toString().trim(),
    role,
    courses: v.value,
    password_hash: pw.password_hash,
    password_salt: pw.password_salt,
    must_change_password: true,
    disabled: false,
    created_at: new Date().toISOString(),
    created_by: actor.email,
    notes: (body.notes || "").toString(),
  };
  await putUser(env, record);

  return json({
    ok: true,
    message: `User created. Tell them their temporary password is "${TEMP_PASSWORD}" — they'll be forced to change it on first sign-in.`,
    user: {
      email,
      role,
      courses: v.value,
      must_change_password: true,
      disabled: false,
      created_at: record.created_at,
      notes: record.notes,
      has_password: true,
    },
  });
}

// =====================================================================
// PATCH — modify role/courses/notes OR perform action (reset/disable/enable)
// =====================================================================
export async function onRequestPatch({ request, env }) {
  const actor = await requireAdmin(request, env);
  if (!actor) return error("forbidden — admin only", 403);

  let body;
  try { body = await request.json(); } catch { return error("invalid JSON", 400); }

  const email = (body.email || "").toString().toLowerCase().trim();
  if (!email) return error("missing email", 400);
  if (isSuperUser(email) && email !== actor.email) {
    return error("cannot modify another super-user via API", 403);
  }

  const existing = await getUser(env, email);
  if (!existing) return error("user not found", 404);

  // Authorization: administrator cannot act on other administrators or super-users
  if (!canActOn(actor.role, existing.role) && actor.email !== email) {
    return error(`${actor.role} cannot modify a ${existing.role}`, 403);
  }

  // ----- Action: reset password -----
  if (body.action === "reset_password") {
    if (existing.role === ROLES.ADMINISTRATOR && !can(actor.role, "reset_admin_password")) {
      return error("only super-user can reset an administrator's password", 403);
    }
    const pw = await buildPasswordRecord(TEMP_PASSWORD);
    const updated = {
      ...existing,
      password_hash: pw.password_hash,
      password_salt: pw.password_salt,
      must_change_password: true,
      password_reset_at: new Date().toISOString(),
      password_reset_by: actor.email,
    };
    await putUser(env, updated);
    return json({
      ok: true,
      message: `Password reset. Tell ${email} their new temporary password is "${TEMP_PASSWORD}" — they'll be forced to change it on next sign-in.`,
    });
  }

  // ----- Action: disable -----
  if (body.action === "disable") {
    if (isSuperUser(email)) return error("cannot disable a hardcoded super-user", 403);
    if (existing.role === ROLES.ADMINISTRATOR && !can(actor.role, "disable_administrator")) {
      return error("only super-user can disable an administrator", 403);
    }
    const updated = { ...existing, disabled: true, disabled_at: new Date().toISOString(), disabled_by: actor.email };
    await putUser(env, updated);
    return json({ ok: true, message: `${email} disabled.` });
  }

  // ----- Action: enable -----
  if (body.action === "enable") {
    const updated = { ...existing, disabled: false, enabled_at: new Date().toISOString(), enabled_by: actor.email };
    delete updated.disabled_at;
    delete updated.disabled_by;
    await putUser(env, updated);
    return json({ ok: true, message: `${email} re-enabled.` });
  }

  // ----- Default: partial field update -----
  const updated = { ...existing };
  if (body.name !== undefined) updated.name = body.name.toString().trim();
  if (body.courses !== undefined) {
    const v = validateCourses(body.courses);
    if (!v.ok) return error(v.error, 400);
    updated.courses = v.value;
  }
  if (body.role !== undefined) {
    if (![ROLES.STUDENT, ROLES.ADMINISTRATOR, ROLES.SUPERUSER].includes(body.role)) {
      return error("role must be 'student', 'administrator', or 'superuser'", 400);
    }
    if (body.role === ROLES.ADMINISTRATOR && !can(actor.role, "create_administrator")) {
      return error("only super-user can promote a user to administrator", 403);
    }
    if (body.role === ROLES.SUPERUSER && !can(actor.role, "create_superuser")) {
      return error("only super-user can promote a user to super-user", 403);
    }
    updated.role = body.role;
  }
  if (body.notes !== undefined) updated.notes = body.notes;
  updated.updated_at = new Date().toISOString();
  updated.updated_by = actor.email;

  await putUser(env, updated);
  return json({ ok: true, user: { ...updated, password_hash: undefined, password_salt: undefined, has_password: Boolean(updated.password_hash) } });
}

// =====================================================================
// DELETE — remove a user
// =====================================================================
export async function onRequestDelete({ request, env }) {
  const actor = await requireAdmin(request, env);
  if (!actor) return error("forbidden — admin only", 403);

  const url = new URL(request.url);
  const email = (url.searchParams.get("email") || "").toLowerCase().trim();
  if (!email) return error("missing ?email= parameter", 400);
  if (isSuperUser(email)) return error("cannot delete hardcoded super-user", 400);
  if (email === actor.email) return error("you cannot delete your own account", 400);

  const existing = await getUser(env, email);
  if (!existing) return error("user not found", 404);

  if (!canActOn(actor.role, existing.role)) {
    return error(`${actor.role} cannot delete a ${existing.role}`, 403);
  }
  if (existing.role === ROLES.ADMINISTRATOR && !can(actor.role, "delete_administrator")) {
    return error("only super-user can delete administrators", 403);
  }

  await deleteUser(env, email);
  return json({ ok: true, message: `${email} deleted.` });
}
