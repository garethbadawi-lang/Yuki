import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Categories",
  description: "Browse by category.",
};

export default function CategoriesPage() {
  return (
    <main className="relative z-10 mx-auto w-full max-w-3xl px-4 py-16 sm:px-6">
      <h1 className="text-balance text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
        Categories
      </h1>
      <p className="mt-4 text-pretty text-sm leading-relaxed text-neutral-400 sm:text-base">
        Category browsing can be added here.
      </p>
    </main>
  );
}
