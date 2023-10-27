"use client";

import { useTheme } from "next-themes";

import "@rainbow-me/rainbowkit/styles.css";

import { configureChains, createConfig, WagmiConfig } from "wagmi";
import {
  arbitrum,
  mainnet,
  polygonZkEvm,
  optimism,
  polygon,
  zora,
  zkSync,
  bsc,
  localhost,
} from "wagmi/chains";

import {
  getDefaultWallets,
  RainbowKitProvider,
  Locale,
  darkTheme,
  lightTheme,
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
import { connectorsForWallets } from "@rainbow-me/rainbowkit";

import { publicProvider } from "wagmi/providers/public";
import { infuraProvider } from "wagmi/providers/infura";
import { useTranslation } from "react-i18next";

export default function RainbowkitP({ children }) {
  const { t } = useTranslation();
  // 确保 t('zh-CN') 返回一个有效的 Locale 类型
  const locale = t("zh-CN");
  const { theme } = useTheme();

  // 根据当前的 theme 值来选择不同的主题
  const selectedTheme =
    theme === "dark"
      ? darkTheme({
        accentColor: "#ea7411",
        accentColorForeground: "white",
        borderRadius: "medium",
        fontStack: "system",
        overlayBlur: "small",
      })
      : lightTheme({
        accentColor: "#ea7411",
        accentColorForeground: "white",
        borderRadius: "medium",
        fontStack: "system",
        overlayBlur: "small",
      });

  return (
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider
        locale={locale}
        chains={chains}
        theme={{
          lightMode: selectedTheme,
          darkMode: selectedTheme,
        }}
        appInfo={{
          appName: "QianCset Dapp",
          learnMoreUrl: "https://www.qiancset.com/docs/Learning_docs/Crypto_Wallet",
        }}
      
      >
        {children}
      </RainbowKitProvider>
    </WagmiConfig>
  );
}

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [mainnet, polygon, polygonZkEvm, optimism, arbitrum, zora, zkSync, bsc, localhost],
  [
    infuraProvider({ apiKey: process.env.NEXT_PUBLIC_INFURA_API_KEY }),
    publicProvider(),
  ]
);


const projectId = "ab4ee6ab51756c44ab8f80eb2fad1d22";
const connectors = connectorsForWallets([
  {
    groupName: "Recommended",
    wallets: [
      injectedWallet({ chains }),
      metaMaskWallet({ projectId: projectId, chains }),
      /* walletConnectWallet({projectId: projectId, chains,}), */
    ],
  },

  {
    groupName: "Others",
    wallets: [
      tokenPocketWallet({ projectId: projectId, chains, }),
      okxWallet({ projectId: projectId, chains }),
      coinbaseWallet({ chains }),
      rainbowWallet({ projectId: projectId, chains }),
      uniswapWallet({ projectId: projectId, chains }),

    ],
  },
]);

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,

  publicClient,
  webSocketPublicClient,
});

