
import Link from "next/link";

export default function ProductNotFound() {
  return (
    <section className="flex min-h-[65vh] flex-col items-center justify-center px-4 text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#b9975b]">
        Product Not Found
      </p>

      <h1 className="mt-5 text-7xl font-bold tracking-tight text-[#171717] sm:text-9xl">
        404
      </h1>

      <div className="mt-6 h-px w-16 bg-[#b9975b]" />

      <h2 className="mt-7 text-2xl font-semibold tracking-tight sm:text-3xl">
        This Timepiece Is Unavailable
      </h2>

      <p className="mt-4 max-w-md text-sm leading-7 text-neutral-500 sm:text-base">
        The timepiece you are looking for may have been removed
        or is no longer available in our collection.
      </p>

      <Link
        href="/"
        className="mt-9 inline-flex min-h-12 items-center justify-center rounded-xl bg-[#171717] px-8 text-sm font-semibold text-white transition-colors duration-300 hover:bg-[#b9975b]"
      >
        Back to Collection
      </Link>
    </section>
  );
}
