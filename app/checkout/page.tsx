"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { useCartStore } from "@/store/cart-store";
import { checkoutAction } from "./checkout-action";
import { CgShoppingBag } from "react-icons/cg";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
import Image from "next/image";
import { countryList } from "@/constants";
import { FaShippingFast } from "react-icons/fa";
import { MdOutlineSupportAgent } from "react-icons/md";
import { IoChatboxEllipses } from "react-icons/io5";
import { TbGiftFilled } from "react-icons/tb";
import { FaRegTrashAlt } from "react-icons/fa";
import { FaBoxesPacking } from "react-icons/fa6";

const CheckoutPage = () => {
  const { items, removeItem, addItem, clearCart } = useCartStore();
  const total = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  console.log(items);
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
          <div className="flex flex-col gap-4">
            <div className="flex flex-row justify-between p-8 bg-white rounded-3xl">
              <h1 className="text-base font-light justify-center flex items-center gap-2">
              <FaBoxesPacking className="text-center w-10 h-10 text-blue-500"/>
                <span className="font-bold">
                  {items?.length} {items.length > 2 ? "items" : "item"}
                </span>{" "}
                in your cart
              </h1>
              <button
                onClick={() => clearCart()}
                className="flex justify-center items-center space-x-2 text-base p-3 text-red-400 rounded-3xl hover:cursor-pointer border-1 border-red-400 hover:bg-red-400 hover:text-white transition-all duration-300 ease-in-out">
                <FaRegTrashAlt className="text-center w-6 h-6" />{" "}
                <span>Clear Cart</span>
              </button>
            </div>

            <div className="flex flex-col gap-4 ">
              <div className="flex flex-col bg-white rounded-3xl p-8 h-150 overflow-auto">
                <div className="flex flex-row gap-4 mb-4">
                  <div className="flex flex-2/5 min-w-[300px]">
                    <p className="font-bold">Product</p>
                  </div>
                  <div className="flex flex-1/5 justify-center min-w-[150px]">
                    <p className="font-bold">Price</p>
                  </div>
                  <div className="flex flex-1/5 justify-center min-w-[150px]">
                    <p className="font-bold">Quantity</p>
                  </div>
                  <div className="flex flex-1/5 justify-center min-w-[150px]">
                    <p className="font-bold">Total Price</p>
                  </div>
                </div>

                {items.map((item) => (
                  <div className="flex flex-row gap-4 mb-4" key={item?.id}>
                    <div className="flex min-w-[300px] flex-2/5 gap-2 ">
                      <div className="flex  bg-gradient-to-r from-blue-400 to-sky-400 rounded-lg w-[100px] h-[100px] justify-center items-center flex-1/2">
                        <Image
                          src={item.imageUrl!}
                          width={70}
                          height={70}
                          className="rounded-lg"
                          alt={item.name}
                        />
                      </div>

                      <div className="flex min-w-[150px] justify-center items-center text-wrap flex-1/2">
                        <p className="text-[12px] font-bold justify-center items-center">
                          {item.name}
                        </p>
                      </div>
                    </div>
                    <div className="flex min-w-[150px] flex-1/5 justify-center items-center">
                      <p className="text-sm font-bold">$ {item.price / 100}</p>
                    </div>
                    <div className="flex min-w-[150px] flex-1/5 justify-evenly items-center ">
                      <Button
                        className="hover:cursor-pointer"
                        variant="outline"
                        size="sm"
                        onClick={() => removeItem(item.id)}>
                        –
                      </Button>
                      <span className="text-sm font-semibold">
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
                    <div className="flex min-w-[150px] flex-1/5 justify-center items-center">
                      <p className="text-lg font-bold text-blue-500 ">
                        ${((item.price * item.quantity) / 100).toFixed(2)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                <div className="flex flex-row p-4 rounded-3xl bg-white gap-2">
                  <div className="w-[80px] h-[80px] text-black flex items-center justify-center bg-purple-300 rounded-2xl">
                    <FaShippingFast className="w-12 h-12" />
                  </div>
                  <div className="flex flex-col gap-2 items-start justify-center">
                    <p className="text-sm font-bold text-black">
                      Free Shipping
                    </p>
                    <p className="text-sm font-light text-gray-300">
                      When your spend $50+
                    </p>
                  </div>
                </div>
                <div className="flex flex-row p-4 rounded-3xl bg-white gap-2">
                  <div className="w-[80px] h-[80px] text-black flex items-center justify-center bg-orange-300 rounded-2xl">
                    <MdOutlineSupportAgent className="w-12 h-12" />
                  </div>
                  <div className="flex flex-col gap-2 items-start justify-center">
                    <p className="text-sm font-bold text-black">
                      Call Us Anytime
                    </p>
                    <p className="text-sm font-light text-gray-300">
                      +34 555 5555
                    </p>
                  </div>
                </div>
                <div className="flex flex-row p-4 rounded-3xl bg-white gap-2">
                  <div className="w-[80px] h-[80px] text-black flex items-center justify-center bg-emerald-300 rounded-2xl">
                    <IoChatboxEllipses className="w-12 h-12" />
                  </div>
                  <div className="flex flex-col gap-2 items-start justify-center">
                    <p className="text-sm font-bold text-black">Chat With Us</p>
                    <p className="text-sm font-light text-gray-300">
                      We offer 24-hour chat support
                    </p>
                  </div>
                </div>
                <div className="flex flex-row p-4 rounded-3xl bg-white gap-2">
                  <div className="w-[80px] h-[80px] text-black flex items-center justify-center bg-yellow-300 rounded-2xl">
                    <TbGiftFilled className="w-12 h-12" />
                  </div>
                  <div className="flex flex-col gap-2 items-start justify-center">
                    <p className="text-sm font-bold text-black">Gift Cards</p>
                    <p className="text-sm font-light text-gray-300">
                      For your loved one, in any amount
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-4">
                {/** Calculate Shipping */}
                <div className="flex flex-1/2 flex-col md:flex-row gap-4">
                  <div className="flex flex-col flex-1/2 bg-white rounded-3xl p-8 gap-8">
                    <div className="flex flex-col gap-4">
                      <h1 className="text-2xl font-bold">
                        Calculated Shipping
                      </h1>
                      <div className="w-full h-12 bg-gray-300 rounded-3xl flex justify-center  pl-4 pr-4">
                        <select className="w-full outline-none">
                          <option value="country" selected>
                            Country
                          </option>
                          {countryList.map((country, idx) => (
                            <option
                              key={idx}
                              value={country}
                              className="w-full">
                              {country}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className="flex flex-row gap-4">
                        <div className="flex flex-1/2 border-1 bg-gray-300 rounded-3xl h-12 pl-4 pr-4">
                          <input
                            type="text"
                            placeholder="State / City"
                            className="w-full outline-none"
                          />
                        </div>
                        <div className="flex flex-1/2 border-1 border-gray-300 rounded-3xl h-12 pl-4 pr-4">
                          <input
                            type="text"
                            placeholder="ZIP Code"
                            className="w-full outline-none"
                          />
                        </div>
                      </div>

                      <button className="w-full p-4 text-white rounded-3xl hover:cursor-pointer bg-gradient-to-r from-blue-500 to-sky-500">
                        Update
                      </button>
                    </div>
                  </div>
                </div>

                {/** Coupon */}
                <div className="flex flex-1/2 flex-col gap-4 bg-white rounded-3xl p-8">
                  <h1 className="text-2xl font-bold">Coupon Code</h1>
                  <p className="text-base font-semibold">Have a coupon code?</p>
                  <p className="text-base font-light text-gray-400">
                    Enter your promo code below to get an exclusive discount on
                    your purchase!
                  </p>
                  <div className="flex border-1 border-gray-300 rounded-3xl h-12 pl-4 pr-4">
                    <input
                      type="text"
                      placeholder="Coupon Code"
                      className="w-full outline-none"
                    />
                  </div>
                  <button className="w-full p-4 text-white rounded-3xl hover:cursor-pointer bg-gradient-to-r from-blue-500 to-sky-500">
                    Apply
                  </button>
                </div>
              </div>

              <div className="flex flex-col gap-2 bg-white rounded-3xl p-8">
                <h1 className="text-2xl font-bold">Cart Total</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2">
                  <div className="flex flex-row md:flex-col justify-between pl-4 pr-4">
                    <p className="text-base font-bold">Cart Subtotal</p>
                    <p className="text-base font-bold">
                      ${(total / 100).toFixed(2)}
                    </p>
                  </div>
                  <div className="flex flex-row md:flex-col justify-between  pl-4 pr-4">
                    <p className="text-base font-bold">Discount</p>
                    <p className="text-base font-bold"> -$0.00</p>
                  </div>
                  <div className="flex flex-row md:flex-col justify-between  pl-4 pr-4">
                    <p className="text-base font-bold">Cart Total</p>
                    <p className="text-base font-bold">
                      ${(total / 100).toFixed(2)}
                    </p>
                  </div>
                  <form action={checkoutAction} className="w-full mx-auto">
                    <input
                      type="hidden"
                      name="items"
                      value={JSON.stringify(items)}
                    />
                    <button
                      type="submit"
                      className="w-full p-4 text-white rounded-3xl hover:cursor-pointer bg-gradient-to-r from-blue-500 to-sky-500">
                      Proceed to Payment
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CheckoutPage;
