
import Link from "next/link";

export default function AboutPage() {
  return (
    <section className="mx-auto w-full max-w-6xl">
      <div className="mx-auto mb-14 max-w-2xl text-center sm:mb-20">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-[#b9975b]">
          Our Story
        </p>

        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
          More Than Just Time
        </h1>

        <p className="mt-6 text-sm leading-8 text-neutral-500 sm:text-base">
          At CHRONO, we believe a watch is more than an
          accessory. It is a reflection of character,
          precision, and timeless elegance.
        </p>
      </div>

      <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14">
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-[#171717] sm:aspect-square">
          <img
            src="https://images.unsplash.com/photo-1600003014608-c2ccc1570a65?auto=format&fit=crop&w=1200&q=85"
            alt="Luxury wristwatch"
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#b9975b]">
            The CHRONO Philosophy
          </p>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
            Crafted for Every Moment
          </h2>

          <p className="mt-6 text-sm leading-8 text-neutral-500 sm:text-base">
            Our collection brings together elegant design,
            exceptional craftsmanship, and enduring quality.
            Every timepiece is selected with attention to detail.
          </p>

          <p className="mt-4 text-sm leading-8 text-neutral-500 sm:text-base">
            From everyday essentials to statement pieces,
            CHRONO celebrates individuality and the moments
            that matter most.
          </p>

          <Link
            href="/"
            className="my-8 inline-flex min-h-12 items-center justify-center rounded-xl bg-[#171717] px-7 text-sm font-semibold text-white transition-colors duration-300 hover:bg-[#b9975b]"
          >
            Explore Collection
          </Link>
        </div>
      </div>

      <div className="mt-20 grid gap-4 sm:grid-cols-3">
        {[
          {
            title: "Timeless Design",
            description: "Elegant timepieces made to last.",
          },
          {
            title: "Exceptional Quality",
            description: "Attention to every detail.",
          },
          {
            title: "Personal Expression",
            description: "A watch that reflects your style.",
          },
        ].map((item) => (
          <div
            key={item.title}
            className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm sm:p-8"
          >
            <div className="mb-5 h-1 w-10 rounded-full bg-[#b9975b]" />

            <h3 className="text-lg font-semibold">
              {item.title}
            </h3>

            <p className="mt-3 text-sm leading-7 text-neutral-500">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
