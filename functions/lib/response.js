/**
 * Common response helpers for Pages Functions.
 */

export function json(data, init = {}) {
  return new Response(JSON.stringify(data), {
    status: init.status || 200,
    headers: {
      "content-type": "application/json; charset=utf-8",
      "cache-control": "no-store",
      ...(init.headers || {}),
    },
  });
}

export function error(message, status = 400) {
  return json({ error: message }, { status });
}

export function redirect(url, status = 302) {
  return new Response(null, {
    status,
    headers: { location: url },
  });
}

/**
 * Set a session cookie. HttpOnly + Secure + SameSite=Lax.
 *
 * @param {string} name
 * @param {string} value
 * @param {number} maxAgeSeconds
 */
export function sessionCookie(name, value, maxAgeSeconds) {
  return `${name}=${value}; Path=/; Max-Age=${maxAgeSeconds}; HttpOnly; Secure; SameSite=Lax`;
}

export function clearCookie(name) {
  return `${name}=; Path=/; Max-Age=0; HttpOnly; Secure; SameSite=Lax`;
}

/**
 * Parse cookies from a Request.
 * @param {Request} request
 * @returns {Record<string, string>}
 */
export function parseCookies(request) {
  const header = request.headers.get("cookie") || "";
  const out = {};
  for (const pair of header.split(";")) {
    const [k, ...v] = pair.trim().split("=");
    if (k) out[k] = decodeURIComponent(v.join("="));
  }
  return out;
}
