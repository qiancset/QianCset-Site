'use client'
import { SwapWidget } from '@uniswap/widgets'
import './Uniswap.css'

export default  function Uniswap() {



  return(<div className="Uniswap1">

<div className="Uniswap">

    <SwapWidget 
      width={"100%"}
      theme={theme}//覆盖样式属性
      locale='zh-CN' //指定小组件界面的显式区域设置为中文
      hideConnectionUI={true} //隐藏小部件的内置钱包连接UI,'true'
      brandedFooter={false} //启用小部件底部的“由 Uniswap 提供支持”页脚。
     
      defaultChainId={1} //指定要提示用户将其钱包连接到哪个链ID。
      //tokenList={UNISWAP_TOKEN_LIST}          //令牌列表
      defaultInputTokenAddress={NATIVE}   //本机令牌的特殊地址
      defaultInputAmount={1}          //默认输入设置为 1 代币
      defaultOutputTokenAddress={USDT}         //默认输出令牌设置为 USDT
      convenienceFee={1} // 指定便利费为 1 个基点
      convenienceFeeRecipient="0xcd284038f2E68c6A43b04695f84377f38686eE56"//使用该地址作为便利费收款方
      jsonRpcUrlMap={jsonRpcUrlMap} //Api节点
     
      onTokenSelectorClick={false}
      /* provider={provider} */
    />
  

  </div>

  
  </div>
  );
}

const theme = {
  interactive: '#ea7411',
  accent: '#ea7411',
  borderRadius: 0,
};
const jsonRpcUrlMap = { 
  1:['https://eth-mainnet.g.alchemy.com/v2/vUaB_jk8nEelfcPJzNxpqCv5DpTPB_O9'],
  42161:['https://arb-mainnet.g.alchemy.com/v2/CdeCwYqT7ezhlc-RIGzBydlqkuq3kp8F'],
  137:['https://polygon-mainnet.g.alchemy.com/v2/Rm2C0m_GtoU1IiBTEEtImfA9LtnAUjhQ']
  }
const NATIVE = 'NATIVE' 
const USDT = '0xdAC17F958D2ee523a2206206994597C13D831ec7'
//const QLC ='0x6B175474E89094C44Da98b954EedeAC495271d0F'


