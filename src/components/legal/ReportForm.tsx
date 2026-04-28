"use client";

import { FormEvent, useState } from "react";

const reportReasons = [
  "Content concern",
  "Consent or safety concern",
  "Copyright or DMCA concern",
  "Account or billing concern",
  "Other",
];

export function ReportForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <form onSubmit={handleSubmit} className="mt-5 grid grid-cols-1 gap-4">
      <label className="grid gap-2">
        <span className="text-sm font-medium text-violet-200/85">Name (optional)</span>
        <input
          type="text"
          name="name"
          className="h-11 rounded-xl border border-white/10 bg-black/35 px-4 text-white placeholder:text-violet-200/40 focus:border-violet-500/45 focus:outline-none"
          placeholder="Your name"
        />
      </label>

      <label className="grid gap-2">
        <span className="text-sm font-medium text-violet-200/85">Email</span>
        <input
          type="email"
          name="email"
          className="h-11 rounded-xl border border-white/10 bg-black/35 px-4 text-white placeholder:text-violet-200/40 focus:border-violet-500/45 focus:outline-none"
          placeholder="you@example.com"
          required
        />
      </label>

      <label className="grid gap-2">
        <span className="text-sm font-medium text-violet-200/85">Reason</span>
        <select
          name="reason"
          className="h-11 rounded-xl border border-white/10 bg-black/35 px-4 text-white focus:border-violet-500/45 focus:outline-none"
          defaultValue={reportReasons[0]}
        >
          {reportReasons.map((reason) => (
            <option key={reason} value={reason} className="bg-[#140d22] text-white">
              {reason}
            </option>
          ))}
        </select>
      </label>

      <label className="grid gap-2">
        <span className="text-sm font-medium text-violet-200/85">Message</span>
        <textarea
          name="message"
          rows={6}
          className="min-h-[140px] rounded-xl border border-white/10 bg-black/35 px-4 py-3 text-white placeholder:text-violet-200/40 focus:border-violet-500/45 focus:outline-none"
          placeholder="Please describe your concern."
          required
        />
      </label>

      <button
        type="submit"
        className="mt-1 inline-flex h-11 items-center justify-center rounded-full border border-white/15 px-6 text-sm font-semibold tracking-wide text-white shadow-[0_0_44px_-10px_rgba(192,132,252,0.65)] transition hover:scale-[1.01] hover:shadow-[0_0_60px_-8px_rgba(236,72,153,0.58)] active:scale-[0.98]"
        style={{
          background:
            "linear-gradient(135deg, #7c3aed 0%, #a21caf 45%, #5b21b6 100%)",
        }}
      >
        Submit report
      </button>

      {submitted ? (
        <p
          className="rounded-xl border border-emerald-300/20 bg-emerald-500/10 px-4 py-3 text-sm leading-relaxed text-emerald-100"
          role="status"
          aria-live="polite"
        >
          Report submitted (frontend placeholder). A backend handler will be
          needed to process real reports.
        </p>
      ) : null}
    </form>
  );
}
