"use client";
import { useTranslation } from 'react-i18next';
import {

  ThirdwebProvider,
  metamaskWallet,
  coinbaseWallet,
  walletConnect
} from "@thirdweb-dev/react";

import {
  Ethereum,
  Polygon,
  Arbitrum,
  Optimism,
  Binance
} from "@thirdweb-dev/chains";

export default function Thirdweb({ children }) {
  const { t } = useTranslation();

  const metamaskConfig = metamaskWallet();
  metamaskConfig.meta.name = t('小狐狸钱包'); // 更改名称
  metamaskConfig.meta.iconURL = "/images/WEB3/metamask-fox.svg"; // 更改图标
  metamaskConfig.meta.urls = {
    android: "https://metamask.app.link/bxwkE8oF99",
    ios: "https://metamask.app.link/skAH3BaF99",
    chrome: "https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn",
  };
  // 覆盖连接 UI
  //metamaskConfig.connectUI = MetamaskConnectUI;
  // 自定义选择用户界面
  //metamaskConfig.selectUI = MetamaskSelectUI;

  const coinbaseConfig = coinbaseWallet();
  coinbaseConfig.meta.name = t('币库钱包');

  const projectId = process.env.PROJECT_ID;
  const walletConnectConfig = walletConnect({
    projectId: projectId,
  });
  walletConnectConfig.meta.name = t('钱包连接');
  walletConnectConfig.meta.iconURL = "/images/APPLOGO/wallet_connect.png";

  return (


    <ThirdwebProvider
      autoConnect={false}
      activeChain={{
        ...Ethereum,
        rpc: ["https://eth-mainnet.g.alchemy.com/v2/mlFEUUHXOMfXKOL0zV12xXYfb8LUjnMf"],

        ...Polygon,
        rpc: ["https://polygon-mainnet.g.alchemy.com/v2/KYaEAzPvehDQOFBO5tAjIX2_FRwoH1oD"],

        ...Arbitrum,
        rpc: ["https://arb-mainnet.g.alchemy.com/v2/4ZFkWe3RAFIPggBGs_QF22l_CkPQIwv0"],

        ...Optimism,
        rpc: ["https://opt-mainnet.g.alchemy.com/v2/mWJ8qFvl-bijKQGL85sSLK54Audbbt_o"],
      }}

      supportedChains={[Ethereum, Polygon, Arbitrum, Optimism, Binance]}
      supportedWallets={[
        metamaskWallet(),
        coinbaseWallet(),
        walletConnect()
      ]}

    >

      {children}
    </ThirdwebProvider>
  )
}

