//服务器渲染

import "@/css/App.css";
import "@/css/App1.css";
import "@/css/Anniu.css";

import Header from "@/components/Header/Header";


export const metadata = {
  title: {
    template: '%s | 千赛特 QianCset Web3',
    default: '千赛特 QianCset Web3',
  },
  description:
    "Qiancset Web3,千赛特区块链社区服务平台,去中心化点对点交易,web3互动交流的加密世界,官方网站:www.qiancset.com, 千赛特去中心化服务平台,qiancsetweb3一个点对点交易swap,NFT,nft,加密货币的Dapps,使用react-nextjs的webdapp",
};

export default function wwwLayout({ children }) {

  return (

        <>
          <Header />
          <div style={{ height: "56px" }} />
          {children}

        </>

  );
}
