"use client";

import { useTheme } from 'next-themes';

import '@rainbow-me/rainbowkit/styles.css';
import { getDefaultWallets, RainbowKitProvider, darkTheme, lightTheme, } from '@rainbow-me/rainbowkit';
import { configureChains, createConfig, WagmiConfig } from 'wagmi';
import { arbitrum, mainnet, optimism, polygon, zora, zkSync, bsc, localhost } from 'wagmi/chains';
import { publicProvider } from 'wagmi/providers/public';
import { infuraProvider } from 'wagmi/providers/infura'

const { chains, publicClient, webSocketPublicClient } = configureChains(
    [mainnet, polygon, optimism, arbitrum, zora, zkSync, bsc, localhost],
    [infuraProvider({ apiKey: (process.env.NEXT_PUBLIC_INFURA_API_KEY) }), publicProvider()]
);

const { connectors } = getDefaultWallets({
    appName: 'RainbowKit App',
    projectId: '9363f563cd22a418253428327d4d54c2',
    chains,
});

const wagmiConfig = createConfig({
    autoConnect: true,
    connectors,
    publicClient,
    webSocketPublicClient,
});

export default function RainbowkitP({ children }) {
    const { theme } = useTheme();
    // 根据当前的 theme 值来选择不同的主题
    const selectedTheme = theme === 'dark' ? darkTheme({
        accentColor: '#ea7411',
        accentColorForeground: 'white',
        borderRadius: 'medium',
        fontStack: 'system',
        overlayBlur: 'small',
    }) : lightTheme({
        accentColor: '#ea7411',
        accentColorForeground: 'white',
        borderRadius: 'medium',
        fontStack: 'system',
        overlayBlur: 'small',
    });


    return (
        <WagmiConfig config={wagmiConfig} >
            <RainbowKitProvider
                chains={chains}
                theme={{
                    lightMode: selectedTheme,
                    darkMode: selectedTheme,
                }}
                appInfo={{
                    appName: 'QianCset Dapp',
                    learnMoreUrl: 'https://docs.qiancset.com/Learning_docs/Crypto_Wallet',

                }}
            >
                {children}
            </RainbowKitProvider>
        </WagmiConfig>
    );
}

