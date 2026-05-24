/**
 * Send transactional email via Resend.com API.
 *
 * Requires:
 *   env.RESEND_API_KEY   — get one at https://resend.com/api-keys (free)
 *   env.EMAIL_FROM       — e.g. "auth@certhub.com" (custom domain required for production)
 *                          OR "onboarding@resend.dev" (Resend's default sender, works
 *                          out-of-the-box for testing, send-to-yourself only).
 */

const RESEND_URL = "https://api.resend.com/emails";

/**
 * Send a magic-link email.
 *
 * @param {object} env
 * @param {string} to      Recipient email
 * @param {string} link    The fully-qualified verification URL
 * @returns {Promise<{ok: boolean, status: number, body?: string}>}
 */
export async function sendMagicLink(env, to, link) {
  if (!env.RESEND_API_KEY) {
    return { ok: false, status: 500, body: "RESEND_API_KEY not configured" };
  }
  const from = env.EMAIL_FROM || "onboarding@resend.dev";
  const html = magicLinkHTML(link);
  const text = magicLinkText(link);

  const res = await fetch(RESEND_URL, {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${env.RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [to],
      subject: "Your login link — The Cert Hub",
      html,
      text,
    }),
  });

  const body = await res.text();
  return { ok: res.ok, status: res.status, body };
}

function magicLinkHTML(link) {
  return `<!DOCTYPE html>
<html><body style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;background:#f8fafc;padding:40px 20px;color:#0f172a">
<div style="max-width:520px;margin:0 auto;background:#fff;padding:32px;border-radius:16px;box-shadow:0 4px 24px rgba(0,0,0,0.06)">
  <div style="font-size:32px;margin-bottom:8px">🎓</div>
  <h1 style="margin:0 0 16px;font-size:22px;font-weight:800;letter-spacing:-0.01em">Sign in to The Cert Hub</h1>
  <p style="line-height:1.6;color:#475569;margin:0 0 24px">Click the button below to sign in. This link expires in <strong>15 minutes</strong> and works only once.</p>
  <div style="text-align:center;margin:32px 0">
    <a href="${link}" style="display:inline-block;background:linear-gradient(135deg,#6366f1 0%,#8b5cf6 50%,#a855f7 100%);color:#fff;text-decoration:none;font-weight:700;padding:14px 28px;border-radius:12px;font-size:16px;box-shadow:0 8px 22px -6px rgba(139,92,246,0.55)">Sign in</a>
  </div>
  <p style="line-height:1.6;color:#64748b;font-size:13px;margin:0 0 8px">Or copy and paste this URL into your browser:</p>
  <p style="line-height:1.5;color:#94a3b8;font-size:12px;word-break:break-all;background:#f1f5f9;padding:12px 14px;border-radius:8px;font-family:Menlo,Consolas,monospace">${link}</p>
  <hr style="border:none;border-top:1px solid #e2e8f0;margin:32px 0 16px"/>
  <p style="line-height:1.5;color:#94a3b8;font-size:12px;margin:0">If you didn't try to sign in, you can safely ignore this email. Nobody can access your account without this one-time link.</p>
  <p style="line-height:1.5;color:#94a3b8;font-size:12px;margin:16px 0 0">© Humayun Zafar · The Cert Hub</p>
</div>
</body></html>`;
}

function magicLinkText(link) {
  return `Sign in to The Cert Hub

Click this link to sign in. It expires in 15 minutes and works only once.

${link}

If you didn't try to sign in, you can safely ignore this email.

© Humayun Zafar · The Cert Hub`;
}
