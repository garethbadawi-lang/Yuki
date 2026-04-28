import type { Metadata } from "next";

import { GalleryPageToolbar } from "@/components/common/GalleryPageToolbar";

export const metadata: Metadata = {
  title: "Photos",
  description: "Photo gallery.",
};

const PLACEHOLDER_COUNT = 10;

/** Vibrant blurred colour blocks — cycle so the grid stays varied */
const TILE_GRADIENTS = [
  "bg-gradient-to-br from-fuchsia-500 via-pink-500 to-purple-800",
  "bg-gradient-to-br from-purple-600 via-violet-500 to-fuchsia-600",
  "bg-gradient-to-br from-pink-500 via-rose-500 to-purple-900",
  "bg-gradient-to-br from-violet-600 via-fuchsia-500 to-pink-600",
  "bg-gradient-to-br from-purple-700 via-purple-500 to-fuchsia-500",
  "bg-gradient-to-br from-pink-600 via-purple-600 to-indigo-800",
  "bg-gradient-to-br from-fuchsia-600 via-purple-700 to-violet-800",
  "bg-gradient-to-br from-purple-600 via-pink-500 to-fuchsia-700",
  "bg-gradient-to-br from-violet-500 via-fuchsia-500 to-purple-900",
  "bg-gradient-to-br from-pink-500 via-fuchsia-600 to-purple-700",
] as const;

export default function PhotosPage() {
  const tiles = Array.from({ length: PLACEHOLDER_COUNT }).map((_, i) => ({
    id: i + 1,
    title: `Photo ${i + 1}`,
    gradientClass: TILE_GRADIENTS[i % TILE_GRADIENTS.length],
  }));

  return (
    <main className="relative z-10 min-h-screen w-full bg-[#0a0a0a] px-4 py-12 sm:px-6 sm:py-16">
      <div className="mx-auto w-full max-w-[1400px]">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between sm:gap-8">
          <div className="min-w-0 flex-1 text-center sm:text-left">
            <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Photos
            </h1>
            <p className="mx-auto mt-3 max-w-2xl text-sm text-neutral-400 sm:mx-0 sm:text-base">
              A curated gallery of recent photos. Click any image to view full size.
            </p>
          </div>
          <GalleryPageToolbar idPrefix="photos" className="shrink-0" />
        </div>

        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5">
          {tiles.map((tile) => (
            <div
              key={tile.id}
              className="group relative overflow-hidden rounded-lg border border-white/12 bg-neutral-950"
            >
              <div className="aspect-square w-full overflow-hidden">
                {/* Coloured blurred tile — oversized layer softens edges */}
                <div
                  className={`h-full w-full scale-125 blur-xl ${tile.gradientClass}`}
                  aria-hidden
                />
              </div>
              <div className="absolute left-0 right-0 bottom-0 z-10 flex items-center justify-between gap-3 px-3 py-2 bg-black/40">
                <div>
                  <p className="text-xs font-semibold text-white">{tile.title}</p>
                </div>
                <div>
                  <span className="text-xs text-neutral-400">View</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
