export default function Loading() {
  return (
    <div
      className="relative z-10 mx-auto flex min-h-[60vh] w-full max-w-6xl items-center justify-center px-4 py-14 sm:px-6"
      role="status"
      aria-live="polite"
    >
      <div className="flex flex-col items-center gap-4">
        <span
          className="block size-10 animate-spin rounded-full border-2 border-violet-300/30 border-t-violet-300"
          aria-hidden
        />
        <p className="font-sans text-sm font-medium uppercase tracking-[0.3em] text-violet-200/70">
          Loading
        </p>
      </div>
    </div>
  );
}
