"use client";

import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "@/redux/store/store";
import {
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
} from "@/redux/store/slice";

export const CartContent = () => {
    const dispatch = useDispatch();

    const items = useSelector(
        (state: RootState) => state.cart.items
    );

    const subtotal = items.reduce(
        (total, item) => total + item.price * item.quantity,
        0
    );

    if (items.length === 0) {
        return (
            <section className="flex min-h-[60vh] flex-col items-center justify-center text-center">
                <h1 className="text-3xl font-semibold sm:text-4xl">
                    Your Cart Is Empty
                </h1>

                <p className="mt-4 text-sm text-neutral-500">
                    Discover our collection and find your perfect timepiece.
                </p>

                <Link
                    href="/"
                    className="mt-8 rounded-xl bg-[#171717] px-8 py-4 text-sm font-semibold text-white transition-colors hover:bg-[#b9975b]"
                >
                    Explore Collection
                </Link>
            </section>
        );
    }

    return (
        <section className="mx-auto w-full max-w-6xl">
            <div className="mb-10">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#b9975b]">
                    Your Selection
                </p>

                <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                    Shopping Cart
                </h1>
            </div>

            <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_320px]">
                <div className="space-y-4">
                    {items.map((item) => (
                        <article
                            key={item.id}
                            className="flex min-w-0 flex-col gap-5 rounded-2xl border border-black/5 bg-white p-4 shadow-sm sm:flex-row sm:p-5"
                        >
                            <Link
                                href={`/products/${item.id}`}
                                className="block w-full shrink-0 overflow-hidden rounded-xl bg-[#f5f4f0] sm:w-36"
                            >
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="aspect-square w-full object-cover"
                                />
                            </Link>

                            <div className="flex min-w-0 flex-1 flex-col justify-between gap-5">
                                <div>
                                    <h2 className="text-lg font-semibold">
                                        {item.name}
                                    </h2>

                                    <p className="mt-2 font-semibold">
                                        {item.price} AZN
                                    </p>
                                </div>

                                <div className="flex flex-wrap items-center justify-between gap-4">
                                    <div className="flex items-center overflow-hidden rounded-lg border border-black/10">
                                        <button
                                            type="button"
                                            onClick={() =>
                                                dispatch(decreaseQuantity(item.id))
                                            }
                                            disabled={item.quantity <= 1}
                                            aria-label={`Decrease ${item.name} quantity`}
                                            className="cursor-pointer px-4 py-2 disabled:cursor-not-allowed disabled:opacity-30"
                                        >
                                            −
                                        </button>

                                        <span className="min-w-8 text-center text-sm font-semibold">
                                            {item.quantity}
                                        </span>

                                        <button
                                            type="button"
                                            onClick={() =>
                                                dispatch(increaseQuantity(item.id))
                                            }
                                            aria-label={`Increase ${item.name} quantity`}
                                            className="cursor-pointer px-4 py-2"
                                        >
                                            +
                                        </button>
                                    </div>


                                    <button
                                        type="button"
                                        onClick={() => dispatch(removeFromCart(item.id))}
                                        aria-label={`Remove ${item.name} from cart`}
                                        title="Remove from cart"
                                        className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg text-neutral-400 transition-all duration-200 hover:bg-red-50 hover:text-red-500"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="20"
                                            height="20"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="1.8"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <path d="M3 6h18" />
                                            <path d="M8 6V4h8v2" />
                                            <path d="M19 6l-1 14H6L5 6" />
                                            <path d="M10 10v7" />
                                            <path d="M14 10v7" />
                                        </svg>
                                    </button>

                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                <aside className="h-fit rounded-2xl border border-black/5 bg-white p-6 shadow-sm">
                    <h2 className="text-xl font-semibold">
                        Order Summary
                    </h2>

                    <div className="mt-6 flex justify-between text-sm text-neutral-500">
                        <span>Items</span>
                        <span>
                            {items.reduce((total, item) => total + item.quantity, 0)}
                        </span>
                    </div>

                    <div className="mt-4 flex justify-between text-sm text-neutral-500">
                        <span>Shipping</span>
                        <span>Calculated at checkout</span>
                    </div>

                    <div className="mt-6 flex justify-between border-t border-black/10 pt-6">
                        <span className="font-semibold">Subtotal</span>
                        <span className="text-xl font-semibold">
                            {subtotal.toFixed(2)} AZN
                        </span>
                    </div>

                    <button
                        type="button"
                        disabled
                        className="mt-7 w-full cursor-not-allowed rounded-xl bg-[#171717] px-5 py-4 text-sm font-semibold text-white opacity-50"
                    >
                        Proceed to Checkout
                    </button>

                    <p className="mt-3 text-center text-xs text-neutral-400">
                        Checkout will be available soon.
                    </p>
                </aside>
            </div>
        </section>
    );
};