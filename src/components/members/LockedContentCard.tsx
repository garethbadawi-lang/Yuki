type LockedContentCardProps = {
  title: string;
  detail: string;
};

export function LockedContentCard({ title, detail }: LockedContentCardProps) {
  return (
    <article className="rounded-2xl border border-white/10 bg-black/25 p-5 shadow-[0_0_44px_-18px_rgba(167,139,250,0.5)] backdrop-blur-sm">
      <p className="text-[0.7rem] font-medium uppercase tracking-[0.22em] text-violet-200/70">
        Locked content
      </p>
      <h3 className="mt-2 font-[family-name:var(--font-fraunces)] text-xl font-bold text-white">
        {title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-violet-100/75">{detail}</p>

      <button
        type="button"
        className="mt-4 inline-flex h-10 items-center justify-center rounded-full border border-white/15 px-5 text-sm font-semibold tracking-wide text-white shadow-[0_0_42px_-10px_rgba(192,132,252,0.65)] transition hover:scale-[1.01] hover:shadow-[0_0_58px_-8px_rgba(236,72,153,0.58)] active:scale-[0.98]"
        style={{
          background:
            "linear-gradient(135deg, #7c3aed 0%, #a21caf 45%, #5b21b6 100%)",
        }}
      >
        Upgrade
      </button>
    </article>
  );
}
