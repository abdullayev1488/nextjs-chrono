
import Link from "next/link";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col bg-[#141414] px-4 py-8 sm:px-6">
      <header className="mx-auto w-full max-w-md text-center">
        <Link href="/" className="inline-block">
          <h1 className="text-3xl font-bold tracking-[0.2em] text-white">
            CHRONO<span className="text-[#b9975b]">.</span>
          </h1>
        </Link>

        <p className="mt-2 text-xs font-medium uppercase tracking-[0.3em] text-[#b9975b]">
          Timeless Elegance
        </p>
      </header>

      <main className="flex flex-1 items-center justify-center py-10">
        <div className="w-full max-w-md rounded-2xl bg-[#faf9f6] p-6 shadow-2xl sm:p-10">
          <nav className="mb-8 flex items-center justify-center gap-8 border-b border-black/10 pb-5">
            <Link
              href="/login"
              className="text-sm font-semibold text-[#171717] transition-colors hover:text-[#b9975b]"
            >
              Login
            </Link>

            <Link
              href="/register"
              className="text-sm font-semibold text-[#171717] transition-colors hover:text-[#b9975b]"
            >
              Register
            </Link>
          </nav>

          {children}
        </div>
      </main>

      <footer className="text-center text-xs text-white/40">
        © 2026 CHRONO. All rights reserved.
      </footer>
    </div>
  );
}
