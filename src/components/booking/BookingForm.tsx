"use client";

import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

type SubmitState = "idle" | "submitting" | "error";

export function BookingForm() {
  const router = useRouter();
  const [submitState, setSubmitState] = useState<SubmitState>("idle");
  const [error, setError] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");

    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") || "").trim();
    const contact = String(data.get("contact") || "").trim();
    const bookingType = String(data.get("bookingType") || "").trim();
    const duration = String(data.get("duration") || "").trim();

    if (!name || !contact || !bookingType || !duration) {
      setError("Please fill in your name, contact, booking type, and duration.");
      return;
    }

    setSubmitState("submitting");
    router.push("/booking/thank-you");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2"
      noValidate
    >
      <label className="grid gap-2">
        <span className="text-sm font-medium text-violet-200/80">Name</span>
        <input
          name="name"
          type="text"
          autoComplete="name"
          required
          className="h-11 rounded-xl border border-white/10 bg-black/30 px-4 text-white placeholder:text-violet-200/40 focus:border-violet-500/40 focus:outline-none"
        />
      </label>

      <label className="grid gap-2">
        <span className="text-sm font-medium text-violet-200/80">
          Contact (email or phone)
        </span>
        <input
          name="contact"
          type="text"
          required
          className="h-11 rounded-xl border border-white/10 bg-black/30 px-4 text-white placeholder:text-violet-200/40 focus:border-violet-500/40 focus:outline-none"
        />
      </label>

      <label className="grid gap-2">
        <span className="text-sm font-medium text-violet-200/80">
          Booking type
        </span>
        <select
          name="bookingType"
          required
          defaultValue=""
          className="h-11 rounded-xl border border-white/10 bg-black/30 px-4 text-white focus:border-violet-500/40 focus:outline-none"
        >
          <option value="" disabled>
            Select type
          </option>
          <option value="incall">Incall</option>
          <option value="outcall">Outcall</option>
        </select>
      </label>

      <label className="grid gap-2">
        <span className="text-sm font-medium text-violet-200/80">Duration</span>
        <select
          name="duration"
          required
          defaultValue=""
          className="h-11 rounded-xl border border-white/10 bg-black/30 px-4 text-white focus:border-violet-500/40 focus:outline-none"
        >
          <option value="" disabled>
            Select duration
          </option>
          <option value="60m">60 minutes</option>
          <option value="120m">2 hours</option>
          <option value="overnight">Overnight (10 hours)</option>
        </select>
      </label>

      <label className="grid gap-2">
        <span className="text-sm font-medium text-violet-200/80">
          Preferred date
        </span>
        <input
          name="date"
          type="date"
          className="h-11 rounded-xl border border-white/10 bg-black/30 px-4 text-white placeholder:text-violet-200/40 focus:border-violet-500/40 focus:outline-none"
        />
      </label>

      <label className="grid gap-2">
        <span className="text-sm font-medium text-violet-200/80">
          Preferred start time
        </span>
        <input
          name="time"
          type="time"
          className="h-11 rounded-xl border border-white/10 bg-black/30 px-4 text-white placeholder:text-violet-200/40 focus:border-violet-500/40 focus:outline-none"
        />
      </label>

      <label className="grid gap-2 md:col-span-2">
        <span className="text-sm font-medium text-violet-200/80">
          Area / location notes
        </span>
        <input
          name="location"
          type="text"
          className="h-11 rounded-xl border border-white/10 bg-black/30 px-4 text-white placeholder:text-violet-200/40 focus:border-violet-500/40 focus:outline-none"
          placeholder="City, district, or hotel area"
        />
      </label>

      <label className="grid gap-2 md:col-span-2">
        <span className="text-sm font-medium text-violet-200/80">
          Additional details
        </span>
        <textarea
          name="details"
          rows={5}
          className="min-h-[130px] resize-y rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white placeholder:text-violet-200/40 focus:border-violet-500/40 focus:outline-none"
          placeholder="Share any scheduling preferences or relevant booking notes."
        />
      </label>

      <label className="md:col-span-2 inline-flex items-start gap-3 rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-violet-100/85">
        <input
          name="consent"
          type="checkbox"
          required
          className="mt-0.5 size-4 rounded border-white/20 bg-black/40 accent-violet-500"
        />
        <span>
          I confirm that I am 18 or older and agree that this is a non-binding
          booking request.
        </span>
      </label>

      {error ? (
        <p
          className="md:col-span-2 rounded-xl border border-rose-300/20 bg-rose-500/10 px-4 py-3 text-sm leading-relaxed text-rose-100"
          role="alert"
        >
          {error}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={submitState === "submitting"}
        className="md:col-span-2 mt-2 inline-flex h-11 items-center justify-center rounded-full border border-white/15 px-6 text-sm font-semibold tracking-wide text-white shadow-[0_0_48px_-8px_rgba(192,132,252,0.65)] transition hover:shadow-[0_0_64px_-6px_rgba(236,72,153,0.55)] active:scale-[0.98] disabled:opacity-70"
        style={{
          background:
            "linear-gradient(135deg, #7c3aed 0%, #a21caf 45%, #5b21b6 100%)",
        }}
      >
        {submitState === "submitting" ? "Sending..." : "Submit booking request"}
      </button>

      <p className="md:col-span-2 text-xs leading-relaxed text-violet-200/55">
        18+ only. This form is a request and does not guarantee confirmation.
        Final details are agreed privately after review.
      </p>
    </form>
  );
}
