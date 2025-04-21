"use client";
import React from "react";
import { Button } from "../ui/button";

const AboutUs = () => {
  return (
    <div
      className="w-full lg:w-1/2 flex flex-col space-y-4 items-center justify-center px-4 text-center"
      data-aos="fade-up">
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-500 to-sky-500 bg-clip-text text-transparent">
        Power Up Your Tech Game!
      </h1>
      <p className="text-base md:text-xl lg:text-2xl font-light">
        Discover the latest in laptops, gaming consoles, and accessories.
      </p>
      <p className="text-base md:text-xl lg:text-2xl font-light">
        Unbeatable prices. Trusted brands. Fast delivery.
      </p>
      <Button
        variant="default"
        className="inline-flex items-center justify-center rounded-full px-6 py-3 bg-gradient-to-r from-blue-500 to-sky-500 text-white cursor-pointer text-base h-[50px]">
        <span className="p-4">Shop Now</span>
      </Button>
    </div>
  );
};

export default AboutUs;
