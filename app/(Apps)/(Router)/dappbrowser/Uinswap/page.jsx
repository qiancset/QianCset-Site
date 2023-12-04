"use client";

import { SwapWidget, darkTheme } from "@uniswap/widgets";
import { useTranslation } from "react-i18next";
import { useTheme } from "next-themes";

import { useConnectModal } from "@rainbow-me/rainbowkit";

export default function Uniswap() {
  const { t } = useTranslation();
  const { resolvedTheme } = useTheme();
  const Theme = resolvedTheme === "dark" ? darkTheme : customTheme;
  const { openConnectModal } = useConnectModal(); // 添加这行来获取 openConnectModal 函数

  return (
    <div className="Uniswap_page">
      <SwapWidget
        convenienceFee={100} // 指定便利费为 1 个基点（%）
        convenienceFeeRecipient={process.env.ACCOUNT} 
        width={360}
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
  );
}

const customTheme = {
  interactive: "#ea7411",
  accent: "#ea7411",
  borderRadius: 0,
};
const jsonRpcUrlMap = {  
  1: [process.env.MAINNET_INFURA_URL],  
  42161: [process.env.ARB_MAINNET_ALCHEMY_URL],  
  10: [process.env.OPT_MAINNET_ALCHEMY_URL],  
  137: [process.env.POLYGON_MAINNET_ALCHEMY_URL],  
};
