import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const SUBJECTS: Record<string, string> = {
  general: "Question générale",
  sales: "Demande commerciale / revendeur",
  support: "Support après-vente",
  press: "Presse / partenariat",
};

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const name = typeof body.name === "string" ? body.name.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim() : "";
  const phone = typeof body.phone === "string" ? body.phone.trim() : "";
  const subjectKey = typeof body.subject === "string" ? body.subject : "";
  const product = typeof body.product === "string" ? body.product.trim() : "";
  const message = typeof body.message === "string" ? body.message.trim() : "";

  if (!name || name.length > 120) {
    return NextResponse.json({ error: "Nom invalide" }, { status: 400 });
  }
  if (!EMAIL_RE.test(email) || email.length > 320) {
    return NextResponse.json({ error: "Email invalide" }, { status: 400 });
  }
  if (phone.length > 40) {
    return NextResponse.json({ error: "Téléphone invalide" }, { status: 400 });
  }
  if (!SUBJECTS[subjectKey]) {
    return NextResponse.json({ error: "Sujet invalide" }, { status: 400 });
  }
  if (product.length > 120) {
    return NextResponse.json({ error: "Modèle invalide" }, { status: 400 });
  }
  if (!message || message.length > 4000) {
    return NextResponse.json({ error: "Message invalide" }, { status: 400 });
  }

  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, PREORDER_NOTIFY_TO } = process.env;

  if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS || !PREORDER_NOTIFY_TO) {
    console.error("Missing SMTP configuration environment variables");
    return NextResponse.json({ error: "Server not configured" }, { status: 500 });
  }

  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT),
    secure: Number(SMTP_PORT) === 465,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });

  const submittedAt = new Date().toISOString();
  const subjectLabel = SUBJECTS[subjectKey];

  const rows = [
    ["Nom", name],
    ["Email", email],
    ["Téléphone", phone || "—"],
    ["Sujet", subjectLabel],
    ["Modèle concerné", product || "—"],
    ["Date", submittedAt],
  ];

  try {
    await transporter.sendMail({
      from: `"VENTUS — Contact" <${SMTP_USER}>`,
      to: PREORDER_NOTIFY_TO,
      replyTo: email,
      subject: `[Contact VENTUS] ${subjectLabel} — ${name}`,
      text: `Nouveau message depuis le formulaire de contact VENTUS.\n\n${rows
        .map(([k, v]) => `${k} : ${v}`)
        .join("\n")}\n\nMessage :\n${message}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 520px; margin: 0 auto;">
          <h2 style="color:#0a0a0a;">Nouveau message de contact VENTUS</h2>
          <table style="border-collapse: collapse; margin-top: 16px; width: 100%;">
            ${rows
              .map(
                ([k, v]) =>
                  `<tr><td style="padding:4px 12px 4px 0; color:#666; vertical-align:top;">${escapeHtml(
                    k
                  )}</td><td style="padding:4px 0;"><strong>${escapeHtml(v)}</strong></td></tr>`
              )
              .join("")}
          </table>
          <p style="margin-top:16px; color:#666;">Message</p>
          <p style="white-space: pre-wrap; border-left: 3px solid #2dd4bf; padding-left: 12px;">${escapeHtml(
            message
          )}</p>
        </div>
      `,
    });
  } catch (err) {
    console.error("Failed to send contact email", err);
    return NextResponse.json({ error: "Failed to send message" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
