import ProductDetails from "@/components/ProductDetails/ProductDetails";
import { stripe } from "@/lib/stripe";
import React from "react";
import ProductNotFound from "@/components/ProductNotFound/ProductNotFound";
const ProductPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  try {
    const { id } = await params;
    const product = await stripe.products.retrieve(id, {
      expand: ["default_price"],
    });
    const plainProduct = JSON.parse(JSON.stringify(product));
    console.log(plainProduct);
    return <ProductDetails product={plainProduct} />;
  } catch (error) {
    console.error("Error fetching products :", error);
    return <ProductNotFound />;
  }
};

export default ProductPage;
