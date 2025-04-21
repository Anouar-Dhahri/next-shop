import Link from "next/link";
import Stripe from "stripe";
import Image from "next/image";
// import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
// import { Button } from "../ui/button";
import { handlePriceFormat } from "@/lib/utils";
import { FaHeart } from "react-icons/fa";
import { BiSolidInfoCircle } from "react-icons/bi";

type Props = {
  product: Stripe.Product;
};

const ProductCard = ({ product }: Props) => {
  return (
    <div className="flex flex-col gap-4 w-full h-[450px] rounded-3xl border-1 bg-white">
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
      <div className="p-4 flex flex-col gap-3 relative">
        <h1 className="text-md font-semibold">{product.name}</h1>
        <p className="text-base font-light text-gray-400">Price</p>
        <p className="text-md font-bold text-gray-900">
          ${handlePriceFormat(product)}
        </p>
        <Link href={`/products/${product.id}`}>
          <button className="absolute rounded-xl w-[180px] h-13 bottom-2 right-4 text-white bg-black text-base hover:cursor-pointer flex justify-center items-center space-x-2">
            <BiSolidInfoCircle className="text-center w-6 h-6" />{" "}
            <span>View Details</span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
