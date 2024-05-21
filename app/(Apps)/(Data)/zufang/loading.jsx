"use client";

import React, { useState } from "react";
import { Skeleton } from "@nextui-org/skeleton";
const Loading = () => {
  return (
    <>
      <Skeleton className='rounded-lg'>
      </Skeleton>
      <Skeleton className='w-3/5 rounded-lg'>
      </Skeleton>
      <Skeleton className='w-4/5 rounded-lg'>
      </Skeleton>
      <Skeleton className='w-4/5 rounded-lg'>
      </Skeleton>
    </>
  );
};
export default Loading;
