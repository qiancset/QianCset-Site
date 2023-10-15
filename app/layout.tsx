import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

import './layout.css'
import Providers from "@/Providers/Providers";


export const metadata = {
   title: {
      template: '%s | 千赛特 QianCset DAPP',
      default: '千赛特 QianCset DAPP',
   },
   description:
      "Qiancset Web3,千赛特区块链社区服务平台,去中心化点对点交易,web3互动交流的加密世界,官方网站:www.qiancset.com, 千赛特去中心化服务平台,qiancsetweb3一个点对点交易swap,NFT,nft,加密货币的Dapps,使用react-nextjs的webdapp,",
   icons: {
      icon: '/favicon.ico',
      shortcut: '/shortcut-icon.png',
      apple: '/apple-icon.png',
      other: {
         rel: 'apple-touch-icon-precomposed',
         url: '/apple-touch-icon-precomposed.png',
      },
   },

};
const inter = Inter({ subsets: ["latin"] });
export default function Layout({ children }: React.PropsWithChildren) {
   return (
      <html lang="zh">
         <head>
            <meta charSet="utf-8" />
            <meta name="theme-color" content="#ea7411" />
         </head>
         <body className={inter.className}>
           
               <Providers>


                  {children}


                  <Analytics />


               </Providers>
           
         </body>
      </html>
   )
}