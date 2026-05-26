/**
 * POST /api/enrollment/submit
 *
 * Public endpoint — anyone can submit an enrollment application.
 *
 * Stores the application in KV at `enrollment:<iso-timestamp>-<random>` so
 * the admin can review them later, and emails the super-user a summary
 * via Resend so they're notified immediately.
 *
 * Rate-limited: max 1 submission per email per 24h (best-effort via KV
 * lookup; not bulletproof but stops casual spam).
 */

import { json, error } from "../../lib/response.js";
import { listSuperUsers } from "../../lib/superusers.js";

const RATE_LIMIT_KEY = (email) => `enrollment-ratelimit:${email.toLowerCase().trim()}`;
const RATE_LIMIT_TTL = 60 * 60 * 24; // 24h

export async function onRequestPost({ request, env }) {
  let body;
  try { body = await request.json(); } catch { return error("invalid JSON", 400); }

  // ---- Validate required fields ----
  const required = ["fullName", "email", "phone", "country", "courses", "agreeTerms", "agreeDisclaimer"];
  for (const f of required) {
    if (body[f] === undefined || body[f] === null || body[f] === "" ||
        (Array.isArray(body[f]) && body[f].length === 0)) {
      return error(`Missing required field: ${f}`, 400);
    }
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email)) {
    return error("Please enter a valid email address.", 400);
  }
  if (!Array.isArray(body.courses) || body.courses.length === 0) {
    return error("Please select at least one course.", 400);
  }
  if (body.agreeTerms !== true || body.agreeDisclaimer !== true) {
    return error("You must accept the terms and the liability disclaimer.", 400);
  }

  const email = body.email.toLowerCase().trim();

  // ---- Rate limit (best-effort) ----
  if (env.USERS_KV) {
    const recent = await env.USERS_KV.get(RATE_LIMIT_KEY(email));
    if (recent) {
      return error(
        "An enrollment request from this email was received within the last 24 hours. We'll contact you soon — please check your inbox (and spam folder).",
        429
      );
    }
  }

  const submission = {
    submission_id: `${new Date().toISOString()}-${Math.random().toString(36).slice(2, 10)}`,
    submitted_at: new Date().toISOString(),
    status: "pending",
    full_name: String(body.fullName).trim().slice(0, 200),
    email,
    phone: String(body.phone).trim().slice(0, 50),
    date_of_birth: String(body.dateOfBirth || "").trim().slice(0, 20),
    country: String(body.country).trim().slice(0, 100),
    city: String(body.city || "").trim().slice(0, 100),
    address: String(body.address || "").trim().slice(0, 500),
    postal_code: String(body.postalCode || "").trim().slice(0, 30),
    highest_qualification: String(body.highestQualification || "").trim().slice(0, 200),
    field_of_study: String(body.fieldOfStudy || "").trim().slice(0, 200),
    current_employer: String(body.currentEmployer || "").trim().slice(0, 200),
    current_role: String(body.currentRole || "").trim().slice(0, 200),
    years_experience: String(body.yearsExperience || "").trim().slice(0, 20),
    courses: body.courses.map(c => String(c).slice(0, 100)).slice(0, 25),
    motivation: String(body.motivation || "").trim().slice(0, 2000),
    target_exam_date: String(body.targetExamDate || "").trim().slice(0, 50),
    referral_source: String(body.referralSource || "").trim().slice(0, 200),
    user_agent: request.headers.get("user-agent")?.slice(0, 300) || "",
    referer: request.headers.get("referer")?.slice(0, 300) || "",
  };

  // ---- Persist to KV ----
  if (env.USERS_KV) {
    try {
      await env.USERS_KV.put(
        `enrollment:${submission.submission_id}`,
        JSON.stringify(submission)
      );
      await env.USERS_KV.put(
        RATE_LIMIT_KEY(email),
        "1",
        { expirationTtl: RATE_LIMIT_TTL }
      );
    } catch (e) {
      console.error("enrollment persist failed:", e);
      // Don't fail the request — at minimum, the admin still gets the email
    }
  }

  // ---- Notify admin via Resend ----
  if (env.RESEND_API_KEY && env.EMAIL_FROM) {
    const adminEmails = listSuperUsers();
    if (adminEmails.length > 0) {
      const html = renderAdminEmail(submission);
      try {
        await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${env.RESEND_API_KEY}`,
          },
          body: JSON.stringify({
            from: `The Cert Hub <${env.EMAIL_FROM}>`,
            to: adminEmails,
            subject: `📥 New enrollment request — ${submission.full_name} (${submission.courses.length} course${submission.courses.length === 1 ? "" : "s"})`,
            html,
          }),
        });
      } catch (e) {
        console.error("admin notification email failed:", e);
        // Submission is still stored; admin can review via KV later
      }
    }
  }

  return json({
    ok: true,
    submission_id: submission.submission_id,
    message: "Thank you for your enrollment request. The site owner will review your application and contact you within 24-48 hours with pricing and next steps.",
  });
}

function renderAdminEmail(s) {
  const row = (label, value) => value ? `
    <tr><td style="padding:6px 12px;background:#f8fafc;font-weight:700;color:#475569;width:200px;border-bottom:1px solid #e2e8f0;">${escapeHtml(label)}</td>
        <td style="padding:6px 12px;color:#0f172a;border-bottom:1px solid #e2e8f0;">${escapeHtml(value)}</td></tr>` : "";
  const coursesList = s.courses.map(c => `<li>${escapeHtml(c)}</li>`).join("");
  return `<!DOCTYPE html><html><body style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;background:#f1f5f9;padding:24px;margin:0;color:#0f172a;">
<div style="max-width:680px;margin:0 auto;background:#fff;border-radius:14px;overflow:hidden;box-shadow:0 4px 12px rgba(0,0,0,0.08);">
<div style="background:linear-gradient(135deg,#4f46e5,#7c3aed,#ec4899);padding:24px 28px;color:#fff;">
  <h1 style="margin:0;font-size:24px;font-weight:800;">📥 New Enrollment Request</h1>
  <p style="margin:6px 0 0;opacity:0.92;font-size:14px;">The Cert Hub · ${escapeHtml(s.submitted_at)}</p>
</div>
<div style="padding:24px 28px;">
  <h2 style="margin:0 0 12px;font-size:18px;color:#1e293b;">${escapeHtml(s.full_name)}</h2>
  <p style="margin:0 0 18px;color:#64748b;font-size:14px;"><a href="mailto:${escapeHtml(s.email)}" style="color:#4f46e5;text-decoration:none;font-weight:600;">${escapeHtml(s.email)}</a> · ${escapeHtml(s.phone)}</p>
  <h3 style="margin:18px 0 6px;font-size:14px;color:#475569;text-transform:uppercase;letter-spacing:0.08em;font-weight:700;">Selected Courses (${s.courses.length})</h3>
  <ul style="margin:0 0 18px;padding-left:22px;color:#0f172a;font-size:14px;line-height:1.65;">${coursesList}</ul>
  <h3 style="margin:18px 0 6px;font-size:14px;color:#475569;text-transform:uppercase;letter-spacing:0.08em;font-weight:700;">Personal Details</h3>
  <table style="width:100%;border-collapse:collapse;font-size:13px;">${row("Country", s.country)}${row("City", s.city)}${row("Address", s.address)}${row("Postal code", s.postal_code)}${row("Date of birth", s.date_of_birth)}</table>
  <h3 style="margin:24px 0 6px;font-size:14px;color:#475569;text-transform:uppercase;letter-spacing:0.08em;font-weight:700;">Education &amp; Professional</h3>
  <table style="width:100%;border-collapse:collapse;font-size:13px;">${row("Highest qualification", s.highest_qualification)}${row("Field of study", s.field_of_study)}${row("Current employer", s.current_employer)}${row("Current role", s.current_role)}${row("Years of experience", s.years_experience)}</table>
  ${s.motivation ? `<h3 style="margin:24px 0 6px;font-size:14px;color:#475569;text-transform:uppercase;letter-spacing:0.08em;font-weight:700;">Motivation</h3><p style="margin:0;padding:14px;background:#f8fafc;border-left:4px solid #4f46e5;border-radius:6px;font-size:13.5px;line-height:1.6;color:#1e293b;">${escapeHtml(s.motivation).replace(/\n/g,"<br>")}</p>` : ""}
  <h3 style="margin:24px 0 6px;font-size:14px;color:#475569;text-transform:uppercase;letter-spacing:0.08em;font-weight:700;">Logistics</h3>
  <table style="width:100%;border-collapse:collapse;font-size:13px;">${row("Target exam date", s.target_exam_date)}${row("How did you hear about us?", s.referral_source)}${row("Submission ID", s.submission_id)}</table>
  <div style="margin-top:28px;padding:14px 18px;background:#eef2ff;border-radius:10px;font-size:13px;color:#3730a3;">
    <strong>Next step:</strong> Open <a href="https://cert-hub.pages.dev/Manage-Users/" style="color:#4f46e5;text-decoration:underline;">Manage Users</a> → create account with email <code style="background:#fff;padding:1px 6px;border-radius:4px;">${escapeHtml(s.email)}</code> and the selected courses. Then reply to this email with pricing and access details.
  </div>
</div>
<div style="padding:14px 28px;background:#f8fafc;border-top:1px solid #e2e8f0;font-size:11px;color:#94a3b8;">
  Automated notification from The Cert Hub enrollment system. Do not reply to this email; reply to the applicant directly at <a href="mailto:${escapeHtml(s.email)}" style="color:#4f46e5;">${escapeHtml(s.email)}</a>.
</div>
</div></body></html>`;
}

function escapeHtml(s) {
  return String(s || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
