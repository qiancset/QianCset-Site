/* eslint-disable @next/next/no-img-element */
"use client";
import Image from "next/image";

import { useTranslation } from "react-i18next";

function Card({ imageUrl, title, link }) {
  return (
    <div>
      <a href={link} target="_blank" rel="noopener noreferrer" className="card">
        <Image className="work-img" src={imageUrl} alt={title} width={200} height={200}/>
        <div className="work-content">
          <strong>
            {title} 
          </strong>
        </div>
      </a>
    </div>
  );
}

export default function Projects() {
  const { t } = useTranslation();
  return (
    <>
      <div id="projects">
        <h3 className="projectsh3">
          {t("学习文档")}
          <hr className="home_hr"/>
        </h3>
        <p>{t("点击阅读了解新一代互联网")}</p>
        <div className="work-box">
          <div className="work">
			
            <Card
              imageUrl="/images/TU/DeFi.jpg"
              title={t("去中心化金融")}
              link="https://ethereum.org/zh/defi/#what-is-defi"
            />
            <Card
              imageUrl="/images/TU/DAO.jpg"
              title={t("去中心化自治组织")}
              link="https://ethereum.org/zh/dao/#what-are-daos"
            />
            <Card
              imageUrl="/images/TU/NFT.jpg"
              title={t("非同质化通证")}
              link="https://ethereum.org/zh/nft/#what-are-nfts"
            />
            <Card
              imageUrl="/images/TU/Dapp.jpg"
              title={t("去中心化应用")}
              link="https://ethereum.org/zh/developers/docs/dapps/"
            />
            <Card
              imageUrl="/images/TU/zhineng.jpg"
              title={t("智能合约")}
              link="https://ethereum.org/zh/developers/docs/smart-contracts/"
            />
            <Card
              imageUrl="/images/TU/Gaming.jpeg"
              title={t("去中心化游戏")}
              link="https://ethereum.org/zh/layer-2/"
            />
            <Card
              imageUrl="/images/TU/ling.jpg"
              title={t("零知识证明")}
              link="https://ethereum.org/zh/zero-knowledge-proofs/"
            />
            <Card
              imageUrl="/images/TU/web3.0.jpg"
              title={t("去中心化互联网")}
              link="https://ethereum.org/zh/web3/"
            />
            <Card
              imageUrl="/images/TU/web3wallet.jpg"
              title={t("Web3钱包数字身份")}
              link="https://ethereum.org/zh/wallets/find-wallet/"
            />

          </div>
        </div>
      </div>
    </>
  );
}
