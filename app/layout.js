//服务器渲染
import '../styles/App.css'
import '../styles/App1.css'
import '../styles/Anniu.css'
import '../locales/i18n/i18n'
import { Header, Footer } from '@/components'//组件来源
import { AntdContainer, Themes } from './_providers' //第三方供应商



export const metadata = {
  title: '千里 Qianli Web3',
  themeColor: '#ea7411',
  description: 'QianLi Web3,千里加密社区服务平台,去中心化点对点交易,web3互动交流的加密世界,公共、开源、优质的区块链服务平台,官方网站:https://www.qlweb3.top/,千里去中心化服务平台,qianliweb3一个点对点交易swap,NFT,nft,加密货币的Dapps,使用react next js 的webapp',

/*   icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-icon.png'
  }, */
  generator: 'Qianli Web3',
  applicationName: 'Qianli Dapp',
  referrer: 'Qianli Web3',
  keywords: ['Qianli', 'Web3', 'Dapp','千里','加密','qianli','NFT','Dapps','千里去中心化服务平台','qlweb3','去中心化','点对点交易','区块链',],
  authors: [{ name: 'Qin' }, { name: 'JiangBan', url: 'https://www.qlweb3.top' }],
  colorScheme: '#ea7411',
  creator: 'Qin',
  publisher: 'Qianli Web3',
  formatDetection: {
    email: 'qianliweb3@outlook.com'
  },
}

export default function RootLayout({ children}) {



  return (
    <html lang="zh">
      <head>


        <link rel="icon" href="./favicon.ico" sizes="32x32" />{/* //网站图标 */}
        <link rel="apple-touch-icon" href="./apple-icon.png" />{/* //苹果图标 */}
  {/*       <link rel="shortcut icon" href="./favicon.ico" />  */}
        
        <link rel="stylesheet" href="https://cdn.bootcdn.net/ajax/libs/font-awesome/6.2.1/css/all.css" />
      </head>

      <body className='className'>
        <Themes>
          <AntdContainer>
            <Header />
            {children}
            <Footer />
          </AntdContainer>
        </Themes>
      </body>


    </html>
  )
}
