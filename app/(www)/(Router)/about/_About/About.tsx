"use client";
import Link from "next/link";
import Image from "next/image";

import "./About.css";
import HmoeWeb3 from "./2Hmoeweb3";
import Web3 from "./3Web3";
import Projects from "./5Projects";
import Contact from "./6Contact";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";





export default function About() {
  const { t } = useTranslation();

  return (
    <div className="Aboutmian">



      {/* 高斯模糊 */}
      <div className="background-container">
        <div className="circle_About"></div>
        <div className="circle_About"></div>
      </div>

      <div id="About">

        <div className="rotate1">

            <Image src="/favicon.ico" alt="About-Q" className="Imagelogo" width={900} height={900}/>

        </div>

        <h1 className="About_h1">
          {t("千赛特")}
          <hr className="About_hr" />
        </h1>

        <strong className="About_strong">
          {t('去中心化的房屋租赁服务应用，提供创新方案')}
          <br />
          {t('利用区块链探索创新的Web3模式')}
        </strong>

        <div className="Aboutbtn">

          <Link href="/" /* target="_blank" */>
            <div className="button_About_1 pulse w-button">
              {t("前往应用")}
            </div>
          </Link>

          <Link href="https://docs.qiancset.com" target='_blank'>
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

    </div>
  );
}
