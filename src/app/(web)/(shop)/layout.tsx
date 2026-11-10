
import Link from "next/link";
import { CartBadge } from "@/components/CartBadge";

export default function ShopLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col bg-[#f8f7f4] text-[#171717]">
      <header className="sticky top-0 z-50 border-b border-black/10 bg-white/95 backdrop-blur-md">
        <div className="mx-auto flex w-full max-w-7xl flex-wrap items-center justify-between gap-4 px-4 py-5 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="text-2xl font-bold tracking-[0.2em]"
          >
            CHRONO<span className="text-[#b9975b]">.</span>
          </Link>

          <nav className="flex flex-wrap items-center gap-3 text-sm font-medium sm:gap-6">
            <Link
              href="/"
              className="transition-colors hover:text-[#b9975b]"
            >
              Home
            </Link>

            <Link
              href="/about"
              className="transition-colors hover:text-[#b9975b]"
            >
              About
            </Link>

            <Link
              href="/login"
              className="rounded-full border border-black/15 px-4 py-2 transition-colors hover:border-[#b9975b] hover:text-[#b9975b]"
            >
              Sign In
            </Link>

            <CartBadge />
          </nav>

        </div>
      </header>

      <main className="mx-auto w-full max-w-7xl flex-1 px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
        {children}
      </main>

      <footer className="border-t border-black/10 bg-[#171717] text-white">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-3 px-4 py-7 text-center sm:flex-row sm:items-center sm:justify-between sm:px-6 sm:text-left lg:px-8">
          <p className="text-lg font-bold tracking-[0.2em]">
            CHRONO<span className="text-[#b9975b]">.</span>
          </p>

          <p className="text-xs text-white/50">
            © 2026 CHRONO. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
