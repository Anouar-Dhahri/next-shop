"use client";
import React, { useEffect, useState } from "react";
import Stripe from "stripe";
import ProductCard from "../ProductCard/ProductCard";
import AOS from "aos";
import "aos/dist/aos.css";
import Breadcrumb from "../Breadcrumb/Breadcrumb";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { FaFaceSadTear } from "react-icons/fa6";

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
      <div className=" flex flex-col md:flex-row justify-between">
        <div className="flex flex-col gap-2 flex-1/2">
          <h1 className="text-2xl font-light bg-gradient-to-r from-blue-500 to-sky-500 bg-clip-text text-transparent">
            All Products
          </h1>
          <Breadcrumb />
        </div>

        <div className="bg-white flex flex-row rounded-lg border-gray-300 border-1 flex-1/4 h-12 space-x-3">
          <div className="h-9 w-9 flex items-center justify-center rounded-4xl bg-gradient-to-r from-blue-500 to-sky-500 text-white mt-1 ml-1">
            <HiMagnifyingGlass className="h-6 w-6" />
          </div>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search products..."
            className="outline-none h-12"
          />
        </div>
      </div>

      {!products || !filteredProduct || filteredProduct?.length === 0 ? (
        <div className="min-h-100 flex flex-col items-center justify-center text-gray-300 space-y-4">
          <FaFaceSadTear className="w-40 h-40 " />
          <h1 className="text-4xl font-semibold">No Product Found</h1>
        </div>
      ) : (
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
      )}
    </div>
  );
};

export default ProductList;
