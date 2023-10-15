
"use client";
import "./ModeThemes.css";


import { useTheme } from "next-themes";
import { Button } from "antd";
import { useTranslation } from "react-i18next";

import { GoMoon, GoSun } from "react-icons/go";


export default function ModeThemes({})  {

  const { setTheme, theme } = useTheme();  

  
  const handleThemeChange = () => {  
    setTheme(theme === "light" ? "dark" : "light");  
  };  




  
  const { t } = useTranslation();
  return (
<>
    <div className="ModeThemes">

<Button  
        type="text"  
        title={t("切换浅色/暗黑模式")}  
        className={theme === "light" ? "antisNight" : "antisNight"}  
        onClick={handleThemeChange}  
        icon={theme === "dark" ? <GoSun className="Sun_icon"/> : <GoMoon className="Moon_icon"/>}  
      />  
      </div>
      </>
  );
};




