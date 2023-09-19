"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { LoginOutlined, FileSearchOutlined } from "@ant-design/icons";
import "./About.css";
import HmoeWeb3 from "./2Hmoeweb3";
import Web3 from "./3Web3";
import Projects from "./5Projects";
import Contact from "./6Contact";
import { useTranslation } from "react-i18next";
import { FloatButton } from "antd";

export default function About() {
  const { t } = useTranslation();

  return (
    <div className="Aboutmian">
      <div id="About">
        <div className="rotate1">
          <img src="favicon.ico" alt="About-Q" className="Imagelogo" />
        </div>
        <h1 className="Abouth1">
          {t("千赛特")}
          <hr className="About_hr"/>
        </h1>

        <strong className="About_strong">
          <p style={{ textAlign: "center" }}>
            {t("去中心化社区")},{t("Web3互动交流的区块链世界")}
          </p>
        </strong>

        <div className="Aboutbtn">
          <Link href="/" target="_blank">
            <button type="button" className="button1 pulse w-button">
              {t("前往应用")} <LoginOutlined />
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
