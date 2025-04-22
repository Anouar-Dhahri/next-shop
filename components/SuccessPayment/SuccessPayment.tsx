"use client";
import { useCartStore } from "@/store/cart-store";
import { useEffect } from "react";
import { FaCheck } from "react-icons/fa6";
import { FaBarcode } from "react-icons/fa";
import { IoTimeOutline } from "react-icons/io5";
import { CiCreditCard1 } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { AiOutlineDownload } from "react-icons/ai";
import { CgShoppingBag } from "react-icons/cg";
import dayjs from "dayjs";
import Stripe from "stripe";

type Props = {
  checkoutSession: Stripe.Checkout.Session;
};

const SuccessPayment = ({ checkoutSession }: Props) => {
  const { clearCart } = useCartStore();

  const paymentIntent = checkoutSession.payment_intent as Stripe.PaymentIntent;
  const paymentMethod = paymentIntent.payment_method as Stripe.PaymentMethod;

  useEffect(() => {
    clearCart();
  }, [clearCart]);

  console.log({ checkoutSession });
  return (
    <div className="flex w-full min-h-screen items-center justify-center">
      <div className="flex flex-col mt-7 md:mt-0 lg:mt-0 w-full md:w-[70%] lg:w-[50%] items-center justify-center gap-4 bg-white rounded-3xl p-8 relative">
        <div className="bg-green-200 rounded-full flex justify-center items-center w-20 h-20 text-white absolute top-[-40]">
          <div className="bg-green-500 rounded-full flex justify-center items-center w-12 h-12 text-white">
            <FaCheck className="w-6 h-6" />
          </div>
        </div>

        <div className="flex flex-col gap-2 w-full items-center mt-8">
          <h1 className="text-2xl font-md items-center text-gray-700">
            Payment Success!
          </h1>
          <p className="text-xl text-gray-500">
            Your payment has been successfully done.
          </p>
        </div>

        <hr className="border-0.5 border-gray-300 w-full" />

        <div className="flex flex-col items-center">
          <p className="text-xl text-gray-500">Total Payment</p>
          <h1 className="text-2xl font-md items-center text-gray-800">
            $
            {checkoutSession?.amount_total
              ? (checkoutSession?.amount_total / 100).toFixed(2)
              : 0}
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
          <div className="flex flex-row p-4 rounded-3xl border-1 border-gray-200 gap-2">
            <div className="w-[80px] h-[80px] text-black flex items-center justify-center bg-purple-300 rounded-2xl">
              <FaBarcode className="w-12 h-12" />
            </div>
            <div className="flex flex-col gap-2 items-start justify-center break-normal">
              <p className="text-sm font-bold text-black">Ref Number</p>
              <p className="text-sm font-light text-gray-700 ">
                {paymentIntent.id?.slice(0, 15)}...
              </p>
            </div>
          </div>
          <div className="flex flex-row p-4 rounded-3xl border-1 border-gray-200 gap-2">
            <div className="w-[80px] h-[80px] text-black flex items-center justify-center bg-orange-300 rounded-2xl">
              <IoTimeOutline className="w-12 h-12" />
            </div>
            <div className="flex flex-col gap-2 items-start justify-center">
              <p className="text-sm font-bold text-black">Payment Time</p>
              <p className="text-sm font-light text-gray-700">
                {dayjs().format("DD MMM YYYY, HH:mm")}
              </p>
            </div>
          </div>
          <div className="flex flex-row p-4 rounded-3xl border-1 border-gray-200 gap-2">
            <div className="w-[80px] h-[80px] text-black flex items-center justify-center bg-emerald-300 rounded-2xl">
              <CiCreditCard1 className="w-12 h-12" />
            </div>
            <div className="flex flex-col gap-2 items-start justify-center">
              <p className="text-sm font-bold text-black">Payment Method</p>
              <p className="text-sm font-light text-gray-700">
                {paymentMethod?.card?.brand?.toUpperCase()}
              </p>
            </div>
          </div>
          <div className="flex flex-row p-4 rounded-3xl border-1 border-gray-200 gap-2">
            <div className="w-[80px] h-[80px] text-black flex items-center justify-center bg-yellow-300 rounded-2xl">
              <CiUser className="w-12 h-12" />
            </div>
            <div className="flex flex-col gap-2 items-start justify-center">
              <p className="text-sm font-bold text-black">Sender Name</p>
              <p className="text-sm font-light text-gray-700">
                {checkoutSession?.customer_details?.name}
              </p>
            </div>
          </div>
        </div>

        <div className="flex w-full flex-col md:flex-row justify-evenly gap-4">
          <button
            onClick={() => window.open("/products", "_self")}
            className="p-4 flex items-center justify-center text-gray-600 bg-white border-1 border-gray-600 rounded-4xl space-x-2 hover:cursor-pointer">
            <CgShoppingBag className="w-6 h-6" /> <span>Continue Shopping</span>
          </button>

          <button className="p-4 flex items-center justify-center text-white bg-gray-600 rounded-4xl space-x-2 hover:cursor-pointer">
            <AiOutlineDownload className="w-6 h-6" />{" "}
            <span>Get PDF Receipt</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SuccessPayment;
