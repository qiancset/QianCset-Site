"use client";
import "./ModeThemes.css";
import { useState,useEffect } from "react";

import { useTheme } from "next-themes";
import { Button } from "antd";
import { useTranslation } from "react-i18next";
import Sun from "./Sun";
import Moon from "./Moon";

export default function ModeThemes({})  {

  const { setTheme, theme } = useTheme();  

  
  const handleThemeChange = () => {  
    setTheme(theme === "light" ? "dark" : "light");  
  };  




  
  const { t } = useTranslation();
  return (
    <div className="ModeThemes">

<Button  
        type="text"  
        title={t("切换浅色/暗黑模式")}  
        className={theme === "light" ? "antisNight" : "antisNight"}  
        onClick={handleThemeChange}  
        icon={theme === "light" ? <Moon /> : <Sun />}  
      />  
      </div>
  );
};




