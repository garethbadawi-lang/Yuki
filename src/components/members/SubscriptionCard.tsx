type SubscriptionCardProps = {
  tier: string;
  renewsOn: string;
  status: string;
};

export function SubscriptionCard({
  tier,
  renewsOn,
  status,
}: SubscriptionCardProps) {
  return (
    <section className="relative overflow-hidden rounded-[1.5rem] border border-white/12 bg-black/30 p-5 shadow-[0_0_68px_-20px_rgba(168,85,247,0.6)] backdrop-blur-xl sm:p-6">
      <div
        className="pointer-events-none absolute inset-0 opacity-80"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 20% -10%, rgba(236,72,153,0.2), transparent 65%), radial-gradient(ellipse 70% 50% at 100% 110%, rgba(139,92,246,0.22), transparent 62%)",
        }}
        aria-hidden
      />

      <div className="relative z-[1] flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-[0.72rem] font-medium uppercase tracking-[0.24em] text-violet-200/75">
            Subscription
          </p>
          <h2 className="mt-2 font-[family-name:var(--font-fraunces)] text-2xl font-bold text-white sm:text-3xl">
            {tier}
          </h2>
          <p className="mt-2 text-sm text-violet-100/75">
            Status: <span className="font-semibold text-violet-100">{status}</span>
          </p>
          <p className="mt-1 text-sm text-violet-100/75">Renews on: {renewsOn}</p>
        </div>

        <button
          type="button"
          className="inline-flex h-11 items-center justify-center rounded-full border border-white/15 px-5 text-sm font-semibold tracking-wide text-white shadow-[0_0_44px_-10px_rgba(192,132,252,0.65)] transition hover:scale-[1.01] hover:shadow-[0_0_60px_-8px_rgba(236,72,153,0.58)] active:scale-[0.98]"
          style={{
            background:
              "linear-gradient(135deg, #7c3aed 0%, #a21caf 45%, #5b21b6 100%)",
          }}
        >
          Upgrade
        </button>
      </div>
    </section>
  );
}
