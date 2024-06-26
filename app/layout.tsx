//import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
//import 'nextra-theme-docs/style.css'
import './globals.css'
import Providers from "@/config/Providers";
import { Suspense } from "react";
import Loading from "./loading";




export const metadata = {
   title: {
      template: '%s | 千赛特 QianCset DAPP',
      default: '千赛特 QianCset DAPP',
   },
   description:
      "Qiancset Web3,千赛特区块链社区服务平台,千赛特租房,区块链租房,没有中间费、服务费的租房平台,去中心化点对点交易,web3互动交流的加密世界,官方网站:www.qiancset.com, 千赛特去中心化服务平台,qiancset web3一个点对点交易swap,NFT,nft,加密货币的Dapps,使用react-nextjs的webdapp,",
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
//const inter = Inter({ subsets: ["latin"] });
export default function Layout({ children }: { children: React.ReactNode }) {

   return (
      <html>


         <body /* className={inter.className} */>



            <Providers>


               <Suspense fallback={<Loading/>}>
                  {children}
               </Suspense>


            </Providers>

            <Analytics />


         </body>
      </html>
   )
}