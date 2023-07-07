"use client";

import { ThirdwebNftMedia, useContract, useNFT } from "@thirdweb-dev/react";


export default function ttpage() {
  //连接到您的 NFT 合约
  const { contract } = useContract("{{contract_address}}");
  // 使用钩子从合约加载 NFT 元数据
  const { data: nft, isLoading, error } = useNFT(contract, "0");
  // 将 NFT 渲染到 UI 上
  if (isLoading) return <div>Loading...</div>;
  if (error || !nft) return <div>NFT not found</div>;

  return <ThirdwebNftMedia 
  metadata={nft.metadata}
  height={500}
  width={500}
  />;
}

