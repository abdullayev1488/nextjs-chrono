
"use client";

export default function ProductError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <section className="flex min-h-[65vh] flex-col items-center justify-center px-4 text-center">
      <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-red-50 text-3xl text-red-500">
        !
      </div>

      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#b9975b]">
        An Error Occurred
      </p>

      <h1 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
        Something Went Wrong
      </h1>

      <p className="mt-4 max-w-md text-sm leading-7 text-neutral-500 sm:text-base">
        We couldn't load this product. Please try again.
      </p>

      <button
        type="button"
        onClick={() => reset()}
        className="mt-8 cursor-pointer rounded-xl bg-[#171717] px-8 py-4 text-sm font-semibold text-white transition-colors hover:bg-[#b9975b]"
      >
        Try Again
      </button>
    </section>
  );
}
