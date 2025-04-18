import { clsx, type ClassValue } from "clsx"
import Stripe from "stripe";
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export const handlePriceFormat = (product: Stripe.Product): string => {
  const price = product.default_price as Stripe.Price;
  let value: string = "";
  if (price && price.unit_amount) {
    value = (price.unit_amount / 100).toFixed(2);
  }

  return value;
};