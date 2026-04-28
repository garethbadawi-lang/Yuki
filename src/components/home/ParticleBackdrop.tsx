export function ParticleBackdrop() {
  return (
    <div
      className="pointer-events-none absolute inset-0 -z-10 min-h-full overflow-hidden [contain:paint]"
      aria-hidden
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(88,28,135,0.12),transparent_70%)]" />

      <div className="absolute -left-20 top-20 size-[260px] rounded-full bg-fuchsia-500/20 blur-[70px] sm:-left-24 sm:top-1/4 sm:size-[420px] sm:bg-fuchsia-500/25 sm:blur-[100px]" />
      <div className="absolute -right-24 top-[12%] size-[240px] rounded-full bg-violet-600/18 blur-[68px] sm:-right-20 sm:top-[10%] sm:size-[380px] sm:bg-violet-600/20 sm:blur-[90px]" />
      <div className="absolute bottom-[20%] left-[10%] size-[220px] rounded-full bg-sky-500/12 blur-[64px] sm:bottom-[15%] sm:left-[15%] sm:size-[320px] sm:bg-sky-500/15 sm:blur-[80px]" />
      <div className="absolute bottom-0 right-0 size-[300px] rounded-full bg-purple-900/24 blur-[78px] sm:right-1/4 sm:size-[480px] sm:bg-purple-900/30 sm:blur-[110px]" />

      <svg
        className="absolute inset-0 hidden size-full opacity-[0.35] sm:block"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient
            id="trail-pink"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#f9a8d4" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#a855f7" stopOpacity="0.3" />
          </linearGradient>
          <linearGradient id="trail-blue" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#93c5fd" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#c084fc" stopOpacity="0.25" />
          </linearGradient>
          <filter id="soft-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <path
          d="M -80 180 Q 120 40 280 160 T 520 120 T 780 200 T 1100 140"
          fill="none"
          stroke="url(#trail-pink)"
          strokeWidth="1.5"
          strokeLinecap="round"
          filter="url(#soft-glow)"
          strokeDasharray="80 40 120 60"
        />
        <path
          d="M -40 420 C 200 280 340 520 520 400 S 880 320 1120 440"
          fill="none"
          stroke="url(#trail-blue)"
          strokeWidth="1.25"
          strokeLinecap="round"
          opacity={0.65}
          filter="url(#soft-glow)"
          strokeDasharray="100 50 70 90"
        />
        <path
          d="M 1200 100 Q 960 200 840 120 T 600 200 T 360 140 T 80 220"
          fill="none"
          stroke="url(#trail-pink)"
          strokeWidth="1"
          strokeLinecap="round"
          opacity={0.45}
          filter="url(#soft-glow)"
          strokeDasharray="60 80 40 100"
        />
      </svg>

      <div className="absolute inset-0 hidden opacity-70 md:block">
        {[
          ["12%", "18%", 0.9],
          ["24%", "72%", 1.2],
          ["78%", "22%", 0.7],
          ["62%", "58%", 1.1],
          ["44%", "36%", 0.6],
          ["88%", "68%", 0.8],
          ["8%", "48%", 0.5],
          ["52%", "12%", 0.85],
          ["30%", "88%", 0.75],
          ["70%", "42%", 0.65],
          ["16%", "92%", 0.55],
          ["92%", "36%", 0.95],
          ["56%", "78%", 0.6],
          ["38%", "8%", 0.7],
        ].map(([left, top, scale], i) => (
          <span
            key={i}
            className="absolute size-1.5 rounded-full bg-pink-300 shadow-[0_0_12px_2px_rgba(244,114,182,0.9)]"
            style={{
              left: left as string,
              top: top as string,
              transform: `scale(${scale})`,
            }}
          />
        ))}
        {[
          ["18%", "28%", "#c4b5fd"],
          ["66%", "18%", "#93c5fd"],
          ["48%", "62%", "#f0abfc"],
          ["84%", "52%", "#a5b4fc"],
          ["28%", "44%", "#e879f9"],
        ].map(([left, top, color], i) => (
          <span
            key={`b-${i}`}
            className="absolute size-1 rounded-full shadow-[0_0_10px_1px_currentColor]"
            style={{
              left: left as string,
              top: top as string,
              backgroundColor: color as string,
              color: color as string,
            }}
          />
        ))}
      </div>

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(0,0,0,0.55),transparent_55%)]" />
    </div>
  );
}
