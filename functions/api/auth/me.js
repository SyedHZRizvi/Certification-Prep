/**
 * GET /api/auth/me
 *
 * Returns the current session info (for the UI to render "Welcome, X" or
 * to know which courses the user can access without parsing the JWT in JS).
 *
 * Public — returns { authenticated: false } if no session.
 */

import { json, parseCookies } from "../../lib/response.js";
import { verifyJWT } from "../../lib/jwt.js";

const SESSION_COOKIE = "ch_session";

export async function onRequestGet({ request, env }) {
  const cookies = parseCookies(request);
  const token = cookies[SESSION_COOKIE];
  if (!token || !env.JWT_SECRET) {
    return json({ authenticated: false });
  }
  try {
    const claims = await verifyJWT(token, env.JWT_SECRET);
    return json({
      authenticated: true,
      email: claims.email,
      role: claims.role,
      courses: claims.courses,
    });
  } catch {
    return json({ authenticated: false });
  }
}
