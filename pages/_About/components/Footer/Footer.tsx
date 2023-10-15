/* eslint-disable @next/next/no-img-element */
"use client";
import Image from "next/image";
import "./Footer.css";

import Link from "next/link";
import { useTranslation } from "react-i18next";
import { FaDiscord, FaGithub, FaQq, FaTiktok, FaTwitter } from "react-icons/fa";


function Linkli({ children, href }) {
  return (
    <>
      <li>
        <Link href={href} target="_blank">
          {children}
        </Link>
      </li>
    </>
  );
}
function SocialMedia({ href, faicon }) {
  return (
    <>
      <a href={href} target="_blank" rel="noopener noreferrer">
        <i>{faicon}</i>
      </a>
    </>
  );
}

export default function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="footer">
      <div className="footer_background">


        <p>{t("关注我们的社交媒体")}</p>
        <div className="social-media">
          <SocialMedia
            href="https://twitter.com/qiancset"
            faicon={<FaTwitter/>}
          />
          <SocialMedia
            href="https://www.tiktok.com/@qiancset"
            faicon={<FaTiktok/>}
          />
          <SocialMedia
            href="https://discord.gg/pMzB7fSs9E"
            faicon={<FaDiscord/>}
          />
          <SocialMedia
            href="https://pd.qq.com/s/8z8x37o4v"
            faicon={<FaQq/>}
          />
          <SocialMedia
            href="https://github.com/Qiancset"
            faicon={<FaGithub/>}
          />

        </div>

        <div className="列表">
          <div id="ff" className="content">
            <div className="link_boxes">
              <ul className="box1">
                <li className="link_name">
                  <h2>{t("产品")}</h2>
                </li>

                <li>
                  <Link href="/">Qiancset</Link>
                </li>
              </ul>

              <ul className="box2">
                <li className="link_name">
                  <h2>{t("介绍")}</h2>
                </li>
                <Linkli href="https://docs.qiancset.com/ru-men-zhi-nan">
                  {t("入门指南")}
                </Linkli>

                <li>
                  <Link
                    target="_blank"
                    href="https://docs.qiancset.com/bai-pi-shu"
                  >
                    {t("白皮书")}
                  </Link>
                </li>
              </ul>

              <ul className="box3">
                <li className="link_name">
                  <h2>{t("服务")}</h2>
                </li>

                <Linkli href="https://docs.qiancset.com/Serve/ji-shu-wen-ti">
                  {t("技术问题")}
                </Linkli>

                <Linkli href="https://docs.qiancset.com/Serve/jia-ru-gong-xian">
                  {t("加入贡献")}
                </Linkli>

                <Linkli href="https://docs.qiancset.com/category/he-zuo">
                  {t("合作")}
                </Linkli>

                <Linkli href="https://docs.qiancset.com/category/zan-zhu-shang">
                  {t("赞助商")}
                </Linkli>
              </ul>

              <ul className="box4">
                <li className="link_name">
                  <h2>{t("关于")}</h2>
                </li>

                <Linkli href="https://docs.qiancset.com/category/guan-yu-she-qu">
                  {t("关于社区")}
                </Linkli>

                <Linkli href="https://docs.qiancset.com/category/Legal_Terms/cookie-zheng-ce">
                  {t("Cookie政策")}
                </Linkli>

                <Linkli href="https://docs.qiancset.com/category/Legal_Terms/shi-yong-tiao-kuan">
                  {t("使用条款")}
                </Linkli>
                <Linkli href="https://docs.qiancset.com/category/Legal_Terms/yin-si-zheng-cen">
                  {t("隐私政策")}
                </Linkli>
              </ul>
            </div>
            <div className="content2"></div>
          </div>
          <div className="logofooter">
            <Image
              src="/images/icon/QianCset.jpg"
              alt="QianCset"
              className="QianCset"
              height={132} width={400}
            />
          </div>
        </div>


      </div>{/* footer_background */}


      <div className="页眉">
        <div className="版权"> Copyright © 2023 Qiancset 千赛特 {t("版权所有")}</div>
      </div>







    </footer>
  );
}