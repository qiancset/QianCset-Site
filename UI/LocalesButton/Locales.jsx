"use client";

import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Button, Modal } from "antd";
import { AiOutlineTranslation,AiOutlineClose } from "react-icons/ai";
import "./Locales.css";

export default function Locales() {
  const { t, i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language);

  const handleLanguageChange = (lng) => {
    i18n.changeLanguage(lng);
    setCurrentLanguage(lng);
  };
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
      <div className="language-toggle">
        <Button
          type="text"
          onClick={showModal}
          icon={<AiOutlineTranslation />}
        />
      </div>
      <Modal
        title={t("选择语言")}
        closeIcon={<AiOutlineClose className="icon"/>}
        focusTriggerAfterClose={false}
        mask={true}
        zIndex={1000}
        open={isModalOpen}
        footer={null}
        onOk={handleOk} //点击确定回调
        okText={"确定"} //确定按钮文字
        confirmLoading={false} //确定按钮 loading
        onCancel={handleCancel} //点击遮罩层或右上角叉或取消按钮的回调
        cancelText={"取消"} //取消按钮文字
      >
        <div>
          {languageOptions.map((option) => (
            <div
              key={option.code}
              onClick={() => handleLanguageChange(option.code)}
              className={currentLanguage === option.code ? "theme_button_active" : "theme_button"}
            >
              {option.label}
            </div>
          ))}
        </div>
      </Modal>
    </>
  );
}

const languageOptions = [
  {
    code: "zhCN",
    label: "简体中文",
  },
  {
    code: "zhTW",
    label: "繁体中文",
  },
  {
    code: "en",
    label: "English",
  },
  {
    code: "fr",
    label: "Français",
  },
  {
    code: "ko",
    label: "한국어",
  },
  {
    code: "ja",
    label: "日本語",
  },
  {
    code: "ar",
    label: "بالعربية",
  },
  {
    code: "bt",
    label: "Português",
  },
];
