"use client";

import { useState } from "react";
import { Button, ButtonLink } from "@/components/button";
import { site } from "@/lib/site";
import styles from "./contact-panel.module.css";

const PROJECT_TYPES = [
  "Brand film",
  "Campaign motion",
  "Motion design / idents",
  "Explainer film",
  "Event / stage film",
  "Speaking engagement",
  "Workshop / mentorship",
  "Other",
] as const;

const BUDGETS = [
  "< S$10K",
  "S$10K – 25K",
  "S$25K – 50K",
  "S$50K – 100K",
  "S$100K+",
  "Not sure yet",
] as const;

type Status = "idle" | "submitting" | "success" | "error";

export function ContactPanel() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState<string>("");
  const [errors, setErrors] = useState<Record<string, string>>({});

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setMessage("");
    setErrors({});

    const form = e.currentTarget;
    const data = new FormData(form);

    // Honeypot — if filled, silently succeed without sending.
    if (data.get("company_url")) {
      setStatus("success");
      setMessage("Thanks. We'll be in touch shortly.");
      form.reset();
      return;
    }

    const clientErrors: Record<string, string> = {};
    if (!data.get("name")) clientErrors.name = "Please share your name.";
    if (!data.get("email")) clientErrors.email = "Please share an email.";
    if (!data.get("message")) clientErrors.message = "Tell us about the project.";

    if (Object.keys(clientErrors).length) {
      setErrors(clientErrors);
      setStatus("idle");
      return;
    }

    const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const name = (data.get("name") as string | null)?.trim() ?? "";
    const email = (data.get("email") as string | null)?.trim() ?? "";
    const message = ((data.get("message") as string | null) ?? "").trim();

    if (!name || !email || !message) {
      setStatus("error");
      setMessage("Missing required fields.");
      return;
    }
    if (!EMAIL_RE.test(email)) {
      setStatus("error");
      setMessage("Please enter a valid email address.");
      return;
    }
    if (message.length > 2000) {
      setStatus("error");
      setMessage("Message is too long.");
      return;
    }

    // Client-side only — just show success (no backend in static export).
    setStatus("success");
    setMessage("Inquiry received. Expect a reply within 1–2 business days.");
    form.reset();
  }

  return (
    <section className={styles.panel} aria-labelledby="form-title">
      <div className={`container ${styles.grid}`}>
        <aside className={styles.aside}>
          <div>
            <ButtonLink href="/contact" variant="primary">
              Contact {site.name.split(" ")[0]}
            </ButtonLink>
            <p className={styles.response}>
              <span aria-hidden>⏱</span> Typically responds within 1–2 business days
            </p>
          </div>

          <div className={styles.connect}>
            <h2>Let's connect</h2>
            <a href={`mailto:${site.email}`} className={styles.emailRow}>
              <span className={styles.socialIcon} aria-hidden>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <polyline points="3 7 12 13 21 7" />
                </svg>
              </span>
              <span>
                <strong>Email</strong>
                <span>{site.email}</span>
              </span>
            </a>
            <ul>
              <li>
                <a href={site.social.linkedin} target="_blank" rel="noopener noreferrer" className={styles.socialRow}>
                  <span className={styles.socialIcon} aria-hidden>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM0 8h5v16H0V8zm7.5 0H12v2.2h.07c.62-1.18 2.14-2.42 4.41-2.42C20.5 7.78 22 10.07 22 13.6V24h-5v-9.06c0-2.16-.04-4.94-3.01-4.94-3.01 0-3.47 2.35-3.47 4.78V24H7.5V8z"/>
                    </svg>
                  </span>
                  <span>
                    <strong>LinkedIn</strong>
                    <span>Connect on LinkedIn</span>
                  </span>
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
                    <line x1="4" y1="12" x2="20" y2="12" />
                    <polyline points="14 6 20 12 14 18" />
                  </svg>
                </a>
              </li>
              <li>
                <a href={site.social.instagram} target="_blank" rel="noopener noreferrer" className={styles.socialRow}>
                  <span className={styles.socialIcon} aria-hidden>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                      <rect x="2" y="2" width="20" height="20" rx="5" />
                      <circle cx="12" cy="12" r="4" />
                      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
                    </svg>
                  </span>
                  <span>
                    <strong>Instagram</strong>
                    <span>Behind the scenes</span>
                  </span>
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
                    <line x1="4" y1="12" x2="20" y2="12" />
                    <polyline points="14 6 20 12 14 18" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>

          <ul className={styles.discList}>
            <li>Creative direction</li>
            <li>Motion design</li>
            <li>Strategy</li>
          </ul>
        </aside>

        <form
          className={styles.form}
          onSubmit={onSubmit}
          noValidate
          aria-labelledby="form-title"
        >
          <h2 id="form-title" className={styles.formTitle}>Send an inquiry</h2>

          {/* Honeypot */}
          <div className={styles.honeypot} aria-hidden>
            <label htmlFor="company_url">Leave this field empty</label>
            <input id="company_url" name="company_url" type="text" tabIndex={-1} autoComplete="off" />
          </div>

          <div className={styles.row}>
            <Field label="Name" id="name" name="name" type="text" placeholder="Your full name" required error={errors.name} />
            <Field label="Email" id="email" name="email" type="email" placeholder="you@example.com" required error={errors.email} />
          </div>

          <Field label="Company" id="company" name="company" type="text" placeholder="Your company or organisation" />

          <div className={styles.row}>
            <SelectField label="Project Type" id="projectType" name="projectType" options={PROJECT_TYPES} />
            <SelectField label="Budget Range" id="budget" name="budget" options={BUDGETS} />
          </div>

          <div className={styles.field}>
            <label htmlFor="message">
              Message <span className={styles.req} aria-hidden>*</span>
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              maxLength={2000}
              placeholder="Tell me about your project, goals, and how I can help..."
              aria-required="true"
              aria-invalid={Boolean(errors.message)}
              aria-describedby={errors.message ? "message-error" : "message-count"}
            />
            <div className={styles.fieldFoot}>
              {errors.message ? (
                <span id="message-error" className={styles.err}>{errors.message}</span>
              ) : (
                <span />
              )}
              <span id="message-count" className="mono">0 / 2000</span>
            </div>
          </div>

          <div className={styles.actions}>
            <Button type="submit" disabled={status === "submitting"}>
              {status === "submitting" ? "Sending…" : "Send inquiry"}
            </Button>
          </div>

          <p className={styles.privacy}>
            <span aria-hidden>🔒</span> Your information is kept private and will only be used to respond to your inquiry.
          </p>

          <div
            className={`${styles.status} ${status === "success" ? styles.statusOk : ""} ${status === "error" ? styles.statusErr : ""}`}
            role="status"
            aria-live="polite"
          >
            {message}
          </div>
        </form>
      </div>
    </section>
  );
}

function Field({
  label,
  id,
  name,
  type = "text",
  placeholder,
  required,
  error,
}: {
  label: string;
  id: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  error?: string;
}) {
  return (
    <div className={styles.field}>
      <label htmlFor={id}>
        {label} {required && <span className={styles.req} aria-hidden>*</span>}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        aria-required={required || undefined}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        autoComplete={type === "email" ? "email" : name === "name" ? "name" : name === "company" ? "organization" : undefined}
      />
      {error && <span id={`${id}-error`} className={styles.err}>{error}</span>}
    </div>
  );
}

function SelectField({
  label,
  id,
  name,
  options,
}: {
  label: string;
  id: string;
  name: string;
  options: readonly string[];
}) {
  return (
    <div className={styles.field}>
      <label htmlFor={id}>{label}</label>
      <div className={styles.selectWrap}>
        <select id={id} name={name} defaultValue="">
          <option value="" disabled>Select {label.toLowerCase()}</option>
          {options.map((o) => (
            <option key={o} value={o}>{o}</option>
          ))}
        </select>
        <svg className={styles.chev} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </div>
    </div>
  );
}
