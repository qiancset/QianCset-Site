"use client";

import {
  ThirdwebProvider,
  metamaskWallet,
  coinbaseWallet,
} from "@thirdweb-dev/react";

import {
  Ethereum,
  Polygon,
  Arbitrum,
  Optimism,
  Binance
} from "@thirdweb-dev/chains";

export default function Thirdweb({ children }) {

  return (


    <ThirdwebProvider
      autoConnect={false}
      activeChain="ethereum"
      supportedChains={[Ethereum, Polygon, Arbitrum, Optimism, Binance]}
      supportedWallets={[  
        metamaskWallet(), 
        coinbaseWallet(),
      ]}

    >

      {children}
    </ThirdwebProvider>
  )
}


const metamaskConfig = metamaskWallet();
metamaskConfig.meta.name = "小狐狸钱包"; // 更改名称
metamaskConfig.meta.iconURL = "/images/WEB3/metamask-fox.svg"; // 更改图标

// 更改网址以在各种平台上下载钱包
metamaskConfig.meta.urls = {
  android: "https://metamask.app.link/bxwkE8oF99",
  ios: "https://metamask.app.link/skAH3BaF99",
  chrome: "https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn",
};

// 覆盖连接 UI
//metamaskConfig.connectUI = MetamaskConnectUI;

// 自定义选择用户界面
//metamaskConfig.selectUI = MetamaskSelectUI;

/* // 用于检查钱包是否已安装的自定义逻辑
metamaskConfig.isInstalled = isMetamaskInstalled; // function
const localWalletConfig = localWallet(options);
const walletConnectConfig = walletConnect(options); */

