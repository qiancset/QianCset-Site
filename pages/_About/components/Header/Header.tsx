/* eslint-disable @next/next/no-img-element */
"use client";

import { useTranslation } from "react-i18next";
import { Space, Dropdown } from "antd";
import { AiOutlineMenuUnfold } from "react-icons/ai";

import "./Header.css";
import MyNavLink from "./zujian/MyNavLink"; //封装 Link 组件



import Locales from "@/UI/LocalesButton/Locales";
import ModeThemes from "@/UI/ModeThemes/ModeThemes";
import Link from "next/link";




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
                <MyNavLink href="/business">{t("业务")}</MyNavLink>
                <MyNavLink href="/news">{t("新闻")}</MyNavLink>
                <MyNavLink href="/products">{t("产品")}</MyNavLink>

                <Link href="https://docs.qiancset.com/" target="_blank">
                  <p className="nav_link">{t("文档")}</p>
                </Link>
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
          <p className="DropdownA_nav_link">
            {t("关于")}
          </p>
        </MyNavLink>

      ),
      key: "1",
    },
    {
      label: (
        <MyNavLink href="/business">
          <p className="DropdownA_nav_link">
            {t("业务")}
          </p>
        </MyNavLink>
      ),
      key: "2",
    },
    {
      label: (
        <MyNavLink href="/news">
          <p className="DropdownA_nav_link">
            {t("新闻")}
          </p>
        </MyNavLink>
      ),
      key: "3",
    },
    {
      label: (
        <MyNavLink href="/products">
          <p className="DropdownA_nav_link">
            {t("产品")}
          </p>
        </MyNavLink>
      ),
      key: "4",
    },
    {
      label: (
        <Link href="https://docs.qiancset.com/" target="_blank">
          <p className="DropdownA_nav_link">
            {t("文档")}
          </p>
        </Link>
      ),
      key: "5",
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
          background: "var(--background-color-antd)",
          color: "var(--color)",

        },
        multiple: false,

      }}


    >
      <div onClick={(e) => e.preventDefault()}>

        <Space>
          <div className="Buttonant">
            <AiOutlineMenuUnfold className="MenuUnfoldOutlined" />
          </div>
        </Space>

      </div>
    </Dropdown>
  );
};
