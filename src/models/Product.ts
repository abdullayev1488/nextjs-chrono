
import "server-only";
import mongoose, { Schema } from "mongoose";

const productSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    brand: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    oldPrice: Number,
    image: String,
    badge: String,
    featured: Boolean,
    stock: Number,
  },
  {
    collection: "products",
  }
);

export const Product =
  mongoose.models.Product ||
  mongoose.model("Product", productSchema);
