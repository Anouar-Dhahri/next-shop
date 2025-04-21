"use client";
import React from "react";
import Stripe from "stripe";
import Image from "next/image";
import { Button } from "../ui/button";
import { handlePriceFormat } from "@/lib/utils";
import { useCartStore } from "@/store/cart-store";
import Breadcrumb from "../Breadcrumb/Breadcrumb";
import { FaHeart } from "react-icons/fa";
type Props = {
  product: Stripe.Product;
};

const ProductDetails = ({ product }: Props) => {
  const { items, addItem, removeItem } = useCartStore();
  const price = product.default_price as Stripe.Price;
  const cartItem = items.find((item) => item.id === product.id);
  const quantity = cartItem ? cartItem.quantity : 0;

  const onAddItem = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: price.unit_amount as number,
      imageUrl: product.images ? product.images[0] : null,
      quantity: 1,
    });
  };

  return (
    <div>
      <div className="flex flex-col gap-2 flex-1/2">
        <h1 className="text-2xl font-light bg-gradient-to-r from-blue-500 to-sky-500 bg-clip-text text-transparent">
          Product Details
        </h1>
        <Breadcrumb />
      </div>

      <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row gap-8 items-center">
        {product.images && product.images[0] && (
          <div className="relative bg-gradient-to-r from-blue-400 to-sky-400 h-[500px] rounded-3xl flex items-center justify-center w-full md:w-1/2">
            <Image
              src={product.images[0]}
              alt={product.name}
              width={450}
              height={450}
              className="transition duration-300 hover:opacity-90"
            />
            <div className="w-10 h-10 absolute top-1 right-2 hover:cursor-pointer rounded-full bg-transparent flex items-center justify-center hover:bg-black  text-white transition-all duration-300 ease-in-out">
              <FaHeart className="w-6 h-6" />
            </div>
          </div>
        )}
        <div className="md:w-1/2">
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          {product.description && (
            <p className="text-gray-700 mb-4">{product.description}</p>
          )}

          <p className="text-lg font-semibold text-gray-900">
            ${handlePriceFormat(product)}
          </p>

          <div className="flex items-center space-x-4">
            <Button
              variant="outline"
              onClick={() => removeItem(product.id)}
              className="hover:cursor-pointer">
              –
            </Button>
            <span className="text-lg font-semibold">{quantity}</span>
            <Button onClick={onAddItem} className="hover:cursor-pointer">
              +
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
