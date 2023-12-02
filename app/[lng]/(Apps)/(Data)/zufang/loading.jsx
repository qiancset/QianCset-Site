"use client";

import React, { useState } from "react";
import { Skeleton, Space } from "antd";
const Loading = () => {
  const [active] = useState(false);
  const [size] = useState("default");



  return (
    <>
      <Space>
        <Skeleton.Image active={active} />

      </Space>

      <Space>
        <Skeleton.Input active={active} size={size} />

      </Space>

      <br />
      <br />
    </>
  );
};
export default Loading;
