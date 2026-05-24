/**
 * POST /api/auth/request-link
 * Body: { email: "user@example.com", next?: "/01-Scrum-Master/Module-01/Reading/" }
 *
 * If the email is registered (in USERS_KV or hardcoded as super-user), generate
 * a 32-byte token, store it in KV with 15-min TTL, and email the user a magic
 * link. Always returns { ok: true } regardless of whether the email exists —
 * we never leak which emails are registered.
 */

import { json, error } from "../../lib/response.js";
import { getUser, storeMagicLink } from "../../lib/kv.js";
import { sendMagicLink } from "../../lib/email.js";
import { randomToken } from "../../lib/jwt.js";

export async function onRequestPost({ request, env }) {
  let body;
  try {
    body = await request.json();
  } catch {
    return error("invalid JSON body", 400);
  }
  const email = (body.email || "").toString().toLowerCase().trim();
  const next = (body.next || "/").toString();

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return error("invalid email", 400);
  }
  // Limit redirect to same-origin paths to prevent open-redirect abuse
  const safeNext = next.startsWith("/") && !next.startsWith("//") ? next : "/";

  // Look up the user. If they don't exist, we still return ok=true and
  // silently do nothing — this prevents email-enumeration attacks.
  const user = await getUser(env, email);

  if (user) {
    const token = randomToken(32);
    const ttl = parseInt(env.MAGIC_LINK_TTL_SECONDS || "900", 10);
    await storeMagicLink(env, token, email, ttl);

    const siteUrl = env.SITE_URL || new URL(request.url).origin;
    const link = `${siteUrl}/api/auth/verify?token=${token}&next=${encodeURIComponent(safeNext)}`;

    const result = await sendMagicLink(env, email, link);
    if (!result.ok) {
      // Log the failure server-side but still return ok=true to the user
      console.error("magic-link email failed:", result.status, result.body);
      // In dev, surface the link directly so testing works without email
      if (env.SITE_URL && env.SITE_URL.includes("localhost")) {
        return json({ ok: true, dev_link: link });
      }
    }
  }

  // Always return the same response — no enumeration leak
  return json({
    ok: true,
    message: "If that email is registered, a sign-in link has been sent. Check your inbox in the next minute.",
  });
}
