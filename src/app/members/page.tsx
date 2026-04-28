import type { Metadata } from "next";
import { LockedContentCard } from "@/components/members/LockedContentCard";
import { MemberStatsCard } from "@/components/members/MemberStatsCard";
import { SubscriptionCard } from "@/components/members/SubscriptionCard";
import { VideoCard } from "@/components/members/VideoCard";

const categories = ["Latest", "Popular", "Behind the Scenes", "Couple Content"];

const contentItems = [
  { title: "Midnight Lounge Set", category: "Latest", duration: "12:40", isLocked: false },
  { title: "Golden Hour Session", category: "Popular", duration: "09:15", isLocked: false },
  {
    title: "Studio Prep Moments",
    category: "Behind the Scenes",
    duration: "08:02",
    isLocked: true,
  },
  {
    title: "After Dark Duo Highlights",
    category: "Couple Content",
    duration: "11:27",
    isLocked: true,
  },
  { title: "Velvet Room Preview", category: "Latest", duration: "07:49", isLocked: false },
  {
    title: "Night Shift Storyline",
    category: "Popular",
    duration: "10:33",
    isLocked: true,
  },
];

export const metadata: Metadata = {
  title: "Members",
  description: "Private premium members dashboard for adults 18+.",
};

export default function MembersPage() {
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
            Private members area
          </p>
          <h1 className="mt-3 font-[family-name:var(--font-fraunces)] text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl">
            Welcome back to your premium lounge
          </h1>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-violet-100/80 sm:text-base">
            Curated updates and exclusive content for consenting adults aged 18+.
            Explore the latest drops, revisit favorites, and unlock premium
            collections.
          </p>
        </div>
      </section>

      <section className="mt-6">
        <SubscriptionCard tier="VIP Couple Access" status="Active" renewsOn="May 14, 2026" />
      </section>

      <section className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <MemberStatsCard label="Videos available" value="24" helperText="Updated this week" />
        <MemberStatsCard label="Unlocked content" value="16" helperText="8 premium drops pending" />
        <MemberStatsCard label="Subscription tier" value="VIP" helperText="Includes couple content" />
      </section>

      <section className="mt-8">
        <div className="mb-4 flex flex-wrap items-center gap-2 sm:gap-3">
          {categories.map((category, index) => (
            <button
              key={category}
              type="button"
              className={`inline-flex h-10 items-center justify-center rounded-full border px-4 text-sm font-medium transition ${
                index === 0
                  ? "border-white/15 text-white shadow-[0_0_40px_-10px_rgba(192,132,252,0.62)] hover:shadow-[0_0_56px_-8px_rgba(236,72,153,0.55)]"
                  : "border-white/12 bg-black/25 text-violet-100/80 hover:bg-black/35 hover:text-violet-100"
              }`}
              style={
                index === 0
                  ? {
                      background:
                        "linear-gradient(135deg, #7c3aed 0%, #a21caf 45%, #5b21b6 100%)",
                    }
                  : undefined
              }
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
          {contentItems.map((item) => (
            <VideoCard
              key={`${item.title}-${item.category}`}
              title={item.title}
              category={item.category}
              duration={item.duration}
              isLocked={item.isLocked}
            />
          ))}
        </div>
      </section>

      <section className="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-2">
        <LockedContentCard
          title="Premium archive collection"
          detail="Unlock full archive playlists and member-only curated sets."
        />
        <LockedContentCard
          title="Exclusive weekend release"
          detail="Upgrade to access weekend drops and private behind-the-scenes edits."
        />
      </section>
    </main>
  );
}
