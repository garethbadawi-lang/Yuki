import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Membership Plans",
  description: "Membership plan options for premium members access.",
};

export default function RatesPage() {
  return (
    <main className="relative z-10 mx-auto w-full max-w-6xl px-4 py-14 sm:px-6">
      <header className="text-center">
        <h1 className="text-balance font-[family-name:var(--font-fraunces)] text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
          Membership Plans
        </h1>
        <p className="mx-auto mt-4 max-w-3xl text-pretty text-sm leading-relaxed text-violet-200/75 sm:text-base">
          Choose a plan that fits your preferred level of access. This platform is
          designed for consenting adults aged 18+ and presented with a premium,
          discreet member experience.
        </p>
      </header>

      <section className="mt-8 rounded-[1.5rem] border border-amber-200/20 bg-amber-400/10 px-5 py-4 text-sm leading-relaxed text-amber-100 sm:px-6">
        Payment and subscription integration are not connected yet. Pricing actions
        below are currently frontend placeholders and will be activated in a later
        release.
      </section>

      <section className="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-3">
        <article className="rounded-[1.5rem] border border-white/10 bg-black/25 p-5 shadow-[0_0_44px_-16px_rgba(167,139,250,0.5)] backdrop-blur-sm sm:p-6">
          <h2 className="font-[family-name:var(--font-fraunces)] text-2xl font-bold text-white">
            Free Preview
          </h2>
          <p className="mt-2 text-3xl font-extrabold tracking-tight text-violet-100">
            £0
          </p>
          <p className="mt-3 text-sm leading-relaxed text-violet-100/75">
            For browsing public previews and basic updates.
          </p>
          <ul className="mt-4 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-violet-100/75">
            <li>Access to public preview clips</li>
            <li>General creator update feed</li>
            <li>Community announcements</li>
          </ul>
          <button
            type="button"
            className="mt-5 inline-flex h-11 items-center justify-center rounded-full border border-white/15 bg-black/35 px-6 text-sm font-semibold tracking-wide text-violet-100 transition hover:bg-black/50 hover:text-white active:scale-[0.98]"
          >
            Preview
          </button>
        </article>

        <article className="rounded-[1.5rem] border border-white/12 bg-black/30 p-5 shadow-[0_0_60px_-16px_rgba(168,85,247,0.62)] backdrop-blur-xl sm:p-6">
          <h2 className="font-[family-name:var(--font-fraunces)] text-2xl font-bold text-white">
            Monthly Access
          </h2>
          <p className="mt-2 text-3xl font-extrabold tracking-tight text-violet-100">
            Coming Soon
          </p>
          <p className="mt-3 text-sm leading-relaxed text-violet-100/75">
            For premium videos, private gallery updates, and members-only posts.
          </p>
          <ul className="mt-4 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-violet-100/75">
            <li>Premium members video library</li>
            <li>Private gallery update access</li>
            <li>Members-only posts and highlights</li>
          </ul>
          <button
            type="button"
            className="mt-5 inline-flex h-11 items-center justify-center rounded-full border border-white/15 px-6 text-sm font-semibold tracking-wide text-white shadow-[0_0_44px_-10px_rgba(192,132,252,0.65)] transition hover:scale-[1.01] hover:shadow-[0_0_60px_-8px_rgba(236,72,153,0.58)] active:scale-[0.98]"
            style={{
              background:
                "linear-gradient(135deg, #7c3aed 0%, #a21caf 45%, #5b21b6 100%)",
            }}
          >
            Join Now
          </button>
        </article>

        <article className="rounded-[1.5rem] border border-white/10 bg-black/25 p-5 shadow-[0_0_44px_-16px_rgba(167,139,250,0.5)] backdrop-blur-sm sm:p-6">
          <h2 className="font-[family-name:var(--font-fraunces)] text-2xl font-bold text-white">
            VIP Access
          </h2>
          <p className="mt-2 text-3xl font-extrabold tracking-tight text-violet-100">
            Coming Soon
          </p>
          <p className="mt-3 text-sm leading-relaxed text-violet-100/75">
            For enhanced access, priority updates, and exclusive member drops.
          </p>
          <ul className="mt-4 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-violet-100/75">
            <li>Enhanced premium library access</li>
            <li>Priority update notifications</li>
            <li>Exclusive VIP member drops</li>
          </ul>
          <button
            type="button"
            className="mt-5 inline-flex h-11 items-center justify-center rounded-full border border-white/15 px-6 text-sm font-semibold tracking-wide text-white shadow-[0_0_44px_-10px_rgba(192,132,252,0.65)] transition hover:scale-[1.01] hover:shadow-[0_0_60px_-8px_rgba(236,72,153,0.58)] active:scale-[0.98]"
            style={{
              background:
                "linear-gradient(135deg, #7c3aed 0%, #a21caf 45%, #5b21b6 100%)",
            }}
          >
            Upgrade
          </button>
        </article>
      </section>
    </main>
  );
}

