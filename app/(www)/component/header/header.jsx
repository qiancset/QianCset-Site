"use client";
import Image from "next/image";
import "./header.css";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { useTranslation } from "react-i18next";
import ModeThemes from "@/gui/ModeThemes/ModeThemes";
import Locales from "@/gui/LocalesButton/Locales";
import { motion } from "framer-motion";
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  NavbarContent,
  NavbarItem,
  Input,
  Button,
} from "@nextui-org/react";
import { GoSearch } from "react-icons/go";

export default function Headerwww() {
  const { t } = useTranslation();
  const pathname = usePathname();
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    // 根据pathname设置默认选中的选项
    if (pathname === "/about") {
      setSelectedItem("1");
    } else if (pathname.startsWith("/business")) {
      setSelectedItem("2");
    } else if (pathname.startsWith("https://docs.qiancset.com")) {
      setSelectedItem("3");
    } else if (pathname.startsWith("/news")) {
      setSelectedItem("4");
    }
  }, [pathname]);

  const menuItems = [];
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <Navbar
        isBordered
        isMenuOpen={isMenuOpen}
        onMenuOpenChange={setIsMenuOpen}
        maxWidth={"2xl"}>
        {/* 左 */}
        <NavbarContent>
          <NavbarBrand>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Image
                src='/favicon.ico'
                width={40}
                height={40}
                className='Home_QianCset'
                alt='Q'
              />
            </motion.div>
          </NavbarBrand>
        </NavbarContent>

        {/* 中 */}
        <NavbarContent className='hidden sm:flex gap-4' justify='start'>
          <NavbarItem>
            <Link
              href='/about'
              className={`header_link ${
                pathname === "/about" ? "active" : ""
              }`}>
              {t("关于")}
            </Link>
          </NavbarItem>

          <NavbarItem>
            <Link
              href='/business'
              className={`header_link ${
                pathname && pathname.startsWith("/business") ? "active" : ""
              }`}>
              {t("业务")}
            </Link>
          </NavbarItem>

          <NavbarItem>
            <Link
              href='/news'
              className={`header_link ${
                pathname && pathname.startsWith("/news") ? "active" : ""
              }`}>
              {t("新闻")}
            </Link>
          </NavbarItem>

          <NavbarItem>
            <Link
              href='https://docs.qiancset.com'
              target='_blank'
              className={`header_link ${
                pathname && pathname.startsWith("https://docs.qiancset.com")
                  ? "active"
                  : ""
              }`}>
              {t("文档")}
            </Link>
          </NavbarItem>
        </NavbarContent>

        {/* 右 */}
        <NavbarContent justify='end'>
          <NavbarContent className='hidden sm:flex gap-4' justify='end'>
            <Input
              classNames={{
                base: "max-w-full sm:max-w-[10rem] h-10",
                mainWrapper: "h-full",
                input: "text-small",
                inputWrapper:
                  "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
              }}
              placeholder={t("搜索")}
              size='sm'
              startContent={<GoSearch size={18} />}
              type='search'
            />
          </NavbarContent>

          <Locales />
          <ModeThemes />
        </NavbarContent>

        {/* 手机 */}
        <NavbarContent className='sm:hidden' justify='end'>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          />
        </NavbarContent>

        <NavbarMenu>
          {/* 搜索 */}
          <NavbarMenuItem>
            <Input
              classNames={{
                base: "max-w-full sm:max-w-[10rem] h-10",
                mainWrapper: "h-full",
                input: "text-small",
                inputWrapper:
                  "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
              }}
              placeholder={t("搜索")}
              size='sm'
              startContent={<GoSearch size={18} />}
              type='search'
            />
          </NavbarMenuItem>

          <NavbarMenuItem>
            <Link
              href='/about'
              onClick={() => {
                setIsMenuOpen(false);
              }}
              className={` header_link ${
                pathname === "/about" ? "active" : ""
              }`}>
              {t("关于")}
            </Link>
          </NavbarMenuItem>

          <NavbarMenuItem>
            <Link
              href='/business'
              onClick={() => {
                setIsMenuOpen(false);
              }}
              className={` header_link ${
                pathname && pathname.startsWith("/business") ? "active" : ""
              }`}>
              {t("业务")}
            </Link>
          </NavbarMenuItem>

          <NavbarMenuItem>
            <Link
              href='/news'
              onClick={() => {
                setIsMenuOpen(false);
              }}
              className={` header_link ${
                pathname && pathname.startsWith("/news") ? "active" : ""
              }`}>
              {t("新闻")}
            </Link>
          </NavbarMenuItem>

          <NavbarMenuItem>
            <Link
              href='https://docs.qiancset.com'
              target='_blank'
              onClick={() => {
                setIsMenuOpen(false);
              }}
              className={` header_link ${
                pathname && pathname.startsWith("https://docs.qiancset.com")
                  ? "active"
                  : ""
              }`}>
              {t("文档")}
            </Link>
          </NavbarMenuItem>
        </NavbarMenu>
      </Navbar>
    </>
  );
}
