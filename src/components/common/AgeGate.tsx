"use client";

import { useLayoutEffect, useState } from "react";

const AGE_VERIFIED_KEY = "yuki_age_verified";
/** Old key: still in many browsers; it used to make the gate vanish immediately on load. */
const LEGACY_AGE_VERIFIED_KEY = "creator_spotlight_age_verified";

export function AgeGate() {
  // Assume not verified until we read storage, so first paint never shows the
  // page without the overlay (avoids flash of body before the gate on first visit).
  const [isOpen, setIsOpen] = useState(true);

  useLayoutEffect(() => {
    try {
      // Only the new key skips the gate. Legacy key is ignored here so the modal
      // stays until the user taps confirm once (then we migrate storage in handleConfirm).
      setIsOpen(window.localStorage.getItem(AGE_VERIFIED_KEY) !== "true");
    } catch {
      setIsOpen(true);
    }
  }, []);

  const handleConfirm = () => {
    try {
      window.localStorage.setItem(AGE_VERIFIED_KEY, "true");
      window.localStorage.removeItem(LEGACY_AGE_VERIFIED_KEY);
    } catch {
      // Ignore storage errors and still allow entry.
    }
    setIsOpen(false);
  };

  const handleLeave = () => {
    window.location.href = "https://google.com";
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-[120] flex items-center justify-center px-4 py-8 sm:px-6">
      <div className="absolute inset-0 bg-black/80 backdrop-blur-md" aria-hidden />

      <div
        className="absolute inset-0 pointer-events-none opacity-80"
        style={{
          background:
            "radial-gradient(ellipse 65% 40% at 50% 10%, rgba(236,72,153,0.25), transparent 60%), radial-gradient(ellipse 55% 35% at 50% 100%, rgba(139,92,246,0.26), transparent 62%)",
        }}
        aria-hidden
      />

      <section className="relative z-[1] w-full max-w-xl rounded-[1.75rem] border border-white/12 bg-black/35 p-6 text-center shadow-[0_0_80px_-16px_rgba(168,85,247,0.55)] backdrop-blur-xl sm:p-8">
        <p className="font-sans text-[0.72rem] font-medium uppercase tracking-[0.3em] text-violet-200/80 sm:text-xs">
          Age verification required
        </p>

        <h2 className="mt-3 font-[family-name:var(--font-fraunces)] text-2xl font-extrabold leading-tight text-white sm:text-3xl">
          Adults Only (18+)
        </h2>

        <p className="mt-4 text-pretty font-sans text-sm leading-relaxed text-violet-100/85 sm:text-base">
          This website is intended for adults aged 18 and over. By entering, you
          confirm that you are legally permitted to view adult content in your
          location.
        </p>

        <div className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2">
          <button
            type="button"
            onClick={handleConfirm}
            className="inline-flex h-12 items-center justify-center rounded-full border border-white/15 px-6 text-sm font-semibold tracking-wide text-white shadow-[0_0_48px_-8px_rgba(192,132,252,0.65)] transition hover:scale-[1.01] hover:shadow-[0_0_64px_-6px_rgba(236,72,153,0.6)] active:scale-[0.98]"
            style={{
              background:
                "linear-gradient(135deg, #7c3aed 0%, #a21caf 45%, #5b21b6 100%)",
            }}
          >
            I am 18 or older
          </button>

          <button
            type="button"
            onClick={handleLeave}
            className="inline-flex h-12 items-center justify-center rounded-full border border-white/15 bg-black/35 px-6 text-sm font-semibold tracking-wide text-violet-100 transition hover:bg-black/50 hover:text-white active:scale-[0.98]"
          >
            Leave site
          </button>
        </div>
      </section>
    </div>
  );
}
