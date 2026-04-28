import Link from "next/link";

export function GlamCta() {
  return (
    <section className="relative z-10 px-4 pb-16 pt-4 sm:pb-20 md:pb-24">
      <div className="mx-auto flex max-w-lg justify-center">
        <Link
          href="/register"
          prefetch
          className="group relative flex w-full min-h-[52px] items-center justify-center overflow-hidden rounded-full border border-white/15 px-10 py-4 text-center text-base font-semibold tracking-wide text-white shadow-[0_0_30px_-16px_rgba(192,132,252,0.65)] transition-transform duration-150 hover:scale-[1.02] active:scale-[0.98] sm:min-h-[56px] sm:text-lg sm:transition sm:hover:shadow-[0_0_64px_-6px_rgba(236,72,153,0.75)]"
          style={{
            background:
              "linear-gradient(135deg, #7c3aed 0%, #a21caf 45%, #5b21b6 100%)",
          }}
        >
          <span
            className="pointer-events-none absolute inset-0 opacity-60 transition group-hover:opacity-90"
            style={{
              background:
                "linear-gradient(115deg, transparent 0%, rgba(255,255,255,0.35) 45%, transparent 70%)",
            }}
          />
          <span className="relative z-[1] drop-shadow-[0_2px_12px_rgba(0,0,0,0.45)]">
            Join Now
          </span>
          <span
            className="pointer-events-none absolute -inset-1 rounded-full opacity-30 blur-sm sm:opacity-40 sm:blur-md"
            style={{
              background:
                "radial-gradient(circle at 30% 30%, rgba(244,114,182,0.7), transparent 60%)",
            }}
          />
        </Link>
      </div>
    </section>
  );
}
