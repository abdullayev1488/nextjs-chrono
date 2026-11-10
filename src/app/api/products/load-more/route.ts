
import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import { Product } from "@/models/Product";

export async function GET(request: NextRequest) {
  try {
    const skipParam =
      request.nextUrl.searchParams.get("skip") ?? "0";

    const skip = Number(skipParam);

    if (
      !Number.isSafeInteger(skip) ||
      skip < 0
    ) {
      return NextResponse.json(
        { message: "Invalid skip parameter" },
        { status: 400 }
      );
    }

    await connectDB();

    const products = await Product.find({})
      .sort({ _id: 1 })
      .skip(skip)
      .limit(9)
      .lean();

    const result = products.map((product) => ({
      id: String(product._id),
      name: product.name,
      brand: product.brand,
      price: product.price,
      image: product.image,
    }));

    return NextResponse.json(result);
  } catch (error) {
    console.error("Failed to load products:", error);

    return NextResponse.json(
      { message: "Failed to load products" },
      { status: 500 }
    );
  }
}
