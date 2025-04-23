"use client";
import Link from "next/link";
import Stripe from "stripe";
import Image from "next/image";
import { handlePriceFormat } from "@/lib/utils";
import { FaHeart } from "react-icons/fa";
import { BsCartPlus } from "react-icons/bs";
import { Tooltip } from "react-tooltip";
import { useCartStore } from "@/store/cart-store";
import { ClipLoader } from "react-spinners";
import { useState } from "react";

type Props = {
  product: Stripe.Product;
};

const ProductCard = ({ product }: Props) => {
  const { addItem } = useCartStore();
  const price = product.default_price as Stripe.Price;
  const [loader, setLoader] = useState<boolean>(false);

  const onAddItem = () => {
    setLoader(true);
    setTimeout(() => {
      addItem({
        id: product.id,
        name: product.name,
        price: price.unit_amount as number,
        imageUrl: product.images ? product.images[0] : null,
        quantity: 1,
      });
      setLoader(false);
    }, 3000);
  };
  return (
    <div className="flex flex-col gap-4 w-full min-h-[450px] rounded-3xl border-1 bg-white">
      <Link href={`/products/${product.id}`}>
        <div className="relative bg-gradient-to-r from-blue-400 to-sky-400 h-[300px] rounded-tl-3xl  rounded-tr-3xl flex items-center justify-center">
          <Image
            src={product.images[0]}
            alt={product.name}
            width={200}
            height={200}
            className="group-hover:opacity-90 transition-opacity duration-300 rounded-t-lg"
          />
          <div className="w-10 h-10 absolute top-1 right-2 hover:cursor-pointer rounded-full bg-transparent flex items-center justify-center hover:bg-black  text-white transition-all duration-300 ease-in-out">
            <FaHeart className="w-6 h-6" />
          </div>
        </div>
      </Link>
      <div className="p-4 flex flex-col gap-3 relative">
        <h1 className="text-md font-semibold">{product.name}</h1>
        <p className="text-base font-light text-gray-400">Price</p>
        <p className="text-md font-bold text-gray-900">
          ${handlePriceFormat(product)}
        </p>

        <Tooltip
          anchorSelect="#cartBtn"
          variant="dark"
          place="left"
          style={{ borderRadius: "10px" }}>
          Add To Cart
        </Tooltip>
        <button
          id="cartBtn"
          className="absolute rounded-full w-[80px] h-13 bottom-2 right-4 text-white bg-black text-base hover:cursor-pointer flex justify-center items-center space-x-2"
          onClick={onAddItem}>
          {loader ? (
            <ClipLoader
              size={20}
              color="#FFF"
              loading={loader}
            />
          ) : (
            <BsCartPlus className="text-center w-6 h-6" />
          )}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
