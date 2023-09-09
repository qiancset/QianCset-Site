/* eslint-disable @next/next/no-img-element */
"use client";
import { usePathname } from "next/navigation";
import { useTranslation } from "react-i18next";
import { Space, Dropdown, Button } from "antd";
import { MenuUnfoldOutlined } from "@ant-design/icons";

import "./Header.css";
import MyNavLink from "./zujian/MyNavLink"; //封装 Link 组件
import Link from "next/link";
import React, { useState, useEffect } from "react";

import Locales from "./LocalesButton/Locales";
import ModeThemes from "./ModeThemes/ModeThemes";

import Rainbowkit from "../Wallet/Rainbowkit";

export default function Header() {
  const { t } = useTranslation();

  return (
    <>
      <header>
        {/* 小于450px显示 下拉菜单 */}

        {/* 电脑 */}
        <a className="logo" href="/">
          <img src="favicon.ico" alt="header-Q" />
        </a>

        <nav className="nav_PC">
          <Space size="large" align="center">
            <div className="nav-bar">
              <MyNavLink href="/">{t("首页")}</MyNavLink>

              <MyNavLink href="/Uniswap">{t("兑换")}</MyNavLink>

              <MyNavLink href="/Products">{t("产品")}</MyNavLink>

              <a href="https://docs.qiancset.com/" id="Wen" target="_blank">
                <div className="nav_link">{t("文档")}</div>
              </a>
            </div>

            {/* 日夜模式按钮 */}

            <ModeThemes />

            {/* 国际化按钮 */}

            <Locales />
          </Space>
        </nav>

        {/* 连接钱包按钮 */}
        <nav className="Web3Modal">
          <Rainbowkit />
        </nav>
        <DropdownA />
      </header>
    </>
  );
}

/* 下拉菜单 */
const DropdownA = () => {
  const { t } = useTranslation();


  const [open, setOpen] = useState(true);

  const handleOpenChange = (flag) => {
    setOpen(flag);
  };
  const items = [
    {
      label: (
        <Link href="/">
          <div className="DropdownA_nav_link">
            {t("首页")}
          </div>
        </Link>
      ),
      key: "1",
    },
    {
      label: (
        <Link href="/Uniswap">
          <div className="DropdownA_nav_link">
            {t("兑换")}
          </div>
        </Link>
      ),
      key: "2",
    },
    {
      label: (
        <Link href="/Products">
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
      label:<hr/>,
      key:"5",
    },
    {
      label: <div><ModeThemes  /></div>,
      key: "6",
    },
    {
      label: <div><Locales /></div>,
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
      onOpenChange={handleOpenChange}

    >
      <div onClick={() => setOpen(!open)}>
        <Space>
          <div className="Buttonant">
            <MenuUnfoldOutlined className="MenuUnfoldOutlined" />
          </div>
        </Space>
      </div>
    </Dropdown>
  );
};
