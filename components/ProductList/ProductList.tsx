"use client";
import React, { useEffect, useState } from "react";
import Stripe from "stripe";
import ProductCard from "../ProductCard/ProductCard";
import AOS from "aos";
import "aos/dist/aos.css";

type Props = {
  products: Stripe.Product[];
};

const ProductList = ({ products }: Props) => {
  const [searchTerm, setSearchTerm] = useState<string>("");
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

  const filteredProduct = products?.filter((product) => {
    const term = searchTerm.toLowerCase();
    const nameMatch = product?.name?.toLowerCase().includes(term);
    const descriptionMatch = product?.description
      ? product?.description?.toLowerCase().includes(term)
      : false;

    return nameMatch || descriptionMatch;
  });

  return (
    <div>
      <div className="mb-6 flex justify-center">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search products..."
          className="w-full max-w-md rounded border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filteredProduct.map((product, index) => (
          <div
            key={index}
            data-aos="fade-right"
            data-aos-anchor-placement="top-center"
            data-aos-delay={`${index * 100}`}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
