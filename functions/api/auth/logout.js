/**
 * GET /api/auth/logout (also accepts POST)
 *
 * Clear the session cookie and redirect to /.
 */

import { clearCookie } from "../../lib/response.js";

const SESSION_COOKIE = "ch_session";

function doLogout() {
  return new Response(null, {
    status: 302,
    headers: {
      "location": "/",
      "set-cookie": clearCookie(SESSION_COOKIE),
    },
  });
}

export const onRequestGet = doLogout;
export const onRequestPost = doLogout;
