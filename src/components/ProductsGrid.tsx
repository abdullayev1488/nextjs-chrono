
"use client";

import Link from "next/link";
import { useState } from "react";

type ProductItem = {
  id: string;
  name: string;
  brand: string;
  price: number;
  image: string;
};

type ProductsGridProps = {
  initialProducts: ProductItem[];
  total: number;
};

export const ProductsGrid = ({
  initialProducts,
  total,
}: ProductsGridProps) => {
  const [products, setProducts] = useState(initialProducts);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const hasMore = products.length < total;

  const handleLoadMore = async () => {
    if (loading || !hasMore) return;

    setLoading(true);
    setError("");

    try {
      const response = await fetch(
        `/api/products/load-more?skip=${products.length}`
      );

      if (!response.ok) {
        throw new Error("Failed to load products");
      }

      const newProducts: ProductItem[] =
        await response.json();

      setProducts((prev) => [...prev, ...newProducts]);
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="grid grid-cols-1 items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <article
            key={product.id}
            className="group flex min-w-0 flex-col overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="aspect-[4/3] w-full overflow-hidden bg-[#f5f4f0]">
              <img
                src={product.image}
                alt={product.name}
                loading="lazy"
                className="block h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            <div className="flex flex-1 flex-col p-6">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#b9975b]">
                {product.brand}
              </p>

              <h2 className="mt-2 min-h-14 text-xl font-semibold leading-7 tracking-tight text-[#171717]">
                {product.name}
              </h2>

              <p className="mt-3 text-lg font-semibold text-[#171717]">
                {product.price} AZN
              </p>

              <Link
                href={`/products/${product.id}`}
                className="mt-auto flex min-h-12 w-full items-center justify-center rounded-xl bg-[#171717] px-5 py-3 text-center text-sm font-medium text-white transition-colors duration-300 hover:bg-[#b9975b] [margin-top:1.5rem]"
              >
                View Details
              </Link>
            </div>
          </article>
        ))}
      </div>

      {error && (
        <p role="alert" className="mt-6 text-center text-sm text-red-500">
          {error}
        </p>
      )}

      {hasMore && (
        <div className="mt-12 flex flex-col items-center gap-4">
          <p className="text-sm text-neutral-500">
            Showing {products.length} of {total} products
          </p>

          <button
            type="button"
            onClick={handleLoadMore}
            disabled={loading}
            className="min-w-48 cursor-pointer rounded-xl bg-[#171717] px-8 py-4 text-sm font-semibold text-white transition-colors duration-300 hover:bg-[#b9975b] disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? "Loading..." : "Load More"}
          </button>
        </div>
      )}

      {!hasMore && products.length > 0 && (
        <p className="mt-10 text-center text-sm text-neutral-400">
          You've reached the end of our collection.
        </p>
      )}
    </div>
  );
};
