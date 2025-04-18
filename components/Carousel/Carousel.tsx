"use client";
import Image from "next/image";
import React from "react";
import Stripe from "stripe";
// import { Card, CardContent, CardTitle } from "../ui/card";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

type Props = {
  products: Stripe.Product[];
};

const Carousel = ({ products }: Props) => {
  // const [current, setCurrent] = useState<number>(0);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrent((prev) => (prev + 1) % products.length);
  //   }, 3000);
  //   return () => clearInterval(interval);
  // }, [products.length]);

  // const currentProduct = products[current];
  // const price = currentProduct.default_price as Stripe.Price;

  const handlePriceFormat = (product: Stripe.Product): string => {
    const price = product.default_price as Stripe.Price;
    let value: string = "";
    if (price && price.unit_amount) {
      value = (price.unit_amount / 100).toFixed(2);
    }

    return value;
  };

  return (
    // <Card className="relative overflow-hidden rounded-lg shadow-md border-gray-300">
    //   {currentProduct.images && currentProduct.images[0] && (
    //     <div className="relative h-80 w-full">
    //       <Image
    //         src={currentProduct.images[0]}
    //         alt={currentProduct.name}
    //         layout="fill"
    //         objectFit="cover"
    //         className="transition-opacity duration-500 ease-in-out"
    //       />
    //     </div>
    //   )}
    //   <CardContent className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50">
    //     <CardTitle className="text-3xl font-bold text-white mb-2">
    //       {currentProduct.name}
    //     </CardTitle>
    //     {price && price.unit_amount && (
    //       <p className="text-xl text-white">
    //         ${(price.unit_amount / 100).toFixed(2)}
    //       </p>
    //     )}
    //   </CardContent>
    // </Card>
    <div>
      <Swiper loop={true} className=" border-1">
        {products.map((product) => {
          return (
            <SwiperSlide key={product?.id}>
              <div className="w-full flex flex-row space-x-4">
                <div className="flex flex-col space-y-4 bg-black w-[50%] items-center justify-center">
                  <h1 className="text-2xl font-bold text-gray-300 mb-2">
                    {product.name}
                  </h1>
                  <p className="text-xl text-white">
                    ${handlePriceFormat(product)}
                  </p>
                </div>
                <div className="flex justify-center ">
                  <Image
                    src={product.images[0]}
                    alt={product.name}
                    width={300}
                    height={300}
                  />
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Carousel;
