"use client";
import "./ModeThemes.css";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";

import { useTranslation } from "react-i18next";
import { AiOutlineSkin, AiOutlineClose } from "react-icons/ai";

export default function ModeThemes({}) {
  const { setTheme, theme } = useTheme();
  const { t } = useTranslation();

  const [selectedKeys, setSelectedKeys] = useState();
  // 使用 useEffect 监听主题的变化，并更新 selectedKeys
  useEffect(() => {
    setSelectedKeys(new Set([theme]));
  }, [theme]);
  return (
    <div>
      <Dropdown>
        <DropdownTrigger>
          <Button isIconOnly color="primary" variant="light">
            <AiOutlineSkin className='Moon_icon' />
          </Button>
        </DropdownTrigger>

        <DropdownMenu
          aria-label='Multiple selection example'
          variant='flat'
          disallowEmptySelection
          selectionMode='single'
          selectedKeys={selectedKeys}
          onSelectionChange={setTheme}>
            
          <DropdownItem key='light' 
          onClick={() => setTheme("light")} 
          className={theme === "light" ? "theme_button_active" : "theme_button"}>
            {t("浅色主题")}
          </DropdownItem>

          <DropdownItem key='system' 
          onClick={() => setTheme("system")} 
          className={theme === "system" ? "theme_button_active" : "theme_button"}>
            {t("跟随系统")}
          </DropdownItem>

          <DropdownItem key='dark' 
          onClick={() => setTheme("dark")} 
          className={theme === "dark" ? "theme_button_active" : "theme_button"}>
            {t("深色主题")}
          </DropdownItem>

        </DropdownMenu>
      </Dropdown>
    </div>
  );
}
