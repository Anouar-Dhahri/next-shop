import ProductList from "@/components/ProductList/ProductList";
import { stripe } from "@/lib/stripe";
import React from "react";
import { MoonLoader } from "react-spinners";

const ProductsPage = async () => {
  const products = await stripe.products.list({
    expand: ["data.default_price"],
  });
  return (
    <div className="pb-8">
      <h1 className="text-3xl font-bold leading-none tracking-tight text-foreground text-center mb-8">
        All Products
      </h1>
      {!products || products.data?.length === 0 ? (
        <MoonLoader />
      ) : (
        <ProductList products={products.data} />
      )}
    </div>
  );
};

export default ProductsPage;
