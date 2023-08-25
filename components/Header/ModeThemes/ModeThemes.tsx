"use client";
import "./ModeThemes.css";

import { useTheme } from "next-themes";
import { Button } from "antd";
import { useTranslation } from "react-i18next";
import Sun from "./Sun";
import Moon from "./Moon";

const ModeThemes = ({ isNight, toggleTheme }) => {
  const { setTheme, resolvedTheme } = useTheme();

  const handleToggleTheme = () => {
    toggleTheme(!isNight);
    setTheme(isNight ? "light" : "dark");
  };

  const { t } = useTranslation();
  return (
    <Button
      type="text"
      title={t("切换浅色/暗黑模式")}
      className={resolvedTheme === "dark" ? "antisNight" : "antisNight"}
      onClick={handleToggleTheme}
      icon={<span>{isNight ? <Sun /> : <Moon />}</span>}
    />
  );
};

export default ModeThemes;
