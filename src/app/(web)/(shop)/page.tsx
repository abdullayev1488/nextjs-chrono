
import { connectDB } from "@/lib/mongodb";
import { Product } from "@/models/Product";
import { ProductsGrid } from "@/components/ProductsGrid";

export default async function HomePage() {
  await connectDB();

  const [products, total] = await Promise.all([
    Product.find({})
      .sort({ _id: 1 })
      .limit(9)
      .lean(),
    Product.countDocuments(),
  ]);

  const initialProducts = products.map((product) => ({
    id: String(product._id),
    name: product.name,
    brand: product.brand,
    price: product.price,
    image: product.image,
  }));

  return (
    <section className="w-full">
      <div className="mb-10 text-center sm:mb-14">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-[#b9975b]">
          Timeless Elegance
        </p>

        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
          Our Collection
        </h1>

        <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-neutral-500 sm:text-base">
          Discover a refined selection of exceptional timepieces.
        </p>
      </div>

      <ProductsGrid
        initialProducts={initialProducts}
        total={total}
      />
    </section>
  );
}
