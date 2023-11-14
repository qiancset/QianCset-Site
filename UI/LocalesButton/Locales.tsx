"use client";

import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Menu, Dropdown, Button } from "antd";

import "./Locales.css";
import { GoGlobe } from "react-icons/go";


export default function Locales({  }) {

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
/*       style={{
        height: "100%",
        width: "100%",
        background: "var(--background-color-antd)",
        color: "var(--color-antd)",
      }} */
    >
      <Menu.Item key="zh" className="Locales_text">中文</Menu.Item>
      <Menu.Item key="en" className="Locales_text">English</Menu.Item>
    </Menu>
  );


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
          icon={<GoGlobe />}
          style={styles}
          onClick={toggleMenu}
        />
      </div>
    </Dropdown>
  );
}


