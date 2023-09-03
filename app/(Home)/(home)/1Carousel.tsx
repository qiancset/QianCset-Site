"use client";
import "./1.css";
import Image from "next/image";
import { Carousel } from "antd";

export default function Carouselpage() {
  return (
    <div className="Carousel">
      <Carousel autoplay>
        <IMAGE src="/icon/QianCset.png" alt="QianCset" />

        <IMAGE src="/icon/QianCset橙.png" alt="QianCset橙" />

        <IMAGE src="/icon/QianCset黑.png" alt="QianCset黑" />

        <IMAGE src="/icon/QianCset白.png" alt="QianCset白" />
      </Carousel>
    </div>
  );
}

function IMAGE({ src, alt }) {
  const contentStyle = {
    height: "70%",
    width: "70%",
  };
  return (
    <div className="Carousel_img">
      <Image
        src={src}
        style={contentStyle}
        height={132}
        width={400}
        alt={alt}
      />
    </div>
  );
}
