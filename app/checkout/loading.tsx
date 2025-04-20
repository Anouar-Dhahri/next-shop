"use client";
import React from "react";
import { GridLoader } from "react-spinners";

const HomeLoading = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <GridLoader size={30} color="#222" loading={true} />
    </div>
  );
};

export default HomeLoading;
