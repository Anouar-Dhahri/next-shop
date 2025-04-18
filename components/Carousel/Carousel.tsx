"use client";
import Image from "next/image";
import React from "react";
import Stripe from "stripe";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
type Props = {
  products: Stripe.Product[];
};

const Carousel = ({ products }: Props) => {
  const handlePriceFormat = (product: Stripe.Product): string => {
    const price = product.default_price as Stripe.Price;
    let value: string = "";
    if (price && price.unit_amount) {
      value = (price.unit_amount / 100).toFixed(2);
    }

    return value;
  };

  return (
    <div>
      <Swiper
        centeredSlides={true}
        modules={[Autoplay]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}>
        {products.map((product) => {
          return (
            <SwiperSlide key={product?.id}>
              <div className="h-[300px] relative inline-bloc items-center flex justify-center bg-gray-100">
                <Image
                  src={product.images[0]}
                  alt={product.name}
                  width={300}
                  height={300}
                  className="block"
                />
                <div className="w-full flex justify-center items-center flex-col space-y-4 absolute bottom-0 bg-[#222]/70  p-2">
                  <h1 className="text-2xl font-bold text-white mb-2">
                    {product.name}
                  </h1>
                  <p className="text-xl text-white">
                    ${handlePriceFormat(product)}
                  </p>
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
