"use client";
import "./ModeThemes.css";

import { useTheme } from "next-themes";
import { Button } from "antd";
import { useTranslation } from "react-i18next";
import Sun from "./Sun";
import Moon from "./Moon";

const ModeThemes = () => {
  const {theme, setTheme} = useTheme();

  const handleThemeChange = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const { t } = useTranslation();
  return (
    <>
    
    <Button
      type="text"
      title={t("切换浅色/暗黑模式")}
      className="antisNight"
      onClick={handleThemeChange}
      icon={theme === "dark" ? <Sun /> : <Moon />}
    />

    </>
  );
};

export default ModeThemes;