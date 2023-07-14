//服务器渲染
import '@/styles/App.css'
import '@/styles/App1.css'
import '@/styles/Anniu.css'
import '@/locales/i18n/i18n'
import { Header, Footer } from '@/components'//组件来源
import Providers from './_Providers/_Providers' //第三方供应商

import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })


export const metadata = {
  title: '千赛特 Qiancset Web3',
  description: 'Qiancset Web3,千赛特区块链社区服务平台,去中心化点对点交易,web3互动交流的加密世界,官方网站:www.qiancset.com, 千赛特去中心化服务平台,qiancsetweb3一个点对点交易swap,NFT,nft,加密货币的Dapps,使用react-nextjs的webdapp',

  /*   icons: {
      icon: '/favicon.ico',
      shortcut: '/favicon.ico',
      apple: '/apple-icon.png'
    }, */

}

export default function RootLayout({ children }) {



  return (
    <html lang="zh">
      <head>
        <meta charset="utf-8" />
        <meta name="theme-color" content="#ea7411" />

        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-icon.png" />
<meta name="keywords" content="QiancsetWeb3,Qiancset,Web3,qiancsetweb3,qiancset,web3,千赛特,区块链,千赛特官网,千赛特去中心化应用,QiancsetDapp,千赛特DAPP,千赛特币,QCC,QisncsetCoin,QiancsetToken,qiancsetblockchain"
        <link rel="stylesheet" href="https://cdn.bootcdn.net/ajax/libs/font-awesome/6.2.1/css/all.css" />
      </head>

      <body className={inter.className}>
  
            <Providers>

              <Header />
              {children}
              <Footer />

            </Providers>

      </body>


    </html>
  )
}
