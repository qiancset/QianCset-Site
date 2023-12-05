"use client";
import Image from "next/image";
import "./Header.css";
import { motion } from "framer-motion";
import Link from "next/link";
import ModeThemes from "@/UI/ModeThemes/ModeThemes";
import Locales from "@/UI/LocalesButton/Locales";
import { usePathname } from "next/navigation";
import { useTranslation } from 'react-i18next';
import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";


export default function Header() {
  const { t } = useTranslation();
  const pathname = usePathname();


  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const toggleDropdown = () => {
    setDropdownOpen((prevOpen) => !prevOpen);
  };
  return (
    <>
      <div className="Header">
        <div className="max_Header">
          <div className="Header_layout">

            <div className="Header_left">
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Image
                  src="/favicon.ico"
                  width={40}
                  height={40}
                  className="Home_QianCset"
                  alt="Q"
                />
              </motion.div>

              <div className="Header_center_link">
                <Link href="about"
                  className={`Header_link ${pathname === '/about' ? 'active' : ''}`}>
                  {t('关于')}
                </Link>
                <Link href="business"
                  className={`Header_link ${pathname && pathname.startsWith('/business') ? 'active' : ''}`}>
                  {t('业务')}
                </Link>
                <Link href="docs"
                  className={`Header_link ${pathname && pathname.startsWith('/docs') ? 'active' : ''}`}>
                  {t('文档')}
                </Link>
                <Link href="news" className={`Header_link ${pathname && pathname.startsWith('/news') ? 'active' : ''}`}>
                  {t('新闻')}
                </Link>
              </div>

            </div>


            <div className="Header_center">
              <Locales />
              <ModeThemes />
            </div>

            <div className="Header_right">

              <div className="Header_center_linkA" onClick={toggleDropdown}>
                <AiOutlineMenu className="AiOutlineMenu"/>
                <div className={`Header_dropdownA ${isDropdownOpen ? 'open' : ''}`}>
                  <Link href="about" className={`Header_linkA ${pathname === '/about' ? 'active' : ''}`}>
                    {t('关于')}
                  </Link>
                  <Link href="business" className={`Header_linkA ${pathname && pathname.startsWith('/business') ? 'active' : ''}`}>
                    {t('业务')}
                  </Link>
                  <Link href="docs" className={`Header_linkA ${pathname && pathname.startsWith('/docs') ? 'active' : ''}`}>
                    {t('文档')}
                  </Link>
                  <Link href="news" className={`Header_linkA ${pathname && pathname.startsWith('/news') ? 'active' : ''}`}>
                    {t('新闻')}
                  </Link>
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>
    </>
  );
}
