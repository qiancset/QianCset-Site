"use client";
import Link from "next/link";

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
        <h1 className="About_h1">
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
            <button type="button" className="button_About_1 pulse w-button">
              {t("前往应用")}
            </button>
          </Link>

          <Link href="https://docs.qiancset.com/" target="_blank">
            <button type="button" className="button_About_2">
              {t("阅读文档")} 
            </button>
          </Link>
        </div>
      </div>


      <HmoeWeb3 />
      <Web3 />
  
      <Projects />

      <Contact />
      <FloatButton.BackTop visibilityHeight={3000} />
    </div>
  );
}
