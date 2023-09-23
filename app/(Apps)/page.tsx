
import Image from "next/image";
import Home from "./Home"
import AppsFooter from "@/UI/AppsFooter/AppsFooter"
import HeaderChildren from "@/UI/AppsHeader/HeaderChildren";

export const metadata = {
  title:'千赛特 QianCset DAPP',
  description:
    "Qiancset Web3,千赛特区块链社区服务平台,去中心化点对点交易,web3互动交流的加密世界,官方网站:www.qiancset.com, 千赛特去中心化服务平台,qiancsetweb3一个点对点交易swap,NFT,nft,加密货币的Dapps,使用react-nextjs的webdapp,QianCset,Qiancset,qiancset,",
}
export default function Appspage() {
  return (
    <>

      <AppsHeader />
      <Home />
      <AppsFooter />
      
    </>
  )
}
function AppsHeader() {
  return (
    <>
      <HeaderChildren>
        <div className="Header_center">
          <h1>
            <a href="#" title="QianCset 千赛特">
              <Image src="/favicon.ico" className="QianCset" alt="header-Q" height={50} width={50} />
            </a>
          </h1>

        </div>
      </HeaderChildren>
    </>
  );
}

