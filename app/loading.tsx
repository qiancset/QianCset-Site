"use client";
import React, { useState } from "react";
import { Skeleton } from "@nextui-org/skeleton";
import Image from "next/image";
const Loading = () => {
  return (
    <div className=" justify-center items-center flex">
      <Image
        src={`/favicon.ico`}
        width={500}
        height={500}
        alt="favicon"
        className=""
      />
    </div>
  );
};
export default Loading;
