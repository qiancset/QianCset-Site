"use client"
import { useTheme } from 'next-themes';
import { useTranslation } from "react-i18next";
import { Web3Button, Web3NetworkSwitch } from "@web3modal/react";


export default function Web3ModalA() {
  const { theme } = useTheme();
  const { t } = useTranslation();
  
  return (
    <>
 
      <div style={{ display: "flex", alignItems: "center" }}>

        <div className="web3-network-switch">
          <Web3NetworkSwitch />{/* 下于450px时隐藏 Web3NetworkSwitch 组件 */}
        </div>

        <Web3Button
          network="mainnet"
          theme={theme === 'dark' ? 'dark' : 'light'}
          providerOptions={{}}
          onClick={() => console.log("Connect!")}
          label={t("连接钱包")}
        />

      </div>
   



</>
  )
}
     
