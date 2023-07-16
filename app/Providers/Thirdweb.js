"use client";
import { useTranslation } from 'react-i18next';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  ThirdwebProvider,
  metamaskWallet,
} from "@thirdweb-dev/react";
import {
  Ethereum,
  Polygon,
  Arbitrum,
  Optimism
} from "@thirdweb-dev/chains";

export default function Thirdweb({ children }) {
  const { t } = useTranslation();
  const queryClient = new QueryClient();
  const dAppMeta = {
    name: "Qiancset Dapp",
    description: "Qiancset Web3",
    logoUrl: "https://www.qiancset.com/favicon.ico",
    url: "https://www.qiancset.com",
    isDarkMode: true,
  }


  const metamaskConfig = metamaskWallet();
  metamaskConfig.meta.name = t('小狐狸钱包'); // 更改名称
  metamaskConfig.meta.iconURL = "/images/WEB3/metamask-fox.svg"; // 更改图标
  metamaskConfig.meta.urls = {
    android: "https://metamask.app.link/bxwkE8oF99",
    ios: "https://metamask.app.link/skAH3BaF99",
    chrome: "https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn",
  };


  return (


    <QueryClientProvider client={queryClient}>
      <ThirdwebProvider
        queryClient={queryClient}//查询客户端
        autoConnect={true} //自动连接
        activeChain="ethereum"
        supportedChains={[Ethereum, Polygon, Arbitrum, Optimism]}
        supportedWallets={[
          metamaskWallet()
        ]}
        dAppMeta={dAppMeta}
      >

        {children}
      </ThirdwebProvider>
    </QueryClientProvider>
  )
}

