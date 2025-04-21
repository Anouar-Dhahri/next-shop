"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { RiNextjsLine } from "react-icons/ri";
import { CgShoppingBag } from "react-icons/cg";
import { IoMdClose } from "react-icons/io";
import { CiMenuFries } from "react-icons/ci";
import { IoHomeOutline } from "react-icons/io5";
import { CiBoxes } from "react-icons/ci";
// import { IoBagCheckOutline } from "react-icons/io5";

import { useCartStore } from "@/store/cart-store";
import { Button } from "../ui/button";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);
  const { items } = useCartStore();
  const cartCount = items.reduce((acc, item) => acc + item.quantity, 0);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="sticky top-0 z-50 bg-white shadow">
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        <div className="flex space-x-1 hover:text-blue-600 transition-all duration-400 ease-in-out">
          <RiNextjsLine className="text-2xl" />
          <Link href="/" className="font-bold uppercase">
            NextShop
          </Link>
        </div>

        <div className="hidden md:flex space-x-6">
          <div className="flex space-x-1 hover:text-blue-600 transition-all duration-400 ease-in-out">
            <IoHomeOutline className="text-xl" />
            <Link href="/" className="font-semibold">
              Home
            </Link>
          </div>
          <div className="flex space-x-1 hover:text-blue-600 transition-all duration-400 ease-in-out">
            <CiBoxes className="text-xl" />

            <Link href="/products" className="font-semibold">
              Products
            </Link>
          </div>
          {/* <div className="flex space-x-1 hover:text-blue-600 transition-all duration-400 ease-in-out">
            <IoBagCheckOutline className="text-xl" />

            <Link href="/checkout" className="font-semibold">
              Checkout
            </Link>
          </div> */}
        </div>
        <div className="flex items-center space-x-4">
          <Link href="/checkout" className="relative">
            <CgShoppingBag className="h-6 w-6 hover:text-blue-600" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white">
                {cartCount}
              </span>
            )}
          </Link>
          <Button
            variant="ghost"
            className="md:hidden hover:cursor-pointer hover:text-blue-600"
            onClick={() => setMobileOpen((prev) => !prev)}>
            {mobileOpen ? (
              <IoMdClose className="h-6 w-6" />
            ) : (
              <CiMenuFries className="h-6 w-6 " />
            )}
          </Button>
        </div>
      </div>
      {mobileOpen && (
        <nav className="md:hidden bg-white shadow-md">
          <ul className="flex flex-col p-4 space-y-2">
            <li className="p-4 hover:bg-gray-100 rounded-2xl transition-all duration-400 ease-in-out">
              <div className="flex space-x-1 justify-center hover:text-blue-600 transition-all duration-400 ease-in-out">
                <IoHomeOutline className="text-xl" />
                <Link href="/" className="font-semibold">
                  Home
                </Link>
              </div>
            </li>
            <li className="p-4 hover:bg-gray-100 rounded-2xl transition-all duration-400 ease-in-out">
              <div className="flex space-x-1 justify-center hover:text-blue-600 transition-all duration-400 ease-in-out">
                <CiBoxes className="text-xl" />
                <Link href="/products" className="font-semibold">
                  Products
                </Link>
              </div>
            </li>
            {/* <li className="p-4 hover:bg-gray-100 rounded-2xl transition-all duration-400 ease-in-out">
              <div className="flex space-x-1 justify-center hover:text-blue-600 transition-all duration-400 ease-in-out">
                <IoBagCheckOutline className="text-xl" />

                <Link href="/checkout" className="font-semibold">
                  Checkout
                </Link>
              </div>
            </li> */}
          </ul>
        </nav>
      )}
    </nav>
  );
};

export default Navbar;
