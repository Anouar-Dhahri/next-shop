"use client";
import Image from "next/image";
import React from "react";
import Stripe from "stripe";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { handlePriceFormat } from "@/lib/utils";

type Props = {
  products: Stripe.Product[];
};

const Carousel = ({ products }: Props) => {

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
                <div className="w-full flex justify-center items-center flex-col absolute bottom-0 bg-[#222]/70  p-2">
                  <h1 className="text-xl font-bold text-white">
                    {product.name}
                  </h1>
                  <p className="text-base text-white">
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
