
"use client";

import { useDispatch } from "react-redux";
import { addToCart } from "@/redux/store/slice";

type AddToCartButtonProps = {
  product: {
    id: string;
    name: string;
    price: number;
    image: string;
  };
  stock: number;
};

export const AddToCartButton = ({
  product,
  stock,
}: AddToCartButtonProps) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <button
      type="button"
      onClick={handleAddToCart}
      disabled={stock <= 0}
      className="mt-8 w-full cursor-pointer rounded-xl bg-[#171717] px-6 py-4 text-sm font-semibold text-white transition-colors duration-300 hover:bg-[#b9975b] disabled:cursor-not-allowed disabled:opacity-40 sm:w-fit sm:min-w-56"
    >
      {stock > 0 ? "Add to Cart" : "Out of Stock"}
    </button>
  );
};
