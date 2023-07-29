"use client";
import "@uniswap/widgets/fonts.css";
import "./Uniswap.css";
import { SwapWidget, darkTheme } from "@uniswap/widgets";
import { useTranslation } from "react-i18next";
import { useTheme } from "next-themes";
import { provider } from "../../_Providers/Web3ModalP";

export default function Uniswap() {
  const { t } = useTranslation();
  const { resolvedTheme } = useTheme();

  const Provider = provider;

  return (
    <div className="Uniswap1">
      <div className="Uniswap">
        <SwapWidget
          convenienceFee={1} // 指定便利费为 1 个基点
          convenienceFeeRecipient="0xcd284038f2E68c6A43b04695f84377f38686eE56" //便利费收款方
          width={"100%"}
          locale={t("zh-CN")} //指定小组件界面的显式区域设置为中文
          theme={resolvedTheme === "dark" ? darkTheme : customTheme} //覆盖样式属性
          brandedFooter={false} //启用小部件底部的“由 Uniswap 提供支持”页脚。
          hideConnectionUI={true} //隐藏小部件的内置钱包连接UI,'true'
          provider={Provider}
          //onConnectWalletClick={() => open({ route: 'ConnectWallet' })}
          jsonRpcUrlMap={jsonRpcUrlMap} //Api节点
          defaultChainId={1} //指定要提示用户将其钱包连接到哪个链ID
          //tokenList={UNISWAP_TOKEN_LIST}          //令牌列表
          defaultInputTokenAddress="NATIVE" //本机令牌的特殊地址
          defaultInputAmount={1} //默认输入设置为 1 代币
          defaultOutputTokenAddress="0xdAC17F958D2ee523a2206206994597C13D831ec7" //默认输出令牌设置为 USDT
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
  1: ["https://eth-mainnet.g.alchemy.com/v2/mlFEUUHXOMfXKOL0zV12xXYfb8LUjnMf"],
  42161: [
    "https://arb-mainnet.g.alchemy.com/v2/4ZFkWe3RAFIPggBGs_QF22l_CkPQIwv0",
  ],
  10: ["https://opt-mainnet.g.alchemy.com/v2/mWJ8qFvl-bijKQGL85sSLK54Audbbt_o"],
  137: [
    "https://polygon-mainnet.g.alchemy.com/v2/KYaEAzPvehDQOFBO5tAjIX2_FRwoH1oD",
  ],
};
