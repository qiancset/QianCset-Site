"use client";
import { DotChartOutlined } from "@ant-design/icons";
import React, { useState } from "react";
import { Skeleton, Space } from "antd";
const Loading = () => {
  const [active] = useState(false);
  const [size] = useState("default");



  return (
    <>
      <Space>
        <Skeleton.Image active={active} />
        <Skeleton.Node active={active}>
          <DotChartOutlined
            style={{
              fontSize: 40,
              color: "#ea7411",
            }}
          />
        </Skeleton.Node>
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
