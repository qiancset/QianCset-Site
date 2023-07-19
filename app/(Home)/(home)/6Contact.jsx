"use client";

import { LikeOutlined } from "@ant-design/icons";

import Link from "next/link";
import { useTranslation } from "react-i18next";

function LogoCard({ imageUrl, altText }) {
  return (
    <div className="feature-cardLOGO">
      <img src={imageUrl} alt={altText} width="40px" height="40px" />
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
          <Link href="/Donation">
            <button className="Bbutton pulse w-button" target="_blank">
              {t("捐赠代币")} <LikeOutlined />
            </button>
          </Link>
          <p>{t("点击下方随时在社交媒体上联系")}</p>
          <div className="social-media">
            <div>
              
                <a
                  href="https://twitter.com/Qiancset"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="twitter"
                >
                  <i className="fab fa-twitter"></i>
                </a>
                <a
                  href="https://github.com/Qiancset"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="github"
                >
                  <i className="fab fa-github"></i>
                </a>
                <a
                  href="https://qm.qq.com/cgi-bin/qm/qr?k=2Wt6v9arhhppgYG_REzJk7YtkoqTJA3M&noverify=0&personal_qrcode_source=3"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="qq"
                >
                  <i className="fab fa-qq"></i>
                </a>
              
            </div>
          </div>
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
