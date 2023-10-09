'use client'

import React, { useEffect } from 'react';  
import { useRouter } from 'next/navigation';  
/* export const metadata = {
  title:'千赛特 QianCset DAPP',
  description:
    "Qiancset Web3,千赛特区块链社区服务平台,去中心化点对点交易,web3互动交流的加密世界,官方网站:www.qiancset.com, 千赛特去中心化服务平台,qiancsetweb3一个点对点交易swap,NFT,nft,加密货币的Dapps,使用react-nextjs的webdapp,QianCset,Qiancset,qiancset,",
} */
export default function Appspage() {
  const router = useRouter();  
  
  useEffect(() => {  
    // 这里的路径'/'应该匹配您的Home页路径  
    router.push('/Home');  
  }, [router]); 

  return (
    <>


      
    </>
  )
}

