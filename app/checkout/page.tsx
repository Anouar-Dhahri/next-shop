"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useCartStore } from "@/store/cart-store";
import { checkoutAction } from "./checkout-action";
import { CgShoppingBag } from "react-icons/cg";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";

const CheckoutPage = () => {
  const { items, removeItem, addItem } = useCartStore();
  const total = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div>
      <div className="flex flex-col gap-2 flex-1/2">
        <h1 className="text-2xl font-light bg-gradient-to-r from-blue-500 to-sky-500 bg-clip-text text-transparent">
          Checkout
        </h1>
        <Breadcrumb />
      </div>

      <div className="container mx-auto px-4 py-8">
        {items?.length === 0 ? (
          <div className="min-h-100 flex flex-col items-center justify-center text-gray-300 space-y-4">
            <CgShoppingBag className="w-40 h-40 " />
            <h1 className="text-4xl font-semibold">Your Cart is Empty</h1>
          </div>
        ) : (
          <>
            <h1 className="text-3xl font-bold mb-8 text-center">Checkout</h1>
            <Card className="max-w-md mx-auto mb-8">
              <CardHeader>
                <CardTitle className="text-xl font-bold">
                  Order Summary
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {items.map((item) => (
                    <li
                      key={item.id}
                      className="flex flex-col gap-2 border-b pb-2">
                      <div className="flex justify-between">
                        <span className="font-medium">{item.name}</span>
                        <span className="font-semibold">
                          ${((item.price * item.quantity) / 100).toFixed(2)}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button
                          className="hover:cursor-pointer"
                          variant="outline"
                          size="sm"
                          onClick={() => removeItem(item.id)}>
                          –
                        </Button>
                        <span className="text-lg font-semibold">
                          {item.quantity}
                        </span>
                        <Button
                          className="hover:cursor-pointer"
                          variant="outline"
                          size="sm"
                          onClick={() => addItem({ ...item, quantity: 1 })}>
                          +
                        </Button>
                      </div>
                    </li>
                  ))}
                </ul>
                <div className="mt-4 border-t pt-2 text-lg font-semibold">
                  Total: ${(total / 100).toFixed(2)}
                </div>
              </CardContent>
            </Card>
            <form action={checkoutAction} className="max-w-md mx-auto">
              <input type="hidden" name="items" value={JSON.stringify(items)} />
              <Button
                type="submit"
                variant="default"
                className="w-full hover:cursor-pointer">
                Proceed to Payment
              </Button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default CheckoutPage;
