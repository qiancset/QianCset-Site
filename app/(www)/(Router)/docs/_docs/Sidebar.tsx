"use client";
import "./Sidebar.css";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
import { Modal } from "antd";
import { AiFillCaretRight, AiFillCaretLeft, AiOutlineClose } from "react-icons/ai";
import { useTranslation } from 'react-i18next';
export default function Sidebar() {
  const pathname = usePathname();
  const { t } = useTranslation();

  const sections = [

    { id: 0, title: t('概述 📖'), href: "" },
    { id: 1, title: t('入门指南'), href: "/guide" },
    { id: 2, title: t('白皮书'), href: "/whitepaper" },
    { id: 3, title: t('加密货币'), href: "/Cryptocurrencies" },
  
    { id: 4, title: t('技术问题'), href: "/TechnicalProblem" },
    { id: 5, title: t('加入贡献'), href: "/JoinTheContribution" },
    { id: 6, title: t('赞助商'), href: "/zan-zhu-shang" },
    { id: 7, title: t('关于社区'), href: "/guan-yu-she-qu" },
    { id: 8, title: t('合作'), href: "/he-zuo" },
  
    { id: 9, title: t('Cookie政策'), href: "/cookie_zheng_ce" },
    { id: 10, title: t('使用条款'), href: "/shi-yong-tiao-kuan" },
    { id: 11, title: t('隐私政策'), href: "/yin-si-zheng-ce" },
  
  
    { id: 12, title: t('什么是跨链？'), href: "/Cross_chain" },
    { id: 13, title: t('什么是加密钱包？'), href: "/Crypto_Wallet" },
    { id: 14, title: t('去中心化自治组织'), href: "/DAO" },
    { id: 15, title: t('去中心化金融'), href: "/DeFi" },
    { id: 16, title: t('去中心化身份'), href: "/Digital_identity" },
    { id: 17, title: t('数字所有权'), href: "/Digital_Ownership" },
    { id: 18, title: t('什么是质押？'), href: "/Impawn" },
    { id: 19, title: t('二层网络'), href: "/Layer2" },
    { id: 20, title: t('非同质化代币'), href: "/NFT" },
    { id: 21, title: t('什么是自主托管？'), href: "/Self_Custody" },
  
  ];
  
  const sectionGroups = {
    group1: sections.slice(0, 4), // 索引 0 到 3  
    group2: sections.slice(4, 9), // 索引 4 到 8  
    group3: sections.slice(9, 12), // 索引 9 到 11  
    group4: sections.slice(12) // 索引 12 到 21  
  };

  const [selectedSectionTitle, setSelectedSectionTitle] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };


  return (
    <>

      <div className="Sidebar_nav">



        <div onClick={showModal} className="mobile">
          <AiFillCaretRight className="AiOutlineMenuUnfold" />
          <div> {selectedSectionTitle || t('文档导航栏')}  </div>
          <AiFillCaretLeft className="AiOutlineMenuUnfold" />
        </div>
        <Modal
          title={t('文档导航栏')}
          closeIcon={<AiOutlineClose className="icon" />}

          open={isModalOpen}
          centered={true}
          footer={null}
          onOk={handleOk} //点击确定回调
          okText={"确定"} //确定按钮文字
          confirmLoading={false} //确定按钮 loading
          onCancel={handleCancel} //点击遮罩层或右上角叉或取消按钮的回调
          cancelText={"取消"} //取消按钮文字
        >
          <div className="Modal_children">

            {sectionGroups.group1.map((section) => (
              <div key={section.id}>
                <Link
                  className={`pc_link ${pathname === `/docs${section.href}` ? "active" : ""}`}
                  href={`/docs${section.href}`}
                  onClick={() => { handleCancel(); setSelectedSectionTitle(section.title); }}  >
                  {section.title}
                </Link>
              </div>
            ))}

            <div className="group-title">{t('服务')}</div>
            {sectionGroups.group2.map((section) => (
              <div key={section.id}>
                <Link
                  className={`pc_link ${pathname === `/docs${section.href}` ? "active" : ""}`}
                  href={`/docs${section.href}`}
                  onClick={() => { handleCancel(); setSelectedSectionTitle(section.title); }}  >
                  {section.title}
                </Link>
              </div>
            ))}

            <div className="group-title">{t('法律')}</div>
            {sectionGroups.group3.map((section) => (
              <div key={section.id}>
                <Link
                  className={`pc_link ${pathname === `/docs${section.href}` ? "active" : ""}`}
                  href={`/docs${section.href}`}
                  onClick={() => { handleCancel(); setSelectedSectionTitle(section.title); }}  >
                  {section.title}
                </Link>
              </div>
            ))}

            <div className="group-title">{t('学习文档')}</div>
            {sectionGroups.group4.map((section) => (
              <div key={section.id}>
                <Link
                  className={`pc_link ${pathname === `/docs${section.href}` ? "active" : ""}`}
                  href={`/docs${section.href}`}
                  onClick={() => { handleCancel(); setSelectedSectionTitle(section.title); }}  >
                  {section.title}
                </Link>
              </div>
            ))}
          </div>

        </Modal>

        <div className="pc">

          {sectionGroups.group1.map((section) => (
            <div key={section.id}>
              <Link className={`pc_link ${pathname === `/docs${section.href}` ? "active" : ""}`} href={`/docs${section.href}`}>
                {section.title}
              </Link>
            </div>
          ))}

          <div className="group-title">{t('服务')}</div>
          {sectionGroups.group2.map((section) => (
            <div key={section.id}>
              <Link className={`pc_link ${pathname === `/docs${section.href}` ? "active" : ""}`} href={`/docs${section.href}`}>
                {section.title}
              </Link>
            </div>
          ))}

          <div className="group-title">{t('法律')}</div>
          {sectionGroups.group3.map((section) => (
            <div key={section.id}>
              <Link className={`pc_link ${pathname === `/docs${section.href}` ? "active" : ""}`} href={`/docs${section.href}`}>
                {section.title}
              </Link>
            </div>
          ))}

          <div className="group-title">{t('学习文档')}</div>
          {sectionGroups.group4.map((section) => (
            <div key={section.id}>
              <Link className={`pc_link ${pathname === `/docs${section.href}` ? "active" : ""}`} href={`/docs${section.href}`}>
                {section.title}
              </Link>
            </div>
          ))}

        </div>



      </div>

    </>
  )
};






