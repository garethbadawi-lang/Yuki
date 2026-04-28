import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Booking Received",
  description: "Your booking request has been received and is under review.",
};

export default function BookingThankYouPage() {
  return (
    <main className="relative z-10 mx-auto flex min-h-[70vh] w-full max-w-3xl flex-col items-center justify-center px-4 py-14 text-center sm:px-6">
      <div
        className="rounded-[1.75rem] border border-white/12 bg-black/30 px-6 py-10 shadow-[0_0_80px_-16px_rgba(168,85,247,0.55)] backdrop-blur-xl sm:px-10 sm:py-12"
      >
        <p className="text-[0.72rem] font-medium uppercase tracking-[0.3em] text-violet-200/80">
          Booking received
        </p>
        <h1 className="mt-3 font-[family-name:var(--font-fraunces)] text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
          Thank you
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-pretty text-sm leading-relaxed text-violet-200/80 sm:text-base">
          Your booking request has been submitted and is under review. You will
          receive a private follow-up once availability and screening are
          confirmed. All bookings remain subject to mutual agreement and
          discretion.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/"
            prefetch
            className="inline-flex h-11 items-center justify-center rounded-full border border-white/15 px-6 text-sm font-semibold tracking-wide text-white shadow-[0_0_44px_-10px_rgba(192,132,252,0.65)] transition hover:scale-[1.01] hover:shadow-[0_0_60px_-8px_rgba(236,72,153,0.58)] active:scale-[0.98]"
            style={{
              background:
                "linear-gradient(135deg, #7c3aed 0%, #a21caf 45%, #5b21b6 100%)",
            }}
          >
            Back to home
          </Link>
          <Link
            href="/booking"
            prefetch
            className="inline-flex h-11 items-center justify-center rounded-full border border-white/12 bg-black/25 px-6 text-sm font-medium text-violet-100/85 transition hover:bg-black/35 hover:text-violet-100"
          >
            Submit another request
          </Link>
        </div>
      </div>
    </main>
  );
}
