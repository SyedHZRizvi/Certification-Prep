/**
 * GET /api/admin/courses → list of all course IDs + display info, for the
 * Manage Users UI to render checkboxes against.
 *
 * Same auth gate as /api/admin/users.
 */

import { json, error, parseCookies } from "../../lib/response.js";
import { verifyJWT } from "../../lib/jwt.js";
import { isSuperUser } from "../../lib/superusers.js";
import { COURSES } from "../../lib/courses.js";

const SESSION_COOKIE = "ch_session";

export async function onRequestGet({ request, env }) {
  const cookies = parseCookies(request);
  const token = cookies[SESSION_COOKIE];
  if (!token || !env.JWT_SECRET) return error("forbidden", 403);
  try {
    const claims = await verifyJWT(token, env.JWT_SECRET);
    if (claims.role !== "superuser" && !isSuperUser(claims.email)) {
      return error("forbidden", 403);
    }
  } catch {
    return error("forbidden", 403);
  }
  return json({ courses: COURSES });
}
