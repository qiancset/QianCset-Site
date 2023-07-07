"use client";
import "./Wallet.css";
import { ConnectWallet } from "@thirdweb-dev/react";
import { useTranslation } from "react-i18next";
import { useTheme } from 'next-themes';
export default function Wallet() {
  const { t } = useTranslation();
  const { resolvedTheme } = useTheme();
  return (
    <>
      <ConnectWallet
        className="my-custom-class"
        theme={resolvedTheme === "light" ? "light" : "dark"}
        btnTitle={t("连接钱包")}
        modalTitle={t("登录")}
        auth={{
          loginOptional: false,
        }}
/*         detailsBtn={() => {
          return <button> 断开连接 </button>;
        }} */
      />
    </>
  );
}
