/* eslint-disable @next/next/no-img-element */
"use client";

import { useTranslation } from "react-i18next";
import { Space, Dropdown } from "antd";
import { MenuUnfoldOutlined } from "@ant-design/icons";
import { GoLinkExternal } from "react-icons/go";
import "./Header.css";
import MyNavLink from "./zujian/MyNavLink"; //封装 Link 组件

import React, { useState, useEffect } from "react";

import Locales from "./LocalesButton/Locales";
import ModeThemes from "./ModeThemes/ModeThemes";
import AuthComponent from '@/components/AuthComponent'
import Rainbowkit from "../Wallet/Rainbowkit";

export default function Header() {
  const [isNight, setIsNight] = useState(false);

  const toggleTheme = (isNight) => {
    setIsNight(isNight);
  };

  const { t } = useTranslation();

  return (
    <>
      <header>
        {/* 小于450px显示 下拉菜单 */}

        <DropdownA isNight={isNight} toggleTheme={toggleTheme} />

        {/* 电脑 */}
        <a className="logo" href="/">
          <img src={"/icon/Q.png"} alt="header-Q" />
        </a>

        <nav>
          <Space size="large" align="center">
            <div className="nav-bar">
              <li>
                <MyNavLink href="/" id="Home">
                  {t("首页")}
                </MyNavLink>
              </li>
              <li>
                <MyNavLink href="/Uniswap" id="Uniswap">
                  {t("兑换")}
                </MyNavLink>
              </li>
              <li>
                <MyNavLink href="/Vv" id="Vv">
                  {t("产品")}
                </MyNavLink>
              </li>
              <li>
                <a href="https://docs.qiancset.com/" id="Wen" target="_blank">
                  <div className="nav-link">
                    {t("文档")}
                    <GoLinkExternal />
                  </div>
                </a>
              </li>
            </div>

            {/* 日夜模式按钮 */}
            <Space direction="vertical">
              <div className="Night">
                <ModeThemes isNight={isNight} toggleTheme={toggleTheme} />
              </div>
            </Space>

            {/* 国际化按钮 */}
            <div className="Night">
              <Locales />
            </div>

            <AuthComponent/>


          </Space>
        </nav>

        {/* 连接钱包按钮 */}
        <nav className="Web3Modal">

          <Rainbowkit />
        </nav>
      </header>
    </>
  );
}

/* 下拉菜单 */
const DropdownA = ({ isNight, toggleTheme }) => {
  const { t } = useTranslation();

  const [open, setOpen] = useState(false);
  const handleMenuClick = (e) => {
    if (e.key === "3") {
      setOpen(false);
    }
  };
  const handleOpenChange = (flag) => {
    setOpen(flag);
  };
  const items = [
    {
      label: (
        <MyNavLink href="/" id="Home">
          {t("首页")}
        </MyNavLink>
      ),
      key: "1",
    },
    {
      label: (
        <MyNavLink href="/Uniswap" id="Uniswap">
          {t("兑换")}
        </MyNavLink>
      ),
      key: "2",
    },
    {
      label: (
        <MyNavLink href="/Vv" id="Vv">
          {t("产品")}
        </MyNavLink>
      ),
      key: "3",
    },
    {
      label: (
        <a href="https://docs.qiancset.com/" id="Wen" target="_blank">
          <div className="nav-link">
            {t("文档")}
            <GoLinkExternal />
          </div>
        </a>
      ),
      key: "4",
    },
    {
      label: <ModeThemes isNight={isNight} toggleTheme={toggleTheme} />,
      key: "5",
    },
    {
      label: <Locales />,
      key: "6",
    },
  ];
  ////

  const menuStyle = {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    background: "var(--background-ant-color)",
    color: "var(--color-ant)",
  };

  return (
    <Dropdown
      menu={{
        items,
        style: menuStyle,
        onClick: handleMenuClick,
      }}
      autoAdjustOverflow={true}
      onOpenChange={handleOpenChange}
      open={open}
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
