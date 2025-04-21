"use client";
import React from "react";
import { FaRobot } from "react-icons/fa";

const ProductNotFound = () => {
  return (
    <div className="w-full h-[100vh] flex flex-col items-center justify-center text-gray-300">
      <FaRobot className="w-40 h-40" />
      <h1 className="text-4xl font-semibold">No Products Found</h1>
    </div>
  );
};

export default ProductNotFound;
