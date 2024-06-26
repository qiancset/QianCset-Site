"use client"

import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useTranslation } from 'react-i18next';
export default function RainbowkitButton() {
  const { t } = useTranslation();

  return (
    <div>
      <ConnectButton
        label={t("连接")}
        accountStatus={{
          smallScreen: 'avatar',
          largeScreen: 'full',
        }}
        showBalance={{
          smallScreen: false,
          largeScreen: false,
        }}
        
      />
    </div>
  )
}