


import { useTranslation } from "react-i18next";
import {  Space, Dropdown } from "antd";
import { MenuUnfoldOutlined } from "@ant-design/icons";
import { GoLinkExternal } from 'react-icons/go';
import "./Header.css";
import MyNavLink from "./zujian/MyNavLink"; //封装 Link 组件

import React, { useState,useEffect  } from "react";


import Locales from "./Button/Locales";
import ModeThemes from './Button/ModeThemes'
/* import Web3ModalA from "../Web3Modal/Web3Modal"; */



export default function Header() {
  const { t } = useTranslation();

  return (
    <>
      <header>
        {/* 小于450px显示 下拉菜单 */}

        <DropdownA />

        {/* 电脑 */}
        <a className="logo" href="/">
          <img src={"/Q.png"} alt="Q.png" />
        </a>

        <nav>
          <Space size="large" align="center">
            <ul className="nav-bar">
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
                
                <a href="https://docs.qlweb3.top/" id="Wen" >
                  <div className="nav-link" >
                    {t("文档")}<GoLinkExternal />
                    </div>
                </a>
              </li>
            </ul>
            {/* 日夜模式按钮 */}
            <Space direction="vertical">
              <div className="Night">
                <ModeThemes/>
              </div>
            </Space>

            {/* 国际化按钮 */}
            <div className="Night">
              <Locales />
            </div>
          </Space>
        </nav>

        {/* 连接钱包按钮 */}
        <nav className="Web3ModalA">
        {/*   <Web3ModalA /> */}
        
        </nav>
      </header>


    </>
  );
}



/* 下拉菜单 */
const DropdownA = () => {
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
        <MyNavLink href="https://docs.qlweb3.top/" id="Wen" target="_blank">
          {t("文档")}<GoLinkExternal />
        </MyNavLink>
      ),
      key: "4",
    },
    {
      label: <ModeThemes/>,
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


