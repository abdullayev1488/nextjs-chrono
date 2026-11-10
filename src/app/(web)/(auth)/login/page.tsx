
import Link from "next/link";

export default function LoginPage() {
  return (
    <section className="w-full">
      <div className="mb-8 text-center">
        <h2 className="text-2xl font-semibold tracking-tight text-[#171717] sm:text-3xl">
          Welcome Back
        </h2>

        <p className="mt-3 text-sm leading-6 text-neutral-500">
          Sign in to your account to continue.
        </p>
      </div>

      <form className="space-y-5">
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
          <div className="mb-2 flex items-center justify-between gap-2">
            <label
              htmlFor="password"
              className="text-sm font-medium text-[#171717]"
            >
              Password
            </label>

            <span className="text-xs font-medium text-[#b9975b]">
              Forgot Password?
            </span>
          </div>

          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            autoComplete="current-password"
            required
            className="w-full rounded-xl border border-black/10 bg-white px-4 py-3.5 text-base text-[#171717] outline-none transition-colors placeholder:text-neutral-400 focus:border-[#b9975b]"
          />
        </div>

        <button
          type="button"
          className="w-full cursor-pointer rounded-xl bg-[#171717] px-6 py-4 text-sm font-semibold text-white transition-colors duration-300 hover:bg-[#b9975b]"
        >
          Sign In
        </button>
      </form>

      <p className="mt-7 text-center text-sm text-neutral-500">
        Don't have an account?{" "}
        <Link
          href="/register"
          className="font-semibold text-[#b9975b] hover:underline"
        >
          Create Account
        </Link>
      </p>
    </section>
  );
}
