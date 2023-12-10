/* eslint-disable @next/next/no-img-element */
"use client";
import Image from "next/image";
import "./footer.css";

import Link from "next/link";
import { useTranslation } from "react-i18next";
import { FaDiscord, FaGithub, FaQq, FaTiktok, FaTwitter } from "react-icons/fa";

function Linkname({ children }) {
  return (
    <div className="link_name">
      <h2>{children}</h2>
    </div>
  );
}
function Linkli({ children, href }) {
  return (
    <Link href={`/docs${href}`}>
      {children}
    </Link>
  );
}

function SocialMedia({ href, faicon }) {
  return (
    <>
      <Link href={href} target="_blank" rel="noopener noreferrer">
        <i>{faicon}</i>
      </Link>
    </>
  );
}

export default function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="footer">
      <div className="footer_background">



        <div className="social-media">
          <SocialMedia
            href="https://twitter.com/qiancset"
            faicon={<FaTwitter />}
          />
          <SocialMedia
            href="https://www.tiktok.com/@qiancset"
            faicon={<FaTiktok />}
          />
          <SocialMedia
            href="https://discord.gg/pMzB7fSs9E"
            faicon={<FaDiscord />}
          />
          <SocialMedia
            href="https://pd.qq.com/s/8z8x37o4v"
            faicon={<FaQq />}
          />
          <SocialMedia
            href="https://github.com/Qiancset"
            faicon={<FaGithub />}
          />

        </div>



        <div id="ff" className="content">
          <div className="link_boxes">

            <div>
              <Linkname>{t("产品")}</Linkname>

              <Link href="/">Qiancset</Link>
            </div>

            <div>
              <Linkname>{t("介绍")}</Linkname>

              <Linkli href="/guide">
                {t("入门指南")}
              </Linkli>

              <Linkli href="/whitepaper" >
                {t("白皮书")}
              </Linkli>
            </div>

            <div>
              <Linkname>{t("服务")}</Linkname>

              <Linkli href="/TechnicalProblem">
                {t("技术问题")}
              </Linkli>

              <Linkli href="/JoinTheContribution">
                {t("加入贡献")}
              </Linkli>

              <Linkli href="/he-zuo">
                {t("合作")}
              </Linkli>

              <Linkli href="/zan-zhu-shang">
                {t("赞助商")}
              </Linkli>
            </div>

            <div>
              <Linkname>{t("关于")}</Linkname>

              <Linkli href="/guan-yu-she-qu">
                {t("关于社区")}
              </Linkli>

              <Linkli href="/cookie_zheng_ce">
                {t("Cookie政策")}
              </Linkli>

              <Linkli href="/shi-yong-tiao-kuan">
                {t("使用条款")}
              </Linkli>

              <Linkli href="/yin-si-zheng-ce">
                {t("隐私政策")}
              </Linkli>
            </div>


          </div>
        </div>




      </div>{/* footer_background */}

      <div className="logofooter">
        <Image
          src="/images/icon/QianCset.png"
          alt="QianCset"
          className="QianCset"
          width={600} height={150}
        />
      </div>

      <div className="页眉">
        <div className="版权"> Copyright © 2023 Qiancset 千赛特 {t("版权所有")}</div>
      </div>







    </footer>
  );
}
