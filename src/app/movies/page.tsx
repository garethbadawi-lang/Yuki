import type { Metadata } from "next";

import { GalleryPageToolbar } from "@/components/common/GalleryPageToolbar";
import { VideoTileGrid, type VideoTile } from "@/components/common/VideoTileGrid";

export const metadata: Metadata = {
  title: "Movies",
  description: "Movies and video library.",
};

const movies: readonly VideoTile[] = [
  { title: "Ultra-HD feature — episode 1", models: "Yuki · lead", date: "28/04/2026" },
  { title: "BTS — studio session", models: "Yuki · guest", date: "26/04/2026" },
  { title: "Members cut — extended", models: "Yuki", date: "24/04/2026" },
  { title: "Crystal clear stream — part 1", models: "Yuki · premium", date: "22/04/2026" },
  { title: "Crystal clear stream — part 2", models: "Yuki · premium", date: "20/04/2026" },
  { title: "Weekend drop — highlight", models: "Yuki", date: "18/04/2026" },
  { title: "Curated playlist — vol. 3", models: "Yuki · collection", date: "16/04/2026" },
  { title: "Director’s cut — bonus", models: "Yuki", date: "14/04/2026" },
  { title: "Mobile-optimised clip pack", models: "Yuki · members", date: "12/04/2026" },
  { title: "New releases bundle", models: "Yuki · studio", date: "10/04/2026" },
];

export default function MoviesPage() {
  return (
    <main className="relative z-10 min-h-screen w-full bg-[#0a0a0a] px-4 py-12 sm:px-6 sm:py-16">
      <div className="mx-auto w-full max-w-[1400px]">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between sm:gap-8">
          <div className="min-w-0 flex-1 text-center sm:text-left">
            <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Movies
            </h1>
            <p className="mx-auto mt-3 max-w-2xl text-sm text-neutral-400 sm:mx-0 sm:text-base">
              Stream and download in crystal-clear quality. Thumbnails are blurred for
              preview; titles and updates below.
            </p>
          </div>
          <GalleryPageToolbar idPrefix="movies" className="shrink-0" />
        </div>

        <div className="mt-10">
          <VideoTileGrid tiles={movies} />
        </div>
      </div>
    </main>
  );
}
