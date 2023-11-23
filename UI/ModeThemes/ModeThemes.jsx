"use client";
import "./ModeThemes.css";

import { useTheme } from "next-themes";
import { Button, Modal, Radio } from "antd";
import { useTranslation } from "react-i18next";
import { AiOutlineSkin } from "react-icons/ai";
import { GoMoon, GoSun } from "react-icons/go";
import { useState } from "react";

export default function ModeThemes({}) {
  const { setTheme, theme } = useTheme();
  // 自定义主题名称
  const themeNames = {
    light: "浅色主题",
    dark: "深色主题",
    system: "跟随系统",
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

  const { t } = useTranslation();
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
        title={`当前主题选项：${themeNames[theme]}`} 
        style={{}}
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
        <div
          onClick={() => setTheme("light")}
          className={theme === "light" ? "theme_button_active" : "theme_button"}
        >
          浅色
        </div>
        <div
          onClick={() => setTheme("system")}
          className={theme === "system" ? "theme_button_active" : "theme_button"}
        >
          系统
        </div>
        <div
          onClick={() => setTheme("dark")}
          className={theme === "dark" ? "theme_button_active" : "theme_button"}
        >
          深色
        </div>
      </Modal>
    </div>
  );
}
