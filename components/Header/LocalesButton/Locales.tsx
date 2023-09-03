"use client";

import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Menu, Dropdown, Button } from "antd";
import { GlobalOutlined } from "@ant-design/icons";
import "./Locales.css";
function Locales() {
  const { i18n } = useTranslation();
  const [showMenu, setShowMenu] = useState(false);

  function handleLanguageChange(value) {
    i18n.changeLanguage(value);
    setShowMenu(false);
  }

  function handleMenuClick({ key }) {
    handleLanguageChange(key);
  }

  function toggleMenu() {
    setShowMenu(!showMenu);
  }

  const defaultLanguage = i18n.language;
  const menuItem = (
    <Menu
      onClick={handleMenuClick}
      selectable={true}
      selectedKeys={[defaultLanguage]}
    >
      <Menu.Item key="zh">中文</Menu.Item>
      <Menu.Item key="en">English</Menu.Item>
      <Menu.Item key="fr">Français</Menu.Item>
      <Menu.Item key="ko">한국어</Menu.Item>
    </Menu>
  );

  const currentLanguageText = i18n.language === "en" ? "English" : "中文";
  const styles = {
    color: "var(--color)",
  };

  return (
    <Dropdown
      overlay={menuItem}
      open={showMenu}
      onOpenChange={toggleMenu}
      trigger={["click"]}
      placement="bottomRight"
    >
      <div className="language-toggle">
        <Button
          type="text"
          icon={<GlobalOutlined />}
          style={styles}
          onClick={toggleMenu}
        >
          {currentLanguageText}
        </Button>
      </div>
    </Dropdown>
  );
}

export default Locales;
