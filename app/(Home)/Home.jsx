/* eslint-disable @next/next/no-img-element */
'use client'
import { useState, useEffect } from "react";
import Link from "next/link";
import { LoginOutlined, FileSearchOutlined } from "@ant-design/icons";
import './Home.css'

import HmoeWeb3 from "./(home)/2Hmoeweb3";
import Web3 from "./(home)/3Web3";
import Marquee from "./(home)/4Marquee";
import Projects from "./(home)/5Projects";
import Contact from "./(home)/6Contact";
import { useTranslation } from "react-i18next";

export default function Home() {

  const { t } = useTranslation();




  return (
    <div className="homemian">
      <div id="container">
        <h3 className="homeh3">
          {t("千里区块链")}
          <hr />
        </h3>
        <div id="home">
          <section className="intro1">
            <div className="container">
              <div className="左">
                <p>
                  <strong>{t("去中心化社区")}</strong>
                </p>
                <p>
                  <strong>{t("Web3互动交流的区块链世界")}</strong>
                </p>
                <div></div>

                <div>
                  <Link href="./Uniswap">
                    <button type="button" className="button1 pulse w-button">
                      {t("获取代币")} <LoginOutlined />
                    </button>
                  </Link>
                  <Link href="https://docs.qlweb3.top/" target="_blank">
                    <button type="button" className="button2">
                      {t("阅读文档")}
                      <FileSearchOutlined />
                    </button>
                  </Link>
                </div>
              </div>

              <div className="右">
                <div className="rotate1">
                  <img src='/icon/Q300K.png' alt="home-Q" className="Imagelogo"/>
                </div>
              </div>
            </div>
          </section>
        </div>

        <Down />
        {/* 浮动箭头 */}

        <HmoeWeb3 />
        <Web3 />
        <Marquee />
        <Projects />



        <Contact />
      </div>

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
