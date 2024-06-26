"use client";


import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";


function LogoCard({ imageUrl, altText }) {
  return (
    <div className="feature-cardLOGO">
      <Image src={imageUrl} alt={altText} width={40} height={40} />
    </div>
  );
}

export default function Contact() {

  const { t } = useTranslation();
  return (
    <div>
      <div id="contact">
        <div className="intro4">
          <h3>
            {t("合作发展")}
            <hr className="About_hr" />
          </h3>
          <Link href="/" target="_blank">
            <div className="button_About" >
              {t("捐赠代币")}
            </div>
          </Link>




          <p className="kapianLOGOP">{t("技术和平台依赖、借鉴与参考")}</p>

          <div className="kapianLOGO">

            <LogoCard imageUrl="/images/COMLOGO/ETH.png" altText="ETH" />
            <LogoCard imageUrl="/images/COMLOGO/UINSWAP.png" altText="UINSWAP" />

            <LogoCard imageUrl="/images/COMLOGO/MetaMask.svg" altText="MetaMask" />
            <LogoCard imageUrl="/images/COMLOGO/Rainbow.svg" altText="Rainbow" />
            <LogoCard imageUrl="/images/COMLOGO/wallet_connect.png" altText="wallet_connect" />
            <LogoCard imageUrl="/images/COMLOGO/Alcheny.svg" altText="Alcheny" />
            <LogoCard imageUrl="/images/COMLOGO/Alcheny.svg" altText="Alcheny" />
            <LogoCard imageUrl="/images/COMLOGO/IPFS.svg" altText="IPFS" />

          </div>




        </div>

      </div>
    </div>
  );
}
