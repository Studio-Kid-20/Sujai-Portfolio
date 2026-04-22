import { randomUUID } from "node:crypto";

import { contactMeta } from "../src/content/site.js";
import { contactFormSchema, type ContactFormValues } from "../src/lib/schemas/contact.js";

const RESEND_ENDPOINT = "https://api.resend.com/emails";
const DEFAULT_FROM = "Sujai Portfolio <onboarding@resend.dev>";

function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function normalizeBody(body: unknown) {
  if (typeof body === "string") {
    try {
      return JSON.parse(body);
    } catch {
      return null;
    }
  }

  return body ?? null;
}

type ApiRequest = {
  method?: string;
  body?: unknown;
};

type ApiResponse = {
  setHeader(name: string, value: string): void;
  status(code: number): ApiResponse;
  json(payload: unknown): void;
};

function renderEmail(data: {
  name: string;
  email: string;
  subject: string;
  message: string;
}) {
  const submittedAt = new Date().toISOString();
  const escapedMessage = escapeHtml(data.message).replaceAll("\n", "<br />");

  return {
    subject: `New portfolio enquiry from ${data.name}`,
    text: [
      "New portfolio enquiry received",
      "",
      `Name: ${data.name}`,
      `Email: ${data.email}`,
      `Subject: ${data.subject}`,
      `Submitted: ${submittedAt}`,
      "",
      "Message:",
      data.message,
      "",
      `Reply to: ${data.email}`,
    ].join("\n"),
    html: `<!doctype html>
<html lang="en">
  <body style="margin:0;background:#0b1020;font-family:Inter,Arial,sans-serif;color:#e5e7eb;">
    <div style="max-width:640px;margin:0 auto;padding:32px 20px;">
      <div style="border:1px solid rgba(255,255,255,.08);border-radius:24px;overflow:hidden;background:linear-gradient(180deg,rgba(19,23,49,.98),rgba(11,16,32,.98));box-shadow:0 20px 60px rgba(0,0,0,.35);">
        <div style="padding:28px 28px 20px;border-bottom:1px solid rgba(255,255,255,.08);">
          <div style="font-size:12px;letter-spacing:.2em;text-transform:uppercase;color:#9ca3af;font-weight:700;">Website Contact Form</div>
          <h1 style="margin:12px 0 8px;font-size:28px;line-height:1.15;color:#ffffff;">New enquiry from ${escapeHtml(
            data.name,
          )}</h1>
          <p style="margin:0;color:#cbd5e1;font-size:15px;line-height:1.7;">A visitor submitted the portfolio contact form and the details are below.</p>
        </div>
        <div style="padding:28px;">
          <table style="width:100%;border-collapse:collapse;margin-bottom:24px;font-size:14px;">
            <tr>
              <td style="padding:10px 0;color:#94a3b8;width:120px;">Name</td>
              <td style="padding:10px 0;color:#ffffff;font-weight:600;">${escapeHtml(data.name)}</td>
            </tr>
            <tr>
              <td style="padding:10px 0;color:#94a3b8;">Email</td>
              <td style="padding:10px 0;color:#ffffff;font-weight:600;">${escapeHtml(data.email)}</td>
            </tr>
            <tr>
              <td style="padding:10px 0;color:#94a3b8;">Subject</td>
              <td style="padding:10px 0;color:#ffffff;font-weight:600;">${escapeHtml(data.subject)}</td>
            </tr>
            <tr>
              <td style="padding:10px 0;color:#94a3b8;">Submitted</td>
              <td style="padding:10px 0;color:#ffffff;font-weight:600;">${escapeHtml(submittedAt)}</td>
            </tr>
          </table>
          <div style="margin-bottom:10px;font-size:14px;color:#94a3b8;text-transform:uppercase;letter-spacing:.12em;font-weight:700;">Message</div>
          <div style="white-space:normal;line-height:1.8;font-size:15px;color:#f8fafc;background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.06);border-radius:18px;padding:18px 18px 20px;">${escapedMessage}</div>
          <p style="margin:22px 0 0;font-size:13px;line-height:1.7;color:#94a3b8;">Reply directly to this email to continue the conversation with ${escapeHtml(
            data.name,
          )}.</p>
        </div>
      </div>
      <p style="margin:18px 6px 0;font-size:12px;color:#64748b;text-align:center;">Sent to ${escapeHtml(
        contactMeta.email,
      )} from the Sujai portfolio contact form.</p>
    </div>
  </body>
</html>`,
  };
}

function extractErrorMessage(text: string) {
  if (!text) return "";

  try {
    const parsed = JSON.parse(text) as { message?: unknown; error?: unknown };
    if (typeof parsed.message === "string" && parsed.message.trim()) {
      return parsed.message.trim();
    }
    if (typeof parsed.error === "string" && parsed.error.trim()) {
      return parsed.error.trim();
    }
  } catch {
    // Fall through to raw text.
  }

  return text.trim();
}

export default async function handler(req: ApiRequest, res: ApiResponse) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    res.status(405).json({ message: "Method not allowed" });
    return;
  }

  const parsed = contactFormSchema.safeParse(normalizeBody(req.body));
  if (!parsed.success) {
    res.status(400).json({
      message: "Please complete all required fields before sending the message.",
    });
    return;
  }

  const formData = parsed.data as Required<ContactFormValues>;

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    res.status(500).json({
      message: "Email delivery is not configured yet. Add RESEND_API_KEY in Vercel.",
    });
    return;
  }

  const toEmail = process.env.CONTACT_TO_EMAIL ?? contactMeta.email;
  const fromEmail = process.env.CONTACT_FROM_EMAIL ?? DEFAULT_FROM;
  const payload = renderEmail({
    name: formData.name,
    email: formData.email,
    subject: formData.subject,
    message: formData.message,
  });

  const response = await fetch(RESEND_ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
      "User-Agent": "sujai-portfolio/1.0",
      "Idempotency-Key": randomUUID(),
    },
    body: JSON.stringify({
      from: fromEmail,
      to: [toEmail],
      subject: payload.subject,
      html: payload.html,
      text: payload.text,
      headers: {
        "Reply-To": formData.email,
      },
    }),
  });

  if (!response.ok) {
    const errorText = await response.text().catch(() => "");
    const message = extractErrorMessage(errorText);
    res.status(502).json({
      message:
        message ||
        "We could not send the email right now. Please try again later or check your Resend domain and API key settings.",
    });
    return;
  }

  res.status(200).json({
    message: "Thanks — your message was sent. I’ll get back to you soon.",
  });
}
