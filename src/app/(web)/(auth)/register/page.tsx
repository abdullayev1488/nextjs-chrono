
import Link from "next/link";

export default function RegisterPage() {
  return (
    <section className="w-full">
      <div className="mb-8 text-center">
        <h2 className="text-2xl font-semibold tracking-tight text-[#171717] sm:text-3xl">
          Create Account
        </h2>

        <p className="mt-3 text-sm leading-6 text-neutral-500">
          Join CHRONO and discover timeless elegance.
        </p>
      </div>

      <form className="space-y-5">
        <div>
          <label
            htmlFor="fullName"
            className="mb-2 block text-sm font-medium text-[#171717]"
          >
            Full Name
          </label>

          <input
            type="text"
            id="fullName"
            name="fullName"
            placeholder="Enter your full name"
            autoComplete="name"
            required
            className="w-full rounded-xl border border-black/10 bg-white px-4 py-3.5 text-base text-[#171717] outline-none transition-colors placeholder:text-neutral-400 focus:border-[#b9975b]"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="mb-2 block text-sm font-medium text-[#171717]"
          >
            Email Address
          </label>

          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            autoComplete="email"
            required
            className="w-full rounded-xl border border-black/10 bg-white px-4 py-3.5 text-base text-[#171717] outline-none transition-colors placeholder:text-neutral-400 focus:border-[#b9975b]"
          />
        </div>

        <div>
          <label
            htmlFor="password"
            className="mb-2 block text-sm font-medium text-[#171717]"
          >
            Password
          </label>

          <input
            type="password"
            id="password"
            name="password"
            placeholder="Create a password"
            autoComplete="new-password"
            required
            minLength={8}
            className="w-full rounded-xl border border-black/10 bg-white px-4 py-3.5 text-base text-[#171717] outline-none transition-colors placeholder:text-neutral-400 focus:border-[#b9975b]"
          />
        </div>

        <div>
          <label
            htmlFor="confirmPassword"
            className="mb-2 block text-sm font-medium text-[#171717]"
          >
            Confirm Password
          </label>

          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            placeholder="Confirm your password"
            autoComplete="new-password"
            required
            minLength={8}
            className="w-full rounded-xl border border-black/10 bg-white px-4 py-3.5 text-base text-[#171717] outline-none transition-colors placeholder:text-neutral-400 focus:border-[#b9975b]"
          />
        </div>

        <button
          type="button"
          className="w-full cursor-pointer rounded-xl bg-[#171717] px-6 py-4 text-sm font-semibold text-white transition-colors duration-300 hover:bg-[#b9975b]"
        >
          Create Account
        </button>
      </form>

      <p className="mt-7 text-center text-sm text-neutral-500">
        Already have an account?{" "}
        <Link
          href="/login"
          className="font-semibold text-[#b9975b] hover:underline"
        >
          Sign In
        </Link>
      </p>
    </section>
  );
}
