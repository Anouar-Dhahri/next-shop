"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "../ui/button";
import AOS from "aos";
import "aos/dist/aos.css";
import { PulseLoader } from "react-spinners";

type Props = {
  imageFile: string;
};

const WelcomeSection = ({ imageFile }: Props) => {
  useEffect(() => {
    const initAOS = async () => {
      await import("aos");
      AOS.init({
        duration: 1000,
        easing: "ease",
        once: true,
        anchorPlacement: "top-bottom",
      });
    };
    initAOS();
  }, []);

  return (
    <section className="rounded bg-white py-8 sm:py-12" data-aos="zoom-in" data-aos-delay={500}>
      <div className="mx-auto grid grid-cols-1 items-center justify-items-center gap-8 px-8 sm:px-16 md:grid-cols-2">
        <div className="max-w-md space-y-4" data-aos="fade-down" data-aos-delay={1000}>
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl bg-gradient-to-r from-blue-500 to-sky-500 bg-clip-text text-transparent">
            {" "}
            Welcome To NextShop
          </h2>
          <p className="text-neutral-600">
            Discover the latest products at the best prices.
          </p>
          <Button
            asChild
            variant="default"
            className="inline-flex items-center justify-center rounded-full px-6 py-3 bg-gradient-to-r from-blue-500 to-sky-500 text-white h-[50px]">
            <Link
              href="/products"
              className="inline-flex items-center justify-center rounded-full px-6 py-3">
              <span className="p-4">All Products</span>
            </Link>
          </Button>
        </div>
        {!imageFile ? (
          <PulseLoader
            size={10}
            color="#222"
            loading={true}
            speedMultiplier={1}
          />
        ) : (
          <Image
            alt="Banner Image"
            width={450}
            height={450}
            src={imageFile}
            className="rounded"
            loading="lazy"
            data-aos="zoom-in"
            data-aos-delay={1500}
          />
        )}
      </div>
    </section>
  );
};

export default WelcomeSection;
