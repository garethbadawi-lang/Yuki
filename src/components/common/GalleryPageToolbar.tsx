"use client";

import { useMemo, useState } from "react";

const SORT_OPTIONS = [
  { value: "newest", label: "Newest" },
  { value: "oldest", label: "Oldest" },
  { value: "popular", label: "Most popular" },
] as const;

const ACTIVE_PINK = "#ec4899";

type GalleryPageToolbarProps = {
  /** Optional prefix for aria ids when multiple instances exist on screen */
  idPrefix?: string;
  className?: string;
};

/** Filter (top-right white pill) + dark segmented pagination matching the films grid reference. */
export function GalleryPageToolbar({
  idPrefix = "gallery",
  className = "",
}: GalleryPageToolbarProps) {
  const [sortKey, setSortKey] =
    useState<(typeof SORT_OPTIONS)[number]["value"]>("newest");
  const [page, setPage] = useState(1);
  const totalPages = 12;

  const paginationItems = useMemo(() => {
    /* Visual: [1][2][3][4][5][…][11][12][>] — matches reference */
    const items: ({ type: "page"; n: number } | { type: "ellipsis" })[] = [];
    items.push({ type: "page", n: 1 });
    items.push({ type: "page", n: 2 });
    items.push({ type: "page", n: 3 });
    items.push({ type: "page", n: 4 });
    items.push({ type: "page", n: 5 });
    items.push({ type: "ellipsis" });
    items.push({ type: "page", n: totalPages - 1 });
    items.push({ type: "page", n: totalPages });
    return items;
  }, []);

  const filterId = `${idPrefix}-sort`;

  return (
    <div
      className={`flex w-full flex-col items-stretch gap-3 sm:w-auto sm:flex-row sm:items-center sm:justify-end sm:gap-4 ${className}`}
    >
      <div className="relative shrink-0 self-end sm:self-auto">
        <label htmlFor={filterId} className="sr-only">
          Sort media
        </label>
        <select
          id={filterId}
          value={sortKey}
          onChange={(e) =>
            setSortKey(e.target.value as (typeof SORT_OPTIONS)[number]["value"])
          }
          className="cursor-pointer appearance-none rounded-lg bg-white py-2.5 pl-4 pr-10 font-sans text-sm font-semibold text-black shadow-sm outline-none ring-2 ring-transparent transition hover:bg-neutral-100 focus-visible:ring-white/40"
        >
          {SORT_OPTIONS.map((o) => (
            <option key={o.value} value={o.value}>
              {o.label}
            </option>
          ))}
        </select>
        <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-black" aria-hidden>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
            <path d="m6 9 6 6 6-6" />
          </svg>
        </span>
      </div>

      <nav
        className="flex min-w-0 flex-1 justify-end overflow-x-auto pb-1"
        aria-label="Pagination"
      >
        <div className="inline-flex shrink-0 overflow-hidden rounded-lg border border-neutral-950 bg-neutral-900 shadow-inner">
          {paginationItems.map((item, i) =>
            item.type === "ellipsis" ? (
              <span
                key={`e-${i}`}
                className="flex items-center bg-neutral-700 px-3 py-2 font-sans text-sm tabular-nums text-white/90 ring-1 ring-black"
              >
                …
              </span>
            ) : (
              <button
                key={item.n}
                type="button"
                aria-current={page === item.n ? "page" : undefined}
                onClick={() => setPage(item.n)}
                className={`min-w-[2.5rem] px-3 py-2 font-sans text-sm font-medium tabular-nums ring-1 ring-black transition sm:min-w-[2.65rem]
                  ${page === item.n ? "bg-neutral-600" : "bg-neutral-700 hover:bg-neutral-600"}`}
                style={
                  page === item.n
                    ? { color: ACTIVE_PINK }
                    : { color: "#fafafa" }
                }
              >
                {item.n}
              </button>
            ),
          )}
          <button
            type="button"
            aria-label="Next page"
            disabled={page >= totalPages}
            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
            className={`min-w-[2.5rem] px-2 py-2 font-sans text-base font-semibold ring-1 ring-black sm:min-w-[2.65rem]
              bg-neutral-700 text-white hover:bg-neutral-600 disabled:pointer-events-none disabled:opacity-40`}
          >
            ›
          </button>
        </div>
      </nav>
    </div>
  );
}
