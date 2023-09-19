"use client";
import "./ModeThemes.css";
import { useState,useEffect } from "react";

import { useTheme } from "next-themes";
import { Button } from "antd";
import { useTranslation } from "react-i18next";
import Sun from "./Sun";
import Moon from "./Moon";

export default function ModeThemes()  {

  const { setTheme, resolvedTheme } = useTheme();  
  
  const [isNight, setIsNight] = useState(false); 



useEffect(() => {  
  if (typeof window !== 'undefined') { // 检查是否在服务器端  
    const theme = localStorage.getItem("theme");  
    setIsNight(theme === "dark");  
    setTheme(theme || "light");  
  }  
}, []); 

const handleToggleTheme = () => {  
  setIsNight(!isNight); // 切换日夜模式  
  setTheme(isNight ? "light" : "dark"); // 根据日夜模式设置主题  
  if (typeof window !== 'undefined') { // 检查是否在服务器端  
    localStorage.setItem("theme", isNight ? "light" : "dark");  
  }  
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




