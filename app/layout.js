//服务器渲染
import '@/styles/App.css'
import '@/styles/App1.css'
import '@/styles/Anniu.css'
import '@/locales/i18n/i18n'
import { Header, Footer } from '@/components'//组件来源
import { AntdContainer, Themes, Web3Modalproviders } from './_providers' //第三方供应商



export const metadata = {
  title: '千赛特 Qiancset Web3',
  description: 'Qiancset Web3,千赛特区块链社区服务平台,去中心化点对点交易,web3互动交流的加密世界,公共、开源、优质的区块链服务平台,官方网站:https://www.qlweb3.top/,千赛特去中心化服务平台,Qiancsetweb3一个点对点交易swap,NFT,nft,加密货币的Dapps,使用react next js 的webapp',

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
        <meta name="theme-color" content="#ea7411" />

        <link rel="icon" href="./favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="./apple-icon.png" />


        <link rel="stylesheet" href="https://cdn.bootcdn.net/ajax/libs/font-awesome/6.2.1/css/all.css" />
      </head>

      <body className='className'>
        <Themes>
          <Web3Modalproviders>
            <AntdContainer>

              <Header />
              {children}
              <Footer />

            </AntdContainer>
          </Web3Modalproviders>
        </Themes>
      </body>


    </html>
  )
}
