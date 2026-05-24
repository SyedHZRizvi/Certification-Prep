/**
 * /api/admin/users — CRUD on the USERS_KV namespace.
 *
 * GUARDED by _middleware.js: any /api/admin/* request requires session.role === 'superuser'.
 * This file additionally re-checks via parseCookies/verifyJWT for defense in depth.
 *
 * Methods:
 *   GET    /api/admin/users                      → list all users
 *   POST   /api/admin/users   { email, courses, role?, expires_at?, notes? } → create or upsert
 *   PATCH  /api/admin/users   { email, courses?, role?, expires_at?, notes? } → partial update
 *   DELETE /api/admin/users?email=<email>        → remove user
 */

import { json, error, parseCookies } from "../../lib/response.js";
import { verifyJWT } from "../../lib/jwt.js";
import { getUser, putUser, deleteUser, listUsers } from "../../lib/kv.js";
import { isSuperUser } from "../../lib/superusers.js";
import { COURSE_IDS } from "../../lib/courses.js";

const SESSION_COOKIE = "ch_session";

async function requireSuperUser(request, env) {
  const cookies = parseCookies(request);
  const token = cookies[SESSION_COOKIE];
  if (!token || !env.JWT_SECRET) return null;
  try {
    const claims = await verifyJWT(token, env.JWT_SECRET);
    if (claims.role === "superuser" || isSuperUser(claims.email)) {
      return claims;
    }
  } catch { /* fall through */ }
  return null;
}

// Validate that the provided courses field is well-formed
function validateCourses(value) {
  if (value === "*") return { ok: true, value: "*" };
  if (!Array.isArray(value)) return { ok: false, error: "courses must be an array of course IDs or the string '*'" };
  const unknown = value.filter(c => !COURSE_IDS.includes(c));
  if (unknown.length) return { ok: false, error: `unknown course IDs: ${unknown.join(", ")}` };
  return { ok: true, value };
}

// --- GET: list all users ---
export async function onRequestGet({ request, env }) {
  const su = await requireSuperUser(request, env);
  if (!su) return error("forbidden", 403);
  const users = await listUsers(env);
  return json({ users });
}

// --- POST: create or upsert a user ---
export async function onRequestPost({ request, env }) {
  const su = await requireSuperUser(request, env);
  if (!su) return error("forbidden", 403);

  let body;
  try { body = await request.json(); } catch { return error("invalid JSON", 400); }

  const email = (body.email || "").toString().toLowerCase().trim();
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return error("invalid email", 400);
  }
  const v = validateCourses(body.courses);
  if (!v.ok) return error(v.error, 400);

  // Role: default to "student". Block API attempts to grant superuser.
  let role = (body.role || "student").toString();
  if (!["student", "admin"].includes(role)) {
    return error("role must be 'student' or 'admin' (super-user is hardcoded)", 400);
  }
  // Prevent demoting a hardcoded super-user
  if (isSuperUser(email)) {
    return error("cannot modify hardcoded super-user via API", 400);
  }

  const record = {
    email,
    role,
    courses: v.value,
    created_at: body.created_at || new Date().toISOString(),
    created_by: su.email,
    expires_at: body.expires_at || null,
    notes: body.notes || "",
  };

  await putUser(env, record);
  return json({ ok: true, user: record });
}

// --- PATCH: partial update ---
export async function onRequestPatch({ request, env }) {
  const su = await requireSuperUser(request, env);
  if (!su) return error("forbidden", 403);

  let body;
  try { body = await request.json(); } catch { return error("invalid JSON", 400); }

  const email = (body.email || "").toString().toLowerCase().trim();
  if (!email) return error("missing email", 400);
  if (isSuperUser(email)) return error("cannot modify hardcoded super-user", 400);

  const existing = await getUser(env, email);
  if (!existing) return error("user not found", 404);

  const updated = { ...existing };
  if (body.courses !== undefined) {
    const v = validateCourses(body.courses);
    if (!v.ok) return error(v.error, 400);
    updated.courses = v.value;
  }
  if (body.role !== undefined) {
    if (!["student", "admin"].includes(body.role)) {
      return error("role must be 'student' or 'admin'", 400);
    }
    updated.role = body.role;
  }
  if (body.expires_at !== undefined) updated.expires_at = body.expires_at;
  if (body.notes !== undefined) updated.notes = body.notes;
  updated.updated_at = new Date().toISOString();
  updated.updated_by = su.email;

  await putUser(env, updated);
  return json({ ok: true, user: updated });
}

// --- DELETE: remove a user ---
export async function onRequestDelete({ request, env }) {
  const su = await requireSuperUser(request, env);
  if (!su) return error("forbidden", 403);

  const url = new URL(request.url);
  const email = (url.searchParams.get("email") || "").toLowerCase().trim();
  if (!email) return error("missing ?email= parameter", 400);
  if (isSuperUser(email)) return error("cannot delete hardcoded super-user", 400);

  await deleteUser(env, email);
  return json({ ok: true });
}
