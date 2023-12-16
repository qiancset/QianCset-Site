"use client";
import "./ModeThemes.css";

import { useTheme } from "next-themes";
import { Button, Modal } from "antd";
import { useTranslation } from "react-i18next";
import { AiOutlineSkin,AiOutlineClose } from "react-icons/ai";
import { useState } from "react";

export default function ModeThemes({}) {
  const { setTheme, theme } = useTheme();
  const { t } = useTranslation();
  // 自定义主题名称
  const themeNames = {
    light: t('浅色主题'),
    dark: t('深色主题'),
    system: t('跟随系统'),
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
    <div className="ModeThemes">
      <Button
        type="text"
        onClick={showModal}
        className={theme === "light" ? "antisNight" : "antisNight"}
        title={t("切换浅色/暗黑模式")}
        icon={<AiOutlineSkin className="Moon_icon" />}
      ></Button>

      <Modal
        title={`${t('当前：')}${themeNames[theme]}`} 
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
        className="Modal"
      >
        <div
          onClick={() => setTheme("light")}
          className={theme === "light" ? "theme_button_active" : "theme_button"}
        >
          {t('浅色主题')}
        </div>
        <div
          onClick={() => setTheme("system")}
          className={theme === "system" ? "theme_button_active" : "theme_button"}
        >
          {t('跟随系统')}
        </div>
        <div
          onClick={() => setTheme("dark")}
          className={theme === "dark" ? "theme_button_active" : "theme_button"}
        >
          {t('深色主题')}
        </div>
      </Modal>
    </div>
  );
}
