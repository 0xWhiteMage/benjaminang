"use server";

import { site } from "@/lib/site";

type Result = { ok: true } | { ok: false; error: string };

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function submitInquiry(data: FormData): Promise<Result> {
  // Honeypot — silently succeed.
  if (data.get("company_url")) return { ok: true };

  const name = (data.get("name") as string | null)?.trim() ?? "";
  const email = (data.get("email") as string | null)?.trim() ?? "";
  const company = ((data.get("company") as string | null) ?? "").trim();
  const projectType = ((data.get("projectType") as string | null) ?? "").trim();
  const budget = ((data.get("budget") as string | null) ?? "").trim();
  const message = ((data.get("message") as string | null) ?? "").trim();

  if (!name || !email || !message) {
    return { ok: false, error: "Missing required fields." };
  }
  if (!EMAIL_RE.test(email)) {
    return { ok: false, error: "Please enter a valid email address." };
  }
  if (message.length > 2000) {
    return { ok: false, error: "Message is too long." };
  }

  // Build payload. In production, this would forward to email / Slack / CRM.
  const payload = {
    name,
    email,
    company,
    projectType,
    budget,
    message,
    receivedAt: new Date().toISOString(),
    to: site.email,
  };

  // Log to server console — replace with provider in production (Resend, Postmark, etc.).
  // eslint-disable-next-line no-console
  console.info("[inquiry]", JSON.stringify(payload));

  return { ok: true };
}
