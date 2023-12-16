"use client";
import Image from "next/image";
import "./header.css";
import { motion } from "framer-motion";
import Link from "next/link";
import ModeThemes from "@/gui/ModeThemes/ModeThemes";
import Locales from "@/gui/LocalesButton/Locales";
import { usePathname } from "next/navigation";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { Dropdown, Space, ConfigProvider, Button, Drawer, Radio } from "antd";

export default function header() {
  const { t } = useTranslation();
  const pathname = usePathname();
  const [selectedItem, setSelectedItem] = useState(null);


  useEffect(() => {
    // 根据pathname设置默认选中的选项
    if (pathname === "/about") {
      setSelectedItem("1");
    } else if (pathname.startsWith("/business")) {
      setSelectedItem("2");
    } else if (pathname.startsWith("/docs")) {
      setSelectedItem("3");
    } else if (pathname.startsWith("/news")) {
      setSelectedItem("4");
    }
  }, [pathname]);
  const items = [
    {
      key: "1",
      label: (
        <Link
          href="/about"
          className={`header_linkA ${pathname === "/about" ? "active" : ""}`}
        >
          {t("关于")}
        </Link>
      ),
    },
    {
      key: "2",
      label: (
        <Link
          href="/business"
          className={`header_linkA ${
            pathname && pathname.startsWith("/business") ? "active" : ""
          }`}
        >
          {t("业务")}
        </Link>
      ),
    },
    {
      key: "3",
      label: (
        <Link
          href="/docs"
          className={`header_linkA ${
            pathname && pathname.startsWith("/docs") ? "active" : ""
          }`}
        >
          {t("文档")}
        </Link>
      ),
    },
    {
      key: "4",
      label: (
        <Link
          href="/news"
          className={`header_linkA ${
            pathname && pathname.startsWith("/news") ? "active" : ""
          }`}
        >
          {t("新闻")}
        </Link>
      ),
    },
  ];

  return (
    <>
      <div className="www_header">
        <div className="max_header">
          <div className="header_layout">
            <div className="header_left">
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Image
                  src="/favicon.ico"
                  width={40}
                  height={40}
                  className="Home_QianCset"
                  alt="Q"
                />
              </motion.div>
            </div>

            <div className="header_center">
              <div className="header_center_link">
                <Link
                  href="/about"
                  className={`header_link ${
                    pathname === "/about" ? "active" : ""
                  }`}
                >
                  {t("关于")}
                </Link>
                <Link
                  href="/business"
                  className={`header_link ${
                    pathname && pathname.startsWith("/business") ? "active" : ""
                  }`}
                >
                  {t("业务")}
                </Link>
                <Link
                  href="/docs"
                  className={`header_link ${
                    pathname && pathname.startsWith("/docs") ? "active" : ""
                  }`}
                >
                  {t("文档")}
                </Link>
                <Link
                  href="/news"
                  className={`header_link ${
                    pathname && pathname.startsWith("/news") ? "active" : ""
                  }`}
                >
                  {t("新闻")}
                </Link>
              </div>
            </div>

            <div className="header_right">
              <Locales />
              <ModeThemes />
              <ConfigProvider
                theme={{
                  components: {
                    Dropdown: {
                      colorPrimary: "#ea7411",
                      borderRadius: 5,
                      algorithm: true, // 启用算法
                    },
                  },
                }}
              >
                <Dropdown
                  className="Dropdown"
                  menu={{
                    items,
                    selectable: true,
                    selectedKeys: [selectedItem], // 设置选中的选项的key
                  }}
                  onSelect={(key) => setSelectedItem(key)} // 更新选中的选项的key
                >
                  <a onClick={(e) => e.preventDefault()}>
                    <Space>
                      <AiOutlineMenu className="AiOutlineMenu" />
                    </Space>
                  </a>
                </Dropdown>
              </ConfigProvider>


            </div>
          </div>
        </div>
      </div>
    </>
  );
}
