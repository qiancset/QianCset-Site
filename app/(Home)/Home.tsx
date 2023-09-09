"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { LoginOutlined, FileSearchOutlined } from "@ant-design/icons";
import "./Home.css";
/* import Carousel from './(home)/1Carousel' */
import HmoeWeb3 from "./(home)/2Hmoeweb3";
import Web3 from "./(home)/3Web3";
/* import Marquee from "./(home)/4Marquee"; */
import Projects from "./(home)/5Projects";
import Contact from "./(home)/6Contact";
import { useTranslation } from "react-i18next";
import { FloatButton } from "antd";

export default function Home() {
  const { t } = useTranslation();

  return (
    <div className="homemian">
      <div id="home">
        <div className="rotate1">
          <img src="favicon.ico" alt="home-Q" className="Imagelogo" />
        </div>
        <h1 className="homeh1">
          {t("千赛特")}
          <hr className="home_hr"/>
        </h1>

        <strong className="home_strong">
          <p style={{ textAlign: "center" }}>
            {t("去中心化社区")},{t("Web3互动交流的区块链世界")}
          </p>
        </strong>

        <div className="homebtn">
          <Link href="/Uniswap">
            <button type="button" className="button1 pulse w-button">
              {t("获取代币")} <LoginOutlined />
            </button>
          </Link>

          <Link href="https://docs.qiancset.com/" target="_blank">
            <button type="button" className="button2">
              {t("阅读文档")} <FileSearchOutlined />
            </button>
          </Link>
        </div>
      </div>

      <Down />
      {/* 浮动箭头 */}

      {/* <Carousel /> */}

      <HmoeWeb3 />
      <Web3 />
      {/* <Marquee /> */}
      <Projects />

      <Contact />
      <FloatButton.BackTop visibilityHeight={3000} />
    </div>
  );
}

function Down() {
  // 当页面滚动时隐藏提示图标、、、浮动箭头
  const [hideScrollDown, setHideScrollDown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollDown = document.querySelector(".scroll-down");
      if (scrollDown) {
        const { top } = scrollDown.getBoundingClientRect();
        if (top < window.innerHeight) {
          setHideScrollDown(true);
        } else {
          setHideScrollDown(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      {/* 浮动箭头 */}
      {!hideScrollDown && (
        <div className="scroll-down w-button pulse">
          <i className="fas fa-arrow-down fa-2x"></i>
        </div>
      )}
    </>
  );
}
