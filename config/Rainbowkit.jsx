"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

import "@rainbow-me/rainbowkit/styles.css";

import { configureChains, createConfig, WagmiConfig } from "wagmi";

import {
  mainnet,
  linea,
  arbitrum,
  optimism,
  polygon,
  polygonZkEvm,
  zkSync,
  base,
  bsc,
  okc,
  hardhat,
  localhost,
} from "wagmi/chains";

import {
  RainbowKitProvider,
  Locale,
  darkTheme,
  lightTheme,
  AvatarComponent,
  connectorsForWallets,
} from "@rainbow-me/rainbowkit";

import {
  walletConnectWallet,
  injectedWallet,
  metaMaskWallet,
  coinbaseWallet,
  okxWallet,
  rainbowWallet,
  tokenPocketWallet,
  uniswapWallet,
} from "@rainbow-me/rainbowkit/wallets";

import { publicProvider } from "wagmi/providers/public";
import { infuraProvider } from "wagmi/providers/infura";
import { useTranslation } from "react-i18next";

export default function Rainbowkit({ children }) {
  const { t } = useTranslation();
  // 确保 t('zh-CN') 返回一个有效的 Locale 类型
  const Locale = t("zh-CN");
  const { theme } = useTheme();

  // 根据当前的 theme 值来选择不同的主题

  const selectedTheme =
    theme === "light"
      ? lightTheme({
        accentColor: "#ea7411",
        accentColorForeground: "white",
        borderRadius: "medium",
        fontStack: "system",
        overlayBlur: "small",
      }):darkTheme({
        accentColor: "#ea7411",
        accentColorForeground: "white",
        borderRadius: "medium",
        fontStack: "system",
        overlayBlur: "none",
      }) 
      ;theme === "dark" ? darkTheme({
        accentColor: "#ea7411",
        accentColorForeground: "white",
        borderRadius: "medium",
        fontStack: "system",
        overlayBlur: "none",
      }) :  lightTheme({
        accentColor: "#ea7411",
        accentColorForeground: "white",
        borderRadius: "medium",
        fontStack: "system",
        overlayBlur: "none",
      });

  return (
    <div>
      <WagmiConfig config={wagmiConfig}>
        <RainbowKitProvider
          locale={Locale}
          chains={chains}
          initialChain={1}
          avatar={CustomAvatar}
          showRecentTransactions={true}
          theme={{
            lightMode: selectedTheme,
            darkMode: selectedTheme,
          }}
          appInfo={{
            appName: "QianCset Dapp",
            learnMoreUrl: "/docs/Crypto_Wallet",
          }}>
          {children}
        </RainbowKitProvider>
      </WagmiConfig>
    </div>
  );
}

//自定义链
const { chains, publicClient, webSocketPublicClient } = configureChains(
  [
    mainnet,
    linea,
    arbitrum,
    optimism,
    polygon,
    polygonZkEvm,
    zkSync,
    base,
    bsc,
    okc,
    hardhat,
    localhost,
  ],
  [
    infuraProvider({ apiKey: process.env.NEXT_PUBLIC_INFURA_API_KEY }),
    publicProvider(),
  ]
);

//钱包列表
const projectId = process.env.WALLET_PROJECTID_KEY || "1234567890";
const connectors = connectorsForWallets([
  {
    groupName: "Recommended",
    wallets: [
      injectedWallet({ chains }),
      walletConnectWallet({ projectId, chains }),
      metaMaskWallet({ projectId, chains }),
      okxWallet({ projectId, chains }),
    ],
  },

  {
    groupName: "Others",
    wallets: [
      tokenPocketWallet({ projectId, chains }),
      coinbaseWallet({ chains }),
      rainbowWallet({ projectId, chains }),
      uniswapWallet({ projectId, chains }),
    ],
  },
]);

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,

  publicClient,
  webSocketPublicClient,
});

const getAddressHash = (address) => {
  // 假设这里使用了简单的哈希函数，实际应用中可能需要更复杂的算法
  // 这只是一个示例，实际应用中可能需要根据具体需求进行调整
  const hash = address
    .split("")
    .reduce((acc, char) => acc + char.charCodeAt(0), 0);
  return hash.toString();
};

const CustomAvatar = ({ address, ensImage, size }) => {
  const base64String =
    "iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAAAXNSR0IArs4c6QAAAchJREFUeF7t2jFOw0AURdFYokUiEqKgpqJlGakoWALbYCNZQgoqdkNNRcECIgWJEVKkeNC13oRx4Kb+M7aP37fHdoa75dVuAX6r7SWo+jslL2fv6GAGAcedBET5qRcJKGAoEA43gQKGAuFwEyhgKBAON4G/Bfh0foueROj+rJ8vUOnj/Qeqo0W9tjsISE/ReJ2Amd9CQAGLgNfAMAkCCti3lUygCTSBYQbKcPoM+ba5abK970muH17RfK2/7TRfBwqIzmO9SEABJwnYwpO4DosFFLAIeBcOkyCggC6kf8wAfVinQer1TaT1/uG7sIDj9AJWIkk7REABp71G8xpYEeh1jbaFbWFbmF6WZrlOtYVPtYWbxO6Ik8x+HXjEY28ytYAho4AChgLhcBMoYCgQDjeBAoYC4XATODfAcH8OhtP/0NDttv7XFd0ufhamE9I6AalUpU5AAb8EbOEwCAIKWAS8C4dJEFDAaQL/bhnT68M1PS299g/fhXvtoIAVAfq2Q0ABi4AtPJ4Er4FhhwgoYN9LjAk0gSeSQLoeo3Vzv6vT48AtTCekdQJSqUqdgAL2/SZiAk2gCQwzIKCAewKt3y9SXNeBVKpS9wkoT+0Sy3DWUwAAAABJRU5ErkJggg==";
  const addressHash = getAddressHash(address);
  return ensImage ? (
    <img
      src={ensImage}
      width={size}
      height={size}
      style={{ borderRadius: "50%" }}
      alt='Avatar'
    />
  ) : (
    <img src={`data:image/png;base64,${base64String}`} />
  );
};
