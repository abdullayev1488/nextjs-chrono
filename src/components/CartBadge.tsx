
"use client";

import Link from "next/link";
import { useSelector } from "react-redux";
import type { RootState } from "@/redux/store/store";

export const CartBadge = () => {
  const count = useSelector((state: RootState) =>
    state.cart.items.reduce(
      (total, item) => total + item.quantity,
      0
    )
  );

  return (
    <Link
      href="/cart"
      aria-label={`Shopping cart with ${count} items`}
      className="relative inline-flex min-h-11 min-w-11 items-center justify-center rounded-full border border-black/10 transition-colors hover:border-[#b9975b]"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="21"
        height="21"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m2 2 2 2 2.5 11h12l3-9H5" />
        <circle cx="9" cy="21" r="1" />
        <circle cx="19" cy="21" r="1" />
      </svg>

      {count > 0 && (
        <span className="absolute -right-2 -top-2 flex h-5 min-w-5 items-center justify-center rounded-full bg-[#b9975b] px-1 text-[10px] font-bold text-white">
          {count}
        </span>
      )}
    </Link>
  );
};
