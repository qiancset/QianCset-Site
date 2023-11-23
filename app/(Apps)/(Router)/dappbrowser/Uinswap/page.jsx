"use client";


import "@uniswap/widgets/fonts.css";
import { SwapWidget, darkTheme } from "@uniswap/widgets";
import { useTranslation } from "react-i18next";
import { useTheme } from "next-themes";

import { useConnectModal } from "@rainbow-me/rainbowkit";


export default function Uniswap() {
  const { t } = useTranslation();
  const { resolvedTheme } = useTheme();
const Theme = resolvedTheme === "dark" ? darkTheme : customTheme
  const { openConnectModal } = useConnectModal(); // 添加这行来获取 openConnectModal 函数



  return (
    <div className="Uniswap1">



      <div className="Uniswap">
        <SwapWidget
          convenienceFee={1} // 指定便利费为 1 个基点
          convenienceFeeRecipient="0xcd284038f2E68c6A43b04695f84377f38686eE56" //便利费收款方
          width={"100%"}
          locale={t("zh-CN")} //指定小组件界面的显式区域设置为中文
          theme={Theme} //覆盖样式属性
          brandedFooter={false} //启用小部件底部的“由 Uniswap 提供支持”页脚。
          hideConnectionUI={true} //隐藏小部件的内置钱包连接UI,'true'

          onConnectWalletClick={openConnectModal}
          jsonRpcUrlMap={jsonRpcUrlMap} //Api节点
        //tokenList={UNISWAP_TOKEN_LIST}          //令牌列表
        //defaultInputTokenAddress="NATIVE" //本机令牌的特殊地址
        //defaultInputAmount={1} //默认输入设置为 1 代币
        //defaultOutputTokenAddress="0xdAC17F958D2ee523a2206206994597C13D831ec7" //默认输出令牌设置为 USDT
        />
      </div>
    </div>
  );
}

const customTheme = {
  interactive: "#ea7411",
  accent: "#ea7411",
  borderRadius: 0,
};
const jsonRpcUrlMap = {
  1: ["https://mainnet.infura.io/v3/9a04612ffbfd4f82aee059c008a573ea"],
  /*   42161: [
      "https://arb-mainnet.g.alchemy.com/v2/oXLd4WF9YidqPZD9UIZcuMQd_Naik383",
    ],
    10: ["https://opt-mainnet.g.alchemy.com/v2/rcoFwvDV9bgw30NoddEZ4w5ClXunx1fU"],
    137: [
      "https://polygon-mainnet.g.alchemy.com/v2/wJqXNtoc3TiNcEO_Ny7yNaKSN08Hjuhc",
    ], */
};
