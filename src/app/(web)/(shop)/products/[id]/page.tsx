
import Link from "next/link";
import mongoose from "mongoose";
import { notFound } from "next/navigation";
import { connectDB } from "@/lib/mongodb";
import { Product } from "@/models/Product";
import { AddToCartButton } from "@/components/AddToCartButton";

export default async function ProductDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  if (!mongoose.isValidObjectId(id)) {
    notFound();
  }

  await connectDB();

  const product = await Product.findById(id).lean();

  if (!product) {
    notFound();
  }

  return (
    <section className="mx-auto max-w-6xl">
      <Link
        href="/"
        className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-neutral-500 transition-colors hover:text-[#b9975b]"
      >
        <span>←</span>
        Back to Collection
      </Link>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-14">
        <div className="aspect-square overflow-hidden rounded-2xl bg-[#f5f4f0]">
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover"
          />
        </div>

        <div className="flex flex-col justify-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-[#b9975b]">
            {product.brand}
          </p>

          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
            {product.name}
          </h1>

          <div className="my-7 h-px bg-black/10" />

          <div className="flex flex-wrap items-center gap-4">
            <p className="text-3xl font-semibold">
              {product.price} AZN
            </p>

            {product.oldPrice && (
              <p className="text-lg text-neutral-400 line-through">
                {product.oldPrice} AZN
              </p>
            )}
          </div>

          <p className="mt-6 text-sm leading-8 text-neutral-500 sm:text-base">
            Experience timeless elegance and exceptional
            craftsmanship. Discover our carefully selected
            collection of premium timepieces.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-4 border-y border-black/10 py-6">
            <div>
              <p className="text-xs text-neutral-400">
                Category
              </p>
              <p className="mt-1 text-sm font-medium">
                {product.category}
              </p>
            </div>

            <div>
              <p className="text-xs text-neutral-400">
                Availability
              </p>
              <p className="mt-1 text-sm font-medium">
                {product.stock > 0 ? "In Stock" : "Out of Stock"}
              </p>
            </div>
          </div>

          {product.badge && (
            <p className="mt-5 text-sm font-medium text-[#b9975b]">
              {product.badge}
            </p>
          )}

          <AddToCartButton
            product={{
              id: String(product._id),
              name: product.name,
              price: product.price,
              image: product.image,
            }}
            stock={product.stock}
          />
        </div>
      </div>
    </section>
  );
}
