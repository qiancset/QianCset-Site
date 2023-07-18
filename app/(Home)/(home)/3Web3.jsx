"use client";
import Link from "next/link";
import { useTranslation } from "react-i18next";
export default function Web3() {
  const { t } = useTranslation();
  return (
    <div>
      <div id="web3">
        <section className="intro2">
          <Kapianweb3>
            <Web3card>
              <i className="fa fa-cubes"></i>
              <p>
                {t("一个基于区块链技术的开放、反垄断、去中心化的加密网络")}
                <br />
                {t("用户创造、用户所有、用户控制、协议分配利益")}
              </p>
            </Web3card>

            <Web3card>
              <i className="fas fa-sitemap"></i>
              <p>
                {t("一切由中心化引发的问题可实现去中心化或弱中心化")}
                <br />
                {t("使用户享有数据所有权，而不是中心化平台的帐户使用权")}
              </p>
            </Web3card>

            <Web3card>
              <i className="fas fa-thumbs-up"></i>
              <p>
                {t("web3网络只需要一个")}
                <Link href="https://ethereum.org/zh/wallets/" target="_blank">
                  {t("区块链钱包")}
                </Link>
                {t("帐户即可连通一切DAPP")}
                <br />
                {t("数据由用户掌控，并存储在运行的区块链上")}
              </p>
            </Web3card>
          </Kapianweb3>
        </section>
      </div>
    </div>
  );
}

function Kapianweb3({ children }) {
  return <div className="kapianweb3">{children}</div>;
}

function Web3card({ children }) {
  return (
    <div className="Web3card">
      <div className="Web3card1">{children}</div>
    </div>
  );
}
