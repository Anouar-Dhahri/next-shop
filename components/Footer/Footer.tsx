"use client";
import dayjs from "dayjs";
import Link from "next/link";
import React from "react";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <div className="flex bg-white bottom-0 left-0">
      <div className="w-[80%] m-auto">
        <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="flex flex-col gap-4 justify-center md:justify-start items-center sm:items-start md:items-start">
            <h1 className="text-md font-extralight bg-gradient-to-r from-blue-500 to-sky-500 bg-clip-text text-transparent">
              Gallery
            </h1>
            <Link
              href="#"
              className="text-sm font-extralight text-black hover:underline">
              Community
            </Link>
            <Link
              href="#"
              className="text-sm font-extralight text-black hover:underline">
              Trending
            </Link>
            <Link
              href="#"
              className="text-sm font-extralight text-black hover:underline">
              Picks
            </Link>
            <Link
              href="#"
              className="text-sm font-extralight text-black hover:underline">
              Blogs
            </Link>
            <Link
              href="#"
              className="text-sm font-extralight text-black hover:underline">
              Inspiration
            </Link>
          </div>
          <div className="flex flex-col gap-4 justify-center md:justify-start items-center sm:items-start md:items-start">
            <h1 className="text-md font-extralight bg-gradient-to-r from-blue-500 to-sky-500 bg-clip-text text-transparent">
              Marketplace
            </h1>
            <Link
              href="#"
              className="text-sm font-extralight text-black hover:underline">
              Trending
            </Link>
            <Link
              href="#"
              className="text-sm font-extralight text-black hover:underline">
              Best selling
            </Link>
            <Link
              href="#"
              className="text-sm font-extralight text-black hover:underline">
              Latest
            </Link>
            <Link
              href="#"
              className="text-sm font-extralight text-black hover:underline">
              News
            </Link>
          </div>
          <div className="flex flex-col gap-4 justify-center md:justify-start items-center sm:items-start md:items-start">
            <h1 className="text-md font-extralight bg-gradient-to-r from-blue-500 to-sky-500 bg-clip-text text-transparent">
              FAQ
            </h1>
            <Link
              href="#"
              className="text-sm font-extralight text-black hover:underline">
              About
            </Link>
            <Link
              href="#"
              className="text-sm font-extralight text-black hover:underline">
              Career
            </Link>
            <Link
              href="#"
              className="text-sm font-extralight text-black hover:underline">
              Payments
            </Link>{" "}
            <Link
              href="#"
              className="text-sm font-extralight text-black hover:underline">
              Returns
            </Link>
          </div>
          <div className="flex flex-col gap-4 justify-center md:justify-start items-center sm:items-start md:items-start">
            <h1 className="text-md font-extralight bg-gradient-to-r from-blue-500 to-sky-500 bg-clip-text text-transparent">
              Newsletter
            </h1>
            <p className="text-sm font-extralight text-black tracking-wider">
              Subscribe to our newsletter to get your weekly dose of news,
              updates, tips and special offers.{" "}
            </p>

            <div className="w-full h-12 bg-gray-200 flex flex-row space-x-3 rounded-lg items-center justify-center pr-2 pl-2">
              <div className="h-8 w-8 flex items-center justify-center rounded-4xl bg-gradient-to-r from-blue-500 to-sky-500 text-black">
                <MdEmail className="h-5 w-5" />
              </div>
              <input
                type="email"
                placeholder="Enter your email address"
                className=" w-full p-x-1 outline-none"
              />
            </div>
            <button
              type="submit"
              className="w-full h-12 uppercase font-extralight text-white text-sm rounded-lg hover:cursor-pointer bg-gradient-to-r from-blue-500 to-sky-500">
              Subscribe
            </button>
          </div>
        </div>

        <hr />
        <div className="flex flex-col md:flex-row items-center sm:gap-4 justify-center md:justify-between p-5 mb-5">
          <p className="text-sm font-light text-black tracking-wider">
            <Link href="#" className="hover:underline">
              Privacy Policy
            </Link>{" "}
            -{" "}
            <Link href="#" className="hover:underline">
              Terms and conditions
            </Link>
          </p>
          <p className="text-sm font-light text-black tracking-wider">
            <span className="font-bold">NEXTSHOP</span> © - All Right Reserved{" "}
            {dayjs().format("YYYY")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
