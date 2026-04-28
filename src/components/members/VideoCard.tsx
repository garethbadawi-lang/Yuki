type VideoCardProps = {
  title: string;
  category: string;
  duration: string;
  isLocked?: boolean;
};

export function VideoCard({
  title,
  category,
  duration,
  isLocked = false,
}: VideoCardProps) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-white/10 bg-black/25 shadow-[0_0_44px_-18px_rgba(167,139,250,0.5)] backdrop-blur-sm transition hover:border-violet-400/35 hover:shadow-[0_0_58px_-14px_rgba(236,72,153,0.55)]">
      <div className="relative">
        <div
          className="aspect-video w-full"
          style={{
            background:
              "linear-gradient(140deg, rgba(58,20,88,0.9) 0%, rgba(20,10,36,0.92) 50%, rgba(12,8,22,0.95) 100%)",
          }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(236,72,153,0.25),transparent_40%),radial-gradient(circle_at_90%_100%,rgba(96,165,250,0.22),transparent_45%)]" />

        <span className="absolute left-3 top-3 rounded-full border border-white/15 bg-black/45 px-2.5 py-1 text-[0.65rem] font-medium uppercase tracking-[0.18em] text-violet-100/90">
          {category}
        </span>
        <span className="absolute right-3 top-3 rounded-full border border-white/15 bg-black/45 px-2.5 py-1 text-xs font-medium text-violet-100/90">
          {duration}
        </span>
      </div>

      <div className="space-y-3 p-4 sm:p-5">
        <h3 className="font-[family-name:var(--font-fraunces)] text-xl font-bold tracking-tight text-white">
          {title}
        </h3>
        <p className="text-sm leading-relaxed text-violet-100/75">
          {isLocked
            ? "Premium preview available. Unlock to watch full content."
            : "Available now in your private members library."}
        </p>

        <button
          type="button"
          className={`inline-flex h-10 items-center justify-center rounded-full border px-5 text-sm font-semibold tracking-wide transition active:scale-[0.98] ${
            isLocked
              ? "border-white/15 bg-black/30 text-violet-100 hover:bg-black/45"
              : "border-white/15 text-white shadow-[0_0_42px_-10px_rgba(192,132,252,0.65)] hover:scale-[1.01] hover:shadow-[0_0_58px_-8px_rgba(236,72,153,0.58)]"
          }`}
          style={
            isLocked
              ? undefined
              : {
                  background:
                    "linear-gradient(135deg, #7c3aed 0%, #a21caf 45%, #5b21b6 100%)",
                }
          }
        >
          {isLocked ? "Unlock" : "Watch"}
        </button>
      </div>
    </article>
  );
}
