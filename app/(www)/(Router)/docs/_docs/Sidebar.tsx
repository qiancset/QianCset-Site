"use client";
import "./Sidebar.css";
import { usePathname } from "next/navigation";
import { useTranslation } from 'react-i18next';
import Link from "next/link";
import { useState } from "react";

import {
  Select, SelectItem, SelectSection, Accordion, AccordionItem, Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  NavbarContent,
  NavbarItem,
  Input,
} from "@nextui-org/react";
import { GoRepo,GoChevronLeft  } from "react-icons/go";


export default function Sidebar() {
  const pathname = usePathname();
  const { t } = useTranslation();
  const sections = [
    { id: 0, title: t("概述 📖"), href: "" },
    { id: 1, title: t("入门指南"), href: "/guide" },
    { id: 2, title: t("白皮书"), href: "/whitepaper" },
    { id: 3, title: t("加密货币"), href: "/Cryptocurrencies" },

    { id: 4, title: t("技术问题"), href: "/TechnicalProblem" },
    { id: 5, title: t("加入贡献"), href: "/JoinTheContribution" },
    { id: 6, title: t("赞助商"), href: "/zan-zhu-shang" },
    { id: 7, title: t("关于社区"), href: "/guan-yu-she-qu" },
    { id: 8, title: t("合作"), href: "/he-zuo" },

    { id: 9, title: t("Cookie政策"), href: "/cookie_zheng_ce" },
    { id: 10, title: t("使用条款"), href: "/shi-yong-tiao-kuan" },
    { id: 11, title: t("隐私政策"), href: "/yin-si-zheng-ce" },

    { id: 12, title: t("什么是跨链？"), href: "/Cross_chain" },
    { id: 13, title: t("什么是加密钱包？"), href: "/Crypto_Wallet" },
    { id: 14, title: t("去中心化自治组织"), href: "/DAO" },
    { id: 15, title: t("去中心化金融"), href: "/DeFi" },
    { id: 16, title: t("去中心化身份"), href: "/Digital_identity" },
    { id: 17, title: t("数字所有权"), href: "/Digital_Ownership" },
    { id: 18, title: t("什么是质押？"), href: "/Impawn" },
    { id: 19, title: t("二层网络"), href: "/Layer2" },
    { id: 20, title: t("非同质化代币"), href: "/NFT" },
    { id: 21, title: t("什么是自主托管？"), href: "/Self_Custody" },
  ];
  const sectionGroups = {
    group1: sections.slice(0, 4), // 索引 0 到 3  
    group2: sections.slice(4, 9), // 索引 4 到 8  
    group3: sections.slice(9, 12), // 索引 9 到 11  
    group4: sections.slice(12) // 索引 12 到 21  
  };

  const headingClasses = "";

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>

      <div className="Sidebar_nav">

        <div className="DocsNav">
          {/* 手机 */}
          <Navbar
            isBordered={false}//导航栏是否应该有底部边框。
            isBlurred={true}
            isMenuOpen={isMenuOpen}
            onMenuOpenChange={setIsMenuOpen}
            shouldHideOnScroll={true}
            height={'40px'}
            maxWidth={"2xl"}
            className="DocsNav"
            
            >
            {/* 手机文档导航菜单按钮 */}
            <NavbarContent className='sm:hidden' >
              <NavbarMenuToggle
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              />{t('文档导航栏')}
               <NavbarContent justify='end'><GoRepo  /></NavbarContent>
            </NavbarContent>

            <NavbarMenu className="DocsNav_NavbarMenu">
              <div>
                {sectionGroups.group1.map((section) => (
                  <div key={section.id}>
                    <Link className={`pc_link ${pathname === `/docs${section.href}` ? "active" : ""}`} href={`/docs${section.href}`} onClick={() => {
                      setIsMenuOpen(false);
                    }}>
                      {section.title}
                    </Link>
                  </div>
                ))}
              </div>


              <Accordion selectionMode="multiple" isCompact={true}>

                <AccordionItem key="1" aria-label="Accordion 1" title={t('服务')} indicator={<GoChevronLeft />}>
                  {sectionGroups.group2.map((section) => (
                    <div key={section.id}>
                      <Link className={`pc_link ${pathname === `/docs${section.href}` ? "active" : ""}`} href={`/docs${section.href}`} onClick={() => {
                        setIsMenuOpen(false);
                      }}>
                        {section.title}
                      </Link>
                    </div>
                  ))}
                </AccordionItem>

                <AccordionItem key="2" aria-label="Accordion 2" title={t('法律')} indicator={<GoChevronLeft />} >
                  {sectionGroups.group3.map((section) => (
                    <div key={section.id}>
                      <Link className={`pc_link ${pathname === `/docs${section.href}` ? "active" : ""}`} href={`/docs${section.href}`} onClick={() => {
                        setIsMenuOpen(false);
                      }}>
                        {section.title}
                      </Link>
                    </div>
                  ))}
                </AccordionItem>

                <AccordionItem key="3" aria-label="Accordion 3" title={t('学习文档')} indicator={<GoChevronLeft />}>
                  {sectionGroups.group4.map((section) => (
                    <div key={section.id}>
                      <Link className={`pc_link ${pathname === `/docs${section.href}` ? "active" : ""}`} href={`/docs${section.href}`} onClick={() => {
                        setIsMenuOpen(false);
                      }}>
                        {section.title}
                      </Link>
                    </div>
                  ))}
                </AccordionItem>

              </Accordion>

            </NavbarMenu>
          </Navbar>
        </div>

        {/*        <Select
          items={sections}
          radius={'none'}
          labelPlacement={'outside-left'}
          label={t('文档导航栏')}
          selectionMode={'single'}
          defaultSelectedKeys={[0]}
          className={`DocsNav `}
        >

          <SelectSection showDivider>
            {sectionGroups.group1.map((section) => (
              <SelectItem key={section.title} value={section.title}>
                <Link
                  href={`/docs${section.href}`} >
                  {section.title}
                </Link>
              </SelectItem>
            ))}
          </SelectSection>

          <SelectSection showDivider title={t('服务')} classNames={{ heading: headingClasses, }}>
            {sectionGroups.group2.map((section) => (
              <SelectItem key={section.id}>
                <Link
                  href={`/docs${section.href}`} >
                  {section.title}
                </Link>
              </SelectItem>
            ))}
          </SelectSection>

          <SelectSection showDivider title={t('法律')} classNames={{ heading: headingClasses, }}>
            {sectionGroups.group3.map((section) => (
              <SelectItem key={section.id}>
                <Link
                  href={`/docs${section.href}`} >
                  {section.title}
                </Link>
              </SelectItem>
            ))}
          </SelectSection>

          <SelectSection showDivider title={t('学习文档')} classNames={{ heading: headingClasses, }}>
            {sectionGroups.group3.map((section) => (
              <SelectItem key={section.id}>
                <Link
                  href={`/docs${section.href}`} >
                  {section.title}
                </Link>
              </SelectItem>
            ))}
          </SelectSection>

        </Select> */}



        <div className="pc">
          {sectionGroups.group1.map((section) => (
            <div key={section.id}>
              <Link className={`pc_link ${pathname === `/docs${section.href}` ? "active" : ""}`} href={`/docs${section.href}`}>
                {section.title}
              </Link>
            </div>
          ))}
          <Accordion selectionMode="multiple" isCompact={true}>




            <AccordionItem key="1" aria-label="Accordion 1" title={t('服务')} indicator={<GoChevronLeft />}>
              {sectionGroups.group2.map((section) => (
                <div key={section.id}>
                  <Link className={`pc_link ${pathname === `/docs${section.href}` ? "active" : ""}`} href={`/docs${section.href}`}>
                    {section.title}
                  </Link>
                </div>
              ))}
            </AccordionItem>

            <AccordionItem key="2" aria-label="Accordion 2" title={t('法律')} indicator={<GoChevronLeft />} >
              {sectionGroups.group3.map((section) => (
                <div key={section.id}>
                  <Link className={`pc_link ${pathname === `/docs${section.href}` ? "active" : ""}`} href={`/docs${section.href}`}>
                    {section.title}
                  </Link>
                </div>
              ))}
            </AccordionItem>

            <AccordionItem key="3" aria-label="Accordion 3" title={t('学习文档')} indicator={<GoChevronLeft />}>
              {sectionGroups.group4.map((section) => (
                <div key={section.id}>
                  <Link className={`pc_link ${pathname === `/docs${section.href}` ? "active" : ""}`} href={`/docs${section.href}`}>
                    {section.title}
                  </Link>
                </div>
              ))}
            </AccordionItem>

          </Accordion>
        </div>



      </div>

    </>
  )
};






