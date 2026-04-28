type MemberStatsCardProps = {
  label: string;
  value: string;
  helperText?: string;
};

export function MemberStatsCard({
  label,
  value,
  helperText,
}: MemberStatsCardProps) {
  return (
    <article className="rounded-2xl border border-white/10 bg-black/25 p-4 shadow-[0_0_42px_-16px_rgba(167,139,250,0.55)] backdrop-blur-sm sm:p-5">
      <p className="text-[0.72rem] font-medium uppercase tracking-[0.22em] text-violet-200/70">
        {label}
      </p>
      <p className="mt-2 font-[family-name:var(--font-fraunces)] text-3xl font-bold leading-none text-white">
        {value}
      </p>
      {helperText ? (
        <p className="mt-2 text-xs leading-relaxed text-violet-100/70">{helperText}</p>
      ) : null}
    </article>
  );
}
