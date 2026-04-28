import { VideoTileGrid } from "@/components/common/VideoTileGrid";

const tiles = [
  { title: "Members exclusive — drop 01", models: "Yuki · featured", date: "28/04/2026" },
  { title: "Behind the scenes reel", models: "Yuki", date: "26/04/2026" },
  { title: "Studio session highlights", models: "Yuki · premium", date: "24/04/2026" },
  { title: "Ultra-HD gallery update", models: "Yuki", date: "22/04/2026" },
  { title: "Private preview clip", models: "Yuki · members", date: "20/04/2026" },
  { title: "Weekend feature stream", models: "Yuki", date: "18/04/2026" },
  { title: "Curated set — volume 2", models: "Yuki · studio", date: "16/04/2026" },
  { title: "Extended cut — part A", models: "Yuki", date: "14/04/2026" },
  { title: "Extended cut — part B", models: "Yuki", date: "12/04/2026" },
  { title: "New uploads bundle", models: "Yuki · collection", date: "10/04/2026" },
] as const;

export function VideoGridSection() {
  return (
    <section
      className="relative z-10 w-full bg-[#0a0a0a] px-4 py-12 sm:px-6 sm:py-14 md:py-16"
      aria-label="Featured videos"
    >
      <VideoTileGrid tiles={tiles} />
    </section>
  );
}
