import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Account",
  description: "Manage your member profile and account preferences.",
};

export default function AccountPage() {
  return (
    <main className="relative z-10 mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 sm:py-12">
      <section className="relative overflow-hidden rounded-[1.75rem] border border-white/12 bg-black/30 px-6 py-8 shadow-[0_0_78px_-20px_rgba(168,85,247,0.62)] backdrop-blur-xl sm:px-8 sm:py-10">
        <div
          className="pointer-events-none absolute inset-0 opacity-85"
          style={{
            background:
              "radial-gradient(ellipse 90% 60% at 15% -10%, rgba(236,72,153,0.2), transparent 62%), radial-gradient(ellipse 70% 55% at 100% 100%, rgba(139,92,246,0.24), transparent 65%)",
          }}
          aria-hidden
        />

        <div className="relative z-[1]">
          <p className="text-[0.72rem] font-medium uppercase tracking-[0.3em] text-violet-200/80 sm:text-xs">
            Member account
          </p>
          <h1 className="mt-3 font-[family-name:var(--font-fraunces)] text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl">
            Account overview
          </h1>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-violet-100/80 sm:text-base">
            Manage your private member details, subscription preferences, and
            account settings. This area is intended for consenting adults aged 18+.
          </p>
        </div>
      </section>

      <section className="mt-6 grid grid-cols-1 gap-4 lg:grid-cols-2">
        <article className="rounded-[1.5rem] border border-white/10 bg-black/25 p-5 shadow-[0_0_48px_-16px_rgba(167,139,250,0.55)] backdrop-blur-sm sm:p-6">
          <p className="text-[0.72rem] font-medium uppercase tracking-[0.22em] text-violet-200/75">
            Profile details
          </p>
          <h2 className="mt-2 font-[family-name:var(--font-fraunces)] text-2xl font-bold text-white">
            Your profile
          </h2>

          <dl className="mt-4 grid grid-cols-1 gap-3 text-sm">
            <div className="rounded-xl border border-white/10 bg-black/25 px-4 py-3">
              <dt className="text-violet-200/65">Display name</dt>
              <dd className="mt-1 font-medium text-violet-100">VelvetMember01</dd>
            </div>
            <div className="rounded-xl border border-white/10 bg-black/25 px-4 py-3">
              <dt className="text-violet-200/65">Email</dt>
              <dd className="mt-1 font-medium text-violet-100">member@example.com</dd>
            </div>
            <div className="rounded-xl border border-white/10 bg-black/25 px-4 py-3">
              <dt className="text-violet-200/65">Member since</dt>
              <dd className="mt-1 font-medium text-violet-100">January 2026</dd>
            </div>
          </dl>
        </article>

        <article className="rounded-[1.5rem] border border-white/10 bg-black/25 p-5 shadow-[0_0_48px_-16px_rgba(167,139,250,0.55)] backdrop-blur-sm sm:p-6">
          <p className="text-[0.72rem] font-medium uppercase tracking-[0.22em] text-violet-200/75">
            Subscription status
          </p>
          <h2 className="mt-2 font-[family-name:var(--font-fraunces)] text-2xl font-bold text-white">
            Current plan
          </h2>

          <div className="mt-4 space-y-3 text-sm">
            <div className="rounded-xl border border-white/10 bg-black/25 px-4 py-3">
              <p className="text-violet-200/65">Plan</p>
              <p className="mt-1 font-medium text-violet-100">VIP Couple Access</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-black/25 px-4 py-3">
              <p className="text-violet-200/65">Renewal date</p>
              <p className="mt-1 font-medium text-violet-100">May 14, 2026</p>
            </div>
          </div>

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

      <section className="mt-6 rounded-[1.5rem] border border-white/10 bg-black/25 p-5 shadow-[0_0_48px_-16px_rgba(167,139,250,0.55)] backdrop-blur-sm sm:p-6">
        <p className="text-[0.72rem] font-medium uppercase tracking-[0.22em] text-violet-200/75">
          Billing
        </p>
        <h2 className="mt-2 font-[family-name:var(--font-fraunces)] text-2xl font-bold text-white">
          Payment and history
        </h2>

        <div className="mt-4 grid grid-cols-1 gap-3 md:grid-cols-2">
          <div className="rounded-xl border border-white/10 bg-black/25 px-4 py-3 text-sm">
            <p className="text-violet-200/65">Payment method</p>
            <p className="mt-1 font-medium text-violet-100">Visa ending in 4242</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-black/25 px-4 py-3 text-sm">
            <p className="text-violet-200/65">Billing history</p>
            <p className="mt-1 font-medium text-violet-100">Last charge: Apr 14, 2026</p>
          </div>
        </div>

        <p className="mt-4 rounded-xl border border-amber-200/20 bg-amber-400/10 px-4 py-3 text-sm leading-relaxed text-amber-100">
          Payment integration is not connected yet. Billing details on this page
          are placeholders for frontend preview only.
        </p>
      </section>

      <section className="mt-6 grid grid-cols-1 gap-4 lg:grid-cols-2">
        <article className="rounded-[1.5rem] border border-white/10 bg-black/25 p-5 shadow-[0_0_48px_-16px_rgba(167,139,250,0.55)] backdrop-blur-sm sm:p-6">
          <p className="text-[0.72rem] font-medium uppercase tracking-[0.22em] text-violet-200/75">
            Account settings
          </p>
          <h2 className="mt-2 font-[family-name:var(--font-fraunces)] text-2xl font-bold text-white">
            Preferences
          </h2>

          <div className="mt-4 space-y-3">
            <label className="inline-flex w-full items-start gap-3 rounded-xl border border-white/10 bg-black/25 px-4 py-3 text-sm text-violet-100/85">
              <input
                type="checkbox"
                defaultChecked
                className="mt-0.5 size-4 rounded border-white/20 bg-black/40 accent-violet-500"
              />
              <span>
                Receive email preferences updates, announcements, and account notices.
              </span>
            </label>

            <label className="inline-flex w-full items-start gap-3 rounded-xl border border-white/10 bg-black/25 px-4 py-3 text-sm text-violet-100/85">
              <input
                type="checkbox"
                defaultChecked
                className="mt-0.5 size-4 rounded border-white/20 bg-black/40 accent-violet-500"
              />
              <span>
                Enable content notifications for new releases and member updates.
              </span>
            </label>
          </div>

          <p className="mt-4 text-sm leading-relaxed text-violet-100/75">
            Privacy and discretion are prioritized. Notifications are designed to
            remain respectful and minimal.
          </p>
        </article>

        <article className="rounded-[1.5rem] border border-white/10 bg-black/25 p-5 shadow-[0_0_48px_-16px_rgba(167,139,250,0.55)] backdrop-blur-sm sm:p-6">
          <p className="text-[0.72rem] font-medium uppercase tracking-[0.22em] text-violet-200/75">
            Password
          </p>
          <h2 className="mt-2 font-[family-name:var(--font-fraunces)] text-2xl font-bold text-white">
            Change password
          </h2>

          <form className="mt-4 grid grid-cols-1 gap-3">
            <label className="grid gap-2">
              <span className="text-sm font-medium text-violet-200/85">
                Current password
              </span>
              <input
                type="password"
                className="h-11 rounded-xl border border-white/10 bg-black/35 px-4 text-white placeholder:text-violet-200/40 focus:border-violet-500/45 focus:outline-none"
                placeholder="Enter current password"
              />
            </label>

            <label className="grid gap-2">
              <span className="text-sm font-medium text-violet-200/85">
                New password
              </span>
              <input
                type="password"
                className="h-11 rounded-xl border border-white/10 bg-black/35 px-4 text-white placeholder:text-violet-200/40 focus:border-violet-500/45 focus:outline-none"
                placeholder="Enter new password"
              />
            </label>

            <label className="grid gap-2">
              <span className="text-sm font-medium text-violet-200/85">
                Confirm new password
              </span>
              <input
                type="password"
                className="h-11 rounded-xl border border-white/10 bg-black/35 px-4 text-white placeholder:text-violet-200/40 focus:border-violet-500/45 focus:outline-none"
                placeholder="Confirm new password"
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
              Update password
            </button>
          </form>
        </article>
      </section>

      <section className="mt-6 flex justify-start">
        <button
          type="button"
          className="inline-flex h-11 items-center justify-center rounded-full border border-white/15 bg-black/35 px-6 text-sm font-semibold tracking-wide text-violet-100 transition hover:bg-black/50 hover:text-white active:scale-[0.98]"
        >
          Logout
        </button>
      </section>
    </main>
  );
}
