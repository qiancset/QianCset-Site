"use client";
import React, { useState } from 'react';
import {Skeleton } from 'antd';
export default function Loading() {
  const [active] = useState(true);

  return (
    <div className='loading'>
        <Skeleton.Image active={active} />

<Skeleton active paragraph={{ rows: 5 }} />


    </div>
  )
}
