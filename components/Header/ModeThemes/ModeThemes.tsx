"use client";
import "./ModeThemes.css";
import { useState,useEffect } from "react";

import { useTheme } from "next-themes";
import { Button } from "antd";
import { useTranslation } from "react-i18next";
import Sun from "./Sun";
import Moon from "./Moon";

export default function ModeThemes()  {
  const [isNight, setIsNight] = useState(localStorage.getItem("theme") === "dark"); 
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => {  
    setTheme(localStorage.getItem("theme") || "light");  
  }, []);  

  const handleToggleTheme = () => {  
    setIsNight(!isNight); // 切换日夜模式
    setTheme(isNight ? "light" : "dark"); // 根据日夜模式设置主题  
    localStorage.setItem("theme", isNight ? "light" : "dark");  
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




