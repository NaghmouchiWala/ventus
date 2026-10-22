import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let email: unknown;
  try {
    const body = await request.json();
    email = body?.email;
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  if (typeof email !== "string" || !EMAIL_RE.test(email) || email.length > 320) {
    return NextResponse.json({ error: "Invalid email address" }, { status: 400 });
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

  try {
    await transporter.sendMail({
      from: `"VENTUS — Précommandes" <${SMTP_USER}>`,
      to: PREORDER_NOTIFY_TO,
      replyTo: email,
      subject: "Nouvelle précommande VENTUS",
      text: `Un visiteur a demandé à être tenu informé du lancement de VENTUS.\n\nEmail : ${email}\nDate : ${submittedAt}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 480px; margin: 0 auto;">
          <h2 style="color:#0a0a0a;">Nouvelle précommande VENTUS</h2>
          <p>Un visiteur a demandé à être tenu informé du lancement de VENTUS.</p>
          <table style="border-collapse: collapse; margin-top: 16px;">
            <tr><td style="padding:4px 12px 4px 0; color:#666;">Email</td><td style="padding:4px 0;"><strong>${email}</strong></td></tr>
            <tr><td style="padding:4px 12px 4px 0; color:#666;">Date</td><td style="padding:4px 0;">${submittedAt}</td></tr>
          </table>
        </div>
      `,
    });
  } catch (err) {
    console.error("Failed to send preorder notification email", err);
    return NextResponse.json({ error: "Failed to send notification" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
