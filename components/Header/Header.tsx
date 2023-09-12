/* eslint-disable @next/next/no-img-element */
"use client";

import { useTranslation } from "react-i18next";
import { Space, Dropdown } from "antd";
import { MenuUnfoldOutlined } from "@ant-design/icons";

import "./Header.css";
import MyNavLink from "./zujian/MyNavLink"; //封装 Link 组件

import Link from "next/link";

import Locales from "./LocalesButton/Locales";
import ModeThemes from "./ModeThemes/ModeThemes";

/* import Clerk_Header from "../Clerk/Clerk_Header"; */


export default function Header() {
  const { t } = useTranslation();

  return (
    <>
      <header>

<div className="max_header">


        <a className="logo" href="/about">
          <img src="favicon.ico" alt="header-Q" />
        </a>

        
        <nav className="nav_PC">{/* 电脑 */}
          <Space size="large" align="center">
            <div className="nav-bar">
              <MyNavLink href="/about">{t("关于")}</MyNavLink>

              <MyNavLink href="/about/News">{t("新闻")}</MyNavLink>

              <MyNavLink href="/about/Products">{t("产品")}</MyNavLink>

              <a href="https://docs.qiancset.com/" id="Wen" target="_blank">
                <div className="nav_link">{t("文档")}</div>
              </a>
            </div>
            <ModeThemes />

            <Locales />

          </Space>
        </nav>


        <nav className="Header_left">
         {/*  <Clerk_Header /> */}
        </nav>


        <DropdownA />  {/* 小于450px显示 下拉菜单 */}


        </div>{/* max_header */}
      </header>
    </>
  );
}

/* 下拉菜单 */
const DropdownA = () => {
  const { t } = useTranslation();

  const items = [
    {
      label: (
        <Link href="/about">
          <div className="DropdownA_nav_link">
            {t("首页")}
          </div>
        </Link>
      ),
      key: "1",
    },
    {
      label: (
        <Link href="/about/Uniswap">
          <div className="DropdownA_nav_link">
            {t("兑换")}
          </div>
        </Link>
      ),
      key: "2",
    },
    {
      label: (
        <Link href="/about/Products">
          <div className="DropdownA_nav_link">
            {t("产品")}
          </div>
        </Link>
      ),
      key: "3",
    },
    {
      label: (
        <Link href="https://docs.qiancset.com/" target="_blank">
          <div className="DropdownA_nav_link">{t("文档")}</div>
        </Link>
      ),
      key: "4",
    },
    {
      label: <hr />,
      key: "5",
    },
    {
      label: <ModeThemes />,
      key: "6",
    },
    {
      label: <Locales />,
      key: "7",
    },
  ];
  ////

  return (
    <Dropdown

      menu={{
        items,
        style: {
          height: "50vh",
          width: "100vw",
          background: "var(--background-ant-color)",
          color: "var(--color-ant)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "left",
        },
        multiple: false,

      }}


    >
      <div onClick={(e) => e.preventDefault()}>

        <Space>
          <div className="Buttonant">
            <MenuUnfoldOutlined className="MenuUnfoldOutlined" />
          </div>
        </Space>

      </div>
    </Dropdown>
  );
};
