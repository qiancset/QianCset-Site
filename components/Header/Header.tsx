/* eslint-disable @next/next/no-img-element */
"use client";

import { useTranslation } from "react-i18next";
import { Space, Dropdown } from "antd";
import { MenuUnfoldOutlined } from "@ant-design/icons";

import "./Header.css";
import MyNavLink from "./zujian/MyNavLink"; //封装 Link 组件

import React, { useState, useEffect } from "react";

import Locales from "./LocalesButton/Locales";
import ModeThemes from "./ModeThemes/ModeThemes";

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

        <nav className="nav_PC">
          <Space size="large" align="center">
            <div className="nav-bar">
           
                <MyNavLink href="/" >
                  {t("首页")}
                </MyNavLink>
            
                <MyNavLink href="/Uniswap">
                  {t("兑换")}
                </MyNavLink>
             
                <MyNavLink href="/Products" >
                  {t("产品")}
                </MyNavLink>
              
            
                <a href="https://docs.qiancset.com/" id="Wen" target="_blank">
                  <div className="nav_link">
                    {t("文档")}
                   
                  </div>
                </a>
             
            </div>

            {/* 日夜模式按钮 */}
      
                <ModeThemes isNight={isNight} toggleTheme={toggleTheme} />
         

            {/* 国际化按钮 */}

              <Locales />





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
        <MyNavLink href="/">
          {t("首页")}
        </MyNavLink>
      ),
      key: "1",
    },
    {
      label: (
        <MyNavLink href="/Uniswap" >
          {t("兑换")}
        </MyNavLink>
      ),
      key: "2",
    },
    {
      label: (
        <MyNavLink href="/Products" >
          {t("产品")}
        </MyNavLink>
      ),
      key: "3",
    },
    {
      label: (
        <a href="https://docs.qiancset.com/" id="Wen" target="_blank">
          <div className="nav_link">
            {t("文档")}
           
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



  return (
    <Dropdown
      menu={{
        items,
        style:{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          background: "var(--background-ant-color)",
          color: "var(--color-ant)",
        },
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
