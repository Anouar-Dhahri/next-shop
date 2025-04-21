import ProductList from "@/components/ProductList/ProductList";
import ProductNotFound from "@/components/ProductNotFound/ProductNotFound";
import { stripe } from "@/lib/stripe";
import React from "react";

const ProductsPage = async () => {
  try {
    const products = await stripe.products.list({
      expand: ["data.default_price"],
    });
    return <ProductList products={products.data} />;
  } catch (error) {
    console.error("Error Fetching Products==>", error);
    return <ProductNotFound />;
  }
};

export default ProductsPage;
