"use client";

import { LikeOutlined } from "@ant-design/icons";
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
        <section className="intro4">
          <h3>
            {t("合作发展")}
            <hr />
          </h3>
          <Link href="/Donation" target="_blank">
            <button className="Bbutton pulse w-button" >
              {t("捐赠代币")} <LikeOutlined />
            </button>
          </Link>
          <p>{t("点击下方随时在社交媒体上联系")}</p>

          <div>
            <p className="kapianLOGOP">{t("技术和平台依赖、借鉴与参考")}</p>

            <div className="kapianLOGO">
              <LogoCard imageUrl="/images/WEB3/ETH.svg" altText="ETH" />
              <LogoCard imageUrl="/images/WEB3/UINSWAP.png" altText="UINSWAP" />
              <LogoCard imageUrl="/images/WEB3/Polygo.svg" altText="Polygo" />

              <LogoCard imageUrl="/images/COMLOGO/MetaMask.svg" altText="MetaMask" />
              <LogoCard imageUrl="/images/COMLOGO/wallet_connect.png" altText="wallet_connect" />
              <LogoCard imageUrl="/images/COMLOGO/Alcheny.svg" altText="Alcheny" />
              <LogoCard imageUrl="/images/COMLOGO/DAOhaus.svg" altText="DAOhaus" />
              <LogoCard imageUrl="/images/APPLOGO/QQ.svg" altText="QQ" />
              <LogoCard imageUrl="/images/APPLOGO/Discord.svg" altText="Discord" />  
              <LogoCard imageUrl="/images/COMLOGO/React.svg" altText="react" />
              <LogoCard imageUrl="/images/COMLOGO/Vercel.svg" altText="Vercel" />
              <LogoCard imageUrl="/images/APPLOGO/GitHub.svg" altText="GitHub" />


            </div>
          </div>
        </section>
        
      </div>
    </div>
  );
}
