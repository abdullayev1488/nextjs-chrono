
export default function ProductLoading() {
  return (
    <section className="mx-auto max-w-6xl animate-pulse">
      <div className="mb-8 h-5 w-36 rounded bg-neutral-200" />

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-14">
        <div className="aspect-square rounded-2xl bg-neutral-200" />

        <div className="flex flex-col justify-center">
          <div className="mb-5 h-3 w-36 rounded bg-neutral-200" />

          <div className="h-10 w-3/4 rounded bg-neutral-200" />

          <div className="my-7 h-px bg-black/10" />

          <div className="h-9 w-32 rounded bg-neutral-200" />

          <div className="mt-8 space-y-3">
            <div className="h-4 w-full rounded bg-neutral-200" />
            <div className="h-4 w-5/6 rounded bg-neutral-200" />
            <div className="h-4 w-2/3 rounded bg-neutral-200" />
          </div>

          <div className="mt-10 h-12 w-full rounded-xl bg-neutral-200 sm:w-56" />
        </div>
      </div>
    </section>
  );
}
