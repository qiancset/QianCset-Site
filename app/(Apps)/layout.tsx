
import Providers from "../_Providers/Providers";
import '@/Component/theme/Apps.css'
import '@/Component/theme/Apps_dark.css'
export const metadata = {
   title: { absolute: 'QiacCset', },
}

export default function Homelayout({ children }) {
   return (
      <html lang="zh">
         <head>
            <meta charSet="utf-8" />
            <meta name="theme-color" content="#ea7411" />
            <meta
               name="keywords"
               content="QiancsetWeb3,Qiancset,Web3,qiancsetweb3,qiancset,web3,千赛特,区块链,千赛特官网,千赛特去中心化应用,QiancsetDapp,千赛特DAPP,千赛特币,QCC,QisncsetCoin,QiancsetToken,qiancsetblockchain"
            />
            <link rel="favicon" href="/favicon.ico" sizes="any" />
            <link rel="icon" href="./icon.png" />
            <link rel="apple-touch-icon" href="/apple-icon.png" />

            <link
               rel="stylesheet"
               href="https://cdn.bootcdn.net/ajax/libs/font-awesome/6.2.1/css/all.css"
            />
         </head>
         <body>
            <Providers>


                  {children}
             
 
            </Providers>
         </body>
      </html>
   )
}