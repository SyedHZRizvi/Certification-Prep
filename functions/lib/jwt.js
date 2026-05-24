/**
 * Minimal HS256 JWT for Cloudflare Workers.
 *
 * No external dependencies — uses the Workers crypto API.
 * Token format: header.payload.signature, each base64url-encoded.
 */

const enc = new TextEncoder();
const dec = new TextDecoder();

/**
 * base64url-encode a Uint8Array or string.
 */
function b64u(input) {
  const bytes = typeof input === "string" ? enc.encode(input) : new Uint8Array(input);
  let s = "";
  for (const b of bytes) s += String.fromCharCode(b);
  return btoa(s).replace(/=+$/, "").replace(/\+/g, "-").replace(/\//g, "_");
}

function b64uDecode(str) {
  str = str.replace(/-/g, "+").replace(/_/g, "/");
  const pad = str.length % 4;
  if (pad) str += "=".repeat(4 - pad);
  const bin = atob(str);
  const bytes = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
  return bytes;
}

async function importKey(secret) {
  return crypto.subtle.importKey(
    "raw",
    enc.encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign", "verify"]
  );
}

/**
 * Sign a payload with HS256.
 * @param {object} payload   Will have iat + exp set automatically.
 * @param {string} secret
 * @param {number} ttlSeconds
 * @returns {Promise<string>} compact JWT
 */
export async function signJWT(payload, secret, ttlSeconds) {
  const now = Math.floor(Date.now() / 1000);
  const claims = {
    ...payload,
    iat: now,
    exp: now + ttlSeconds,
  };
  const header = { alg: "HS256", typ: "JWT" };
  const part1 = b64u(JSON.stringify(header));
  const part2 = b64u(JSON.stringify(claims));
  const data = `${part1}.${part2}`;
  const key = await importKey(secret);
  const sig = await crypto.subtle.sign("HMAC", key, enc.encode(data));
  return `${data}.${b64u(sig)}`;
}

/**
 * Verify a JWT. Returns the claims object if valid, otherwise throws.
 * @param {string} token
 * @param {string} secret
 * @returns {Promise<object>}
 */
export async function verifyJWT(token, secret) {
  if (!token || typeof token !== "string") throw new Error("missing token");
  const parts = token.split(".");
  if (parts.length !== 3) throw new Error("malformed token");
  const [h, p, s] = parts;
  const data = `${h}.${p}`;
  const key = await importKey(secret);
  const sig = b64uDecode(s);
  const ok = await crypto.subtle.verify("HMAC", key, sig, enc.encode(data));
  if (!ok) throw new Error("bad signature");
  const claims = JSON.parse(dec.decode(b64uDecode(p)));
  const now = Math.floor(Date.now() / 1000);
  if (claims.exp && claims.exp < now) throw new Error("expired");
  return claims;
}

/**
 * Generate a random URL-safe token (used for magic links).
 * @param {number} byteLength
 * @returns {string}
 */
export function randomToken(byteLength = 32) {
  const bytes = new Uint8Array(byteLength);
  crypto.getRandomValues(bytes);
  return b64u(bytes);
}
