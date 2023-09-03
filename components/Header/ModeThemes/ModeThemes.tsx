"use client";
import "./ModeThemes.css";

import { useTheme } from "next-themes";
import { Button } from "antd";
import { useTranslation } from "react-i18next";
import Sun from "./Sun";
import Moon from "./Moon";

const ModeThemes = ({ isNight, toggleTheme }) => {
  const { setTheme, resolvedTheme,theme } = useTheme();

  const handleToggleTheme = () => {
    toggleTheme(!isNight);
    setTheme(isNight ? "light" : "dark");
  };


  
  const { t } = useTranslation();
  return (
    <div className="ModeThemes">

    <Button
      type="text"
      title={t("切换浅色/暗黑模式")}
      className={resolvedTheme === "light" ? "antisNight" : "antisNight"}
      onClick={handleToggleTheme}
      icon={isNight ? <Sun /> : <Moon />}
      />
      </div>
  );
};

export default ModeThemes;
