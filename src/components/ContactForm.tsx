"use client";

import { useState } from "react";
import { services } from "@/lib/services";
import { Icon } from "./Icon";

type Status = "idle" | "sending" | "sent" | "error" | "unavailable";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(new FormData(form))),
      });
      if (res.ok) {
        form.reset();
        setStatus("sent");
      } else {
        setStatus(res.status === 503 ? "unavailable" : "error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="card p-8" role="status">
        <span className="inline-flex size-12 items-center justify-center rounded-full bg-brand/15 text-brand">
          <Icon name="check" />
        </span>
        <h2 className="mt-5 text-2xl font-semibold tracking-tight">Message received.</h2>
        <p className="mt-3 leading-relaxed text-mist">
          Thank you. A member of the TCE team will be in touch shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="card space-y-5 p-6 sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block text-sm font-medium">
          First name
          <input name="firstName" required autoComplete="given-name" className="field mt-2" />
        </label>
        <label className="block text-sm font-medium">
          Last name
          <input name="lastName" required autoComplete="family-name" className="field mt-2" />
        </label>
        <label className="block text-sm font-medium">
          Email
          <input name="email" type="email" required autoComplete="email" className="field mt-2" />
        </label>
        <label className="block text-sm font-medium">
          Phone
          <input name="phone" type="tel" autoComplete="tel" className="field mt-2" />
        </label>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block text-sm font-medium">
          I am interested in
          <select name="service" defaultValue="" required className="field mt-2">
            <option value="" disabled>
              Select a service
            </option>
            {services.map((s) => (
              <option key={s.slug} value={s.title}>
                {s.title}
              </option>
            ))}
            <option value="Full-service proposal">Full-service proposal</option>
            <option value="Other">Other</option>
          </select>
        </label>
        <label className="block text-sm font-medium">
          Property address or neighborhood
          <input name="property" autoComplete="off" className="field mt-2" />
        </label>
      </div>

      <label className="block text-sm font-medium">
        How can we help?
        <textarea name="message" required rows={5} className="field mt-2 resize-y" />
      </label>

      {/* Honeypot: hidden from people, filled in by bots. */}
      <div className="hidden" aria-hidden="true">
        <label>
          Company website
          <input name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className="flex flex-wrap items-center gap-4">
        <button type="submit" disabled={status === "sending"} className="btn-primary disabled:opacity-60">
          {status === "sending" ? "Sending…" : "Send message"}
          <Icon name="arrow" className="size-4" />
        </button>
        <p className="text-xs text-mist">
          By sending, you agree to our{" "}
          <a href="/privacy-policy" className="underline hover:text-sky">
            privacy policy
          </a>
          .
        </p>
      </div>

      <p role="alert" className="min-h-5 text-sm text-red-300">
        {status === "error" && "Something went wrong and your message was not sent. Please try again."}
        {status === "unavailable" &&
          "The online form is not accepting messages right now. Please reach us at our office instead."}
      </p>
    </form>
  );
}
