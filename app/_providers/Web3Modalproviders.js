"use client";

import { useTheme } from 'next-themes';

import { Web3Modal  } from "@web3modal/react";
import { EthereumClient, w3mConnectors, w3mProvider } from '@web3modal/ethereum';
import { configureChains, createConfig, WagmiConfig } from 'wagmi';
import { mainnet, arbitrum, polygon, optimism, zkSync, bsc, localhost } from 'wagmi/chains';



export default function Web3Modalproviders({children}) {
  const chains = [mainnet, arbitrum, polygon, optimism, zkSync, bsc, localhost]

const { theme } = useTheme();
const projectId = '9363f563cd22a418253428327d4d54c2';
//配置公共客户端
const { publicClient  } = configureChains(chains, [w3mProvider({ projectId })])

const wagmiConfig = createConfig({
    autoConnect: true,
    connectors: w3mConnectors({ projectId, chains }),
    publicClient 
})
//创建 EthereumClient 实例
const ethereumClient = new EthereumClient(wagmiConfig, chains)

    return (
        <>
        <WagmiConfig config={wagmiConfig}>
            {children}
        </WagmiConfig>

        <Web3Modal
projectId={projectId}
ethereumClient={ethereumClient}
themeVariables={themeVariables} //主题变量
themeMode={theme} // 使用next-themes提供的主题模式
termsOfServiceUrl={
  "https://docs.qiancset.com/%E5%85%B3%E4%BA%8E/%E6%B3%95%E5%BE%8B%E6%9D%A1%E6%AC%BE/shi-yong-tiao-kuan"
} //服务条款页面
privacyPolicyUrl={
  "https://docs.qiancset.com/%E5%85%B3%E4%BA%8E/%E6%B3%95%E5%BE%8B%E6%9D%A1%E6%AC%BE/yin-si-zheng-ce"
} //隐私策略网址
defaultChain={mainnet} //默认链
enableNetworkView={false} //选择钱包之前显示网络选择视图,默认值为禁用=false
//mobileWallets={mobileWallets} //手机钱包
desktopWallets={desktopWallets} //桌面钱包
explorerRecommendedWalletIds={explorerRecommendedWalletIds} //推荐钱包
//explorerExcludedWalletIds={'ALL'}//排除钱包


/>
</>
  )
}
     

const themeVariables = {
  language: "zh-CN",
  "--w3m-font-family": "Roboto, sans-serif", //基本字体系列
  "--w3m-accent-color": "#ea7411", //用于按钮、图标、标签等的颜色。
  "--w3m-accent-fill-color": "", //用于具有主题色背景的元素内的文本和图标的颜色
  "--w3m-background-color": "#ea7411", //要使用的背景颜色不是默认动画渐变
  "--w3m-background-image-url": "", //	要使用的背景图像 url 而不是默认的动画渐变
  "--w3m-logo-image-url": "https://docs.qiancset.com/img/NFT-24K.png", //要使用的图像网址代替钱包连接徽标
  "--w3m-text-xsmall-regular-font-family": "",
  };
  
  /* const mobileWallets = [
  ]; */
  
  const desktopWallets = [];
  const explorerRecommendedWalletIds = [
  "c57ca95b47569778a828d19178114f4db188b89b763c899ba0be274e97267d96",
  "c03dfee351b6fcc421b4494ea33b9d4b92a984f87aa76d1663bb28705e95034a",
  "20459438007b75f4f4acb98bf29aa3b800550309646d375da5fd4aac6c2a2c66",
  "971e689d0a5be527bac79629b4ee9b925e82208e5168b733496a09c0faed0709",
  "7ba1202d012a1402c8c56331471b183d2aaafb99a667dfdaf2ac4a123ea604ed",
  "8a0ee50d1f22f6651afcae7eb4253e52a3310b90af5daef78a8c4929a9bb99d4",
  "1ae92b26df02f0abca6304df07debccd18262fdf5fe82daa81593582dac9a369",
  "fd20dc426fb37566d803205b19bbc1d4096b248ac04548e3cfb6b3a38bd033aa",
  "4622a2b2d6af1c9844944291e5e7351a6aa24cd7b23099efac1b2fd875da31a0",
  "163d2cf19babf05eb8962e9748f9ebe613ed52ebf9c8107c9a0f104bfcf161b3",
  "f2436c67184f158d1beda5df53298ee84abfc367581e4505134b5bcf5f46697d",
  "2863183c3299d820fb9a4cb8aab4a34f50380c9992e8be871fd60a62e8d36481",
  ];