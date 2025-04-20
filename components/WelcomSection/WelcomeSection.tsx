"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "../ui/button";
import AOS from "aos";
import "aos/dist/aos.css";
import Spinner from "../Spinner/Spinner";

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
    <section className="rounded bg-neutral-100 py-8 sm:py-12">
      <div className="mx-auto grid grid-cols-1 items-center justify-items-center gap-8 px-8 sm:px-16 md:grid-cols-2">
        <div className="max-w-md space-y-4" data-aos="fade-down">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            {" "}
            Welcome To NextShop
          </h2>
          <p className="text-neutral-600">
            Discover the latest products at the best prices.
          </p>
          <Button
            asChild
            variant="default"
            className="inline-flex items-center justify-center rounded-full px-6 py-3 bg-black text-white h-[50px]">
            <Link
              href="/products"
              className="inline-flex items-center justify-center rounded-full px-6 py-3">
              <span className="p-4">All Products</span>
            </Link>
          </Button>
        </div>
        {!imageFile ? (
          <Spinner />
        ) : (
          <Image
            alt="Banner Image"
            width={450}
            height={450}
            src={imageFile}
            className="rounded"
            loading="lazy"
            data-aos="zoom-in"
          />
        )}
      </div>
    </section>
  );
};

export default WelcomeSection;
