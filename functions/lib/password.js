/**
 * Password hashing using PBKDF2-SHA256 (built into Workers crypto.subtle).
 *
 * Why PBKDF2 and not bcrypt/argon2?
 *   - Cloudflare Workers don't ship with bcrypt/argon2 natively. PBKDF2 is
 *     available via SubtleCrypto and is widely accepted as secure when used
 *     with a high iteration count (100,000+) and a unique salt per user.
 *   - 100k iterations is the OWASP-recommended minimum for PBKDF2-SHA256 as
 *     of 2026 and runs in well under 100ms on Workers (no perf issue for login).
 *
 * Storage format (in the user record):
 *   {
 *     password_salt: "base64",  // 16 random bytes
 *     password_hash: "base64",  // 32-byte PBKDF2 output
 *   }
 *
 * Constants:
 *   TEMP_PASSWORD = "87654321" — the standard initial password the super-user
 *   sets for every newly-created account. The user is forced to change it on
 *   first sign-in (must_change_password: true).
 */

const ITERATIONS = 100_000;
const KEY_LENGTH_BITS = 256;
const SALT_LENGTH_BYTES = 16;

export const TEMP_PASSWORD = "87654321";

/**
 * Generate a fresh random salt (16 bytes, base64-encoded).
 */
export function generateSalt() {
  const bytes = new Uint8Array(SALT_LENGTH_BYTES);
  crypto.getRandomValues(bytes);
  return b64encode(bytes);
}

/**
 * Hash a password with the given salt.
 *
 * @param {string} password
 * @param {string} saltB64
 * @returns {Promise<string>} base64-encoded 32-byte hash
 */
export async function hashPassword(password, saltB64) {
  const enc = new TextEncoder();
  const keyMaterial = await crypto.subtle.importKey(
    "raw",
    enc.encode(password),
    { name: "PBKDF2" },
    false,
    ["deriveBits"]
  );
  const saltBytes = b64decode(saltB64);
  const bits = await crypto.subtle.deriveBits(
    {
      name: "PBKDF2",
      salt: saltBytes,
      iterations: ITERATIONS,
      hash: "SHA-256",
    },
    keyMaterial,
    KEY_LENGTH_BITS
  );
  return b64encode(new Uint8Array(bits));
}

/**
 * Verify a password against the stored salt + hash.
 *
 * Uses constant-time comparison to prevent timing attacks.
 *
 * @param {string} password
 * @param {string} saltB64
 * @param {string} expectedHashB64
 * @returns {Promise<boolean>}
 */
export async function verifyPassword(password, saltB64, expectedHashB64) {
  if (!password || !saltB64 || !expectedHashB64) return false;
  const computed = await hashPassword(password, saltB64);
  return constantTimeEquals(computed, expectedHashB64);
}

/**
 * Validate a new password against complexity rules.
 *
 * Rules:
 *   - At least 8 characters
 *   - Must contain at least one letter AND one number
 *   - Cannot equal the temp password (otherwise "changing" is a no-op)
 *
 * @param {string} password
 * @returns {{ ok: boolean, error?: string }}
 */
export function validateNewPassword(password) {
  if (typeof password !== "string") return { ok: false, error: "password must be a string" };
  if (password.length < 8) return { ok: false, error: "password must be at least 8 characters" };
  if (!/[A-Za-z]/.test(password)) return { ok: false, error: "password must contain at least one letter" };
  if (!/\d/.test(password)) return { ok: false, error: "password must contain at least one number" };
  if (password === TEMP_PASSWORD) return { ok: false, error: "new password cannot be the temporary password" };
  return { ok: true };
}

/**
 * Build a fresh password record (salt + hash) for the given plaintext.
 *
 * @param {string} password
 * @returns {Promise<{ password_salt: string, password_hash: string }>}
 */
export async function buildPasswordRecord(password) {
  const salt = generateSalt();
  const hash = await hashPassword(password, salt);
  return { password_salt: salt, password_hash: hash };
}

// ---------- internal helpers ----------

function b64encode(bytes) {
  let s = "";
  for (let i = 0; i < bytes.length; i++) s += String.fromCharCode(bytes[i]);
  return btoa(s);
}

function b64decode(s) {
  const bin = atob(s);
  const out = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) out[i] = bin.charCodeAt(i);
  return out;
}

function constantTimeEquals(a, b) {
  if (a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i++) diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return diff === 0;
}
