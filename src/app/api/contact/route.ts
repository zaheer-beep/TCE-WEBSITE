import { NextResponse } from "next/server";

/**
 * Contact form endpoint. Sends the enquiry by email through Resend.
 *
 * Required environment variables (set in Vercel → Project → Settings → Environment Variables):
 *   RESEND_API_KEY     API key from resend.com
 *   CONTACT_TO_EMAIL   inbox that should receive enquiries
 *   CONTACT_FROM_EMAIL (optional) verified sender, e.g. "TCE Website <website@tceproperties.com>"
 *
 * Until these are set the endpoint answers 503 and the form tells the visitor so.
 */

const clean = (v: unknown, max = 2000) =>
  typeof v === "string" ? v.trim().slice(0, max) : "";

const escapeHtml = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);

export async function POST(request: Request) {
  let data: Record<string, unknown>;
  try {
    data = await request.json();
  } catch {
    return NextResponse.json({ error: "invalid_json" }, { status: 400 });
  }

  // Honeypot: pretend success so bots do not retry.
  if (clean(data.website)) return NextResponse.json({ ok: true });

  const fields = {
    Name: `${clean(data.firstName, 100)} ${clean(data.lastName, 100)}`.trim(),
    Email: clean(data.email, 200),
    Phone: clean(data.phone, 50),
    Service: clean(data.service, 100),
    Property: clean(data.property, 300),
    Message: clean(data.message, 5000),
  };

  if (!fields.Name || !fields.Message || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.Email)) {
    return NextResponse.json({ error: "invalid_fields" }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  if (!apiKey || !to) {
    return NextResponse.json({ error: "not_configured" }, { status: 503 });
  }

  const html = Object.entries(fields)
    .filter(([, v]) => v)
    .map(([k, v]) => `<p><strong>${k}:</strong><br>${escapeHtml(v).replace(/\n/g, "<br>")}</p>`)
    .join("");

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: process.env.CONTACT_FROM_EMAIL || "TCE Website <onboarding@resend.dev>",
      to: [to],
      reply_to: fields.Email,
      subject: `Website enquiry: ${fields.Service || "General"} (${fields.Name})`,
      html,
    }),
  });

  if (!res.ok) {
    console.error("Resend error", res.status, await res.text());
    return NextResponse.json({ error: "send_failed" }, { status: 502 });
  }
  return NextResponse.json({ ok: true });
}
