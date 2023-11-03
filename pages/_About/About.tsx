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
      <div className="background_About">
        <div className="circle_About"></div>
        <div className="circle_About"></div>
      </div>
      <div id="About">
        <div className="rotate1">
          <img src="favicon.ico" alt="About-Q" className="Imagelogo" />
        </div>
        <h1 className="About_h1">
          {t("千赛特")}
          <hr className="About_hr" />
        </h1>

        <strong className="About_strong">

          {t('让互联网变得可拥有、可信任、有价值')}
          <br />
          {t('探索创新的Web3商业模式')}

        </strong>

        <div className="Aboutbtn">
          <Link href="/" target="_blank">
            <div className="button_About_1 pulse w-button">
              {t("前往应用")}
            </div>
          </Link>

          <Link href="/docs">
            <div className="button_About_2">
              {t("阅读文档")}
            </div>
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
