/* eslint-disable @next/next/no-img-element */
"use client";

import { useTranslation } from "react-i18next";
import { Space, Dropdown, Divider } from "antd";
import { MenuUnfoldOutlined } from "@ant-design/icons";

import "./Header.css";
import MyNavLink from "./zujian/MyNavLink"; //封装 Link 组件

import Link from "next/link";

import Locales from "@/UI/LocalesButton/Locales";
import ModeThemes from "@/UI/ModeThemes/ModeThemes";

/* import Clerk_Header from "../Clerk/Clerk_Header"; */


export default function Header() {
  const { t } = useTranslation();

  return (
    <>
      <div className="header">

        <div className="max_header">


          <a className="logo" href="/about">
            <img src="favicon.ico" alt="header-Q" />
          </a>


          <nav className="nav_PC">{/* 电脑 */}
            <Space size="large" align="center">
              <div className="nav-bar">
                <MyNavLink href="/about">{t("关于")}</MyNavLink>

                <MyNavLink href="/News">{t("新闻")}</MyNavLink>

                <MyNavLink href="/Products">{t("产品")}</MyNavLink>

                <a href="https://docs.qiancset.com/" id="Wen" target="_blank">
                  <div className="nav_link">{t("文档")}</div>
                </a>
              </div>


            </Space>
          </nav>




          <div className="DropdownA">

            <div className="button_header">

              <div className="button_header_1"><Locales /></div>
              <div className="button_header_1"><ModeThemes /></div>

            </div>

            <DropdownA />  {/* 小于750px显示 下拉菜单 */}
          </div>


        </div>{/* max_header */}
      </div>
    </>
  );
}

/* 下拉菜单 */
const DropdownA = () => {
  const { t } = useTranslation();

  const items = [
    {
      label: (
        <MyNavLink href="/about">
          <div className="DropdownA_nav_link">
            {t("关于")}
          </div>
        </MyNavLink>

      ),
      key: "1",
    },
    {
      label: (
        <MyNavLink href="/News">
          <div className="DropdownA_nav_link">
            {t("新闻")}
          </div>
        </MyNavLink>
      ),
      key: "2",
    },
    {
      label: (
        <MyNavLink href="/Products">
          <div className="DropdownA_nav_link">
            {t("产品")}
          </div>
        </MyNavLink>
      ),
      key: "3",
    },
    {
      label: (
        <MyNavLink href="https://docs.qiancset.com" newTab>
          <div className="DropdownA_nav_link">{t("文档")}</div>
        </MyNavLink>
      ),
      key: "4",
    }

  ];
  ////

  return (
    <Dropdown
      trigger={['click']}
      menu={{
        items,
        style: {
          height: "100%",
          width: "100%",
          background: "var(--background-ant-color)",
          color: "var(--color-ant)",

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
