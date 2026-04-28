import Image from "next/image";

export const DEFAULT_THUMB_SOURCES = [
  "/homepage-hero-main.png",
  "/homepage-hero-side-left.png",
  "/homepage-hero-side-right.png",
  "/homepage-featured-portrait.png",
] as const;

export const MODEL_PINK = "#ec4899";

export type VideoTile = {
  title: string;
  models: string;
  date: string;
};

type VideoTileGridProps = {
  tiles: readonly VideoTile[];
  thumbSources?: readonly string[];
};

export function VideoTileGrid({
  tiles,
  thumbSources = DEFAULT_THUMB_SOURCES,
}: VideoTileGridProps) {
  return (
    <div className="mx-auto w-full max-w-[1400px]">
      <div className="grid grid-cols-2 gap-2 sm:gap-3 md:grid-cols-5 md:gap-3">
        {tiles.map((tile, i) => (
          <article
            key={`${tile.title}-${tile.date}-${i}`}
            className="flex min-w-0 flex-col overflow-hidden rounded-lg border border-white/10 bg-[#1a1a1a] shadow-sm"
          >
            <div className="relative aspect-video w-full overflow-hidden bg-neutral-900">
              <Image
                src={thumbSources[i % thumbSources.length]}
                alt=""
                fill
                sizes="(max-width: 768px) 50vw, 20vw"
                className="scale-110 object-cover opacity-95 blur-md"
                aria-hidden
              />
            </div>
            <div className="flex flex-col gap-1 px-3 py-3 sm:py-3.5">
              <h3 className="line-clamp-2 text-left font-sans text-sm font-semibold leading-snug text-white sm:text-[0.95rem]">
                {tile.title}
              </h3>
              <p
                className="line-clamp-1 text-left font-sans text-xs font-medium sm:text-[0.8125rem]"
                style={{ color: MODEL_PINK }}
              >
                {tile.models}
              </p>
              <p className="text-left font-sans text-[0.7rem] text-neutral-500 sm:text-xs">
                {tile.date}
              </p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
