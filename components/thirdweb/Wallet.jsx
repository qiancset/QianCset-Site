"use client";
import "./Wallet.css";
import { ConnectWallet } from "@thirdweb-dev/react";
import { useTranslation } from "react-i18next";
export default function Wallet() {
  const { t } = useTranslation();

  return (
    <>
      <ConnectWallet
        className="my-custom-class"
        btnTitle={t("连接钱包")}
        modalTitle="登录"
        auth={{
          loginOptional: false,
        }}
      />
    </>
  );
}
