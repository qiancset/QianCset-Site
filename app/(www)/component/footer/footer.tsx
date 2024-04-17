/* eslint-disable @next/next/no-img-element */
"use client";
import Image from "next/image";
import "./footer.css";
//
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { FaDiscord, FaGithub, FaQq, FaTiktok, FaTwitter } from "react-icons/fa";

function SocialMedia({ href, faicon }) {
  return (
    <div className="social_media_div">
      <Link href={href} target="_blank" rel="noopener noreferrer">
        {faicon}
      </Link>
    </div>
  );
}

function Linkli({ children, href }) {
  return (
    <Link href={`/https://docs.qiancset.com/${href}`} className="footer_Link">
      {children}
    </Link>
  );
}


export default function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="footer">
      <div className="footer_max">




        {/*  社交媒体 */}
        <div className="social_media">
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
{/*           <SocialMedia
            href="https://pd.qq.com/s/8z8x37o4v"
            faicon={<FaQq />}
          /> */}
          <SocialMedia
            href="https://github.com/Qiancset"
            faicon={<FaGithub />}
          />

        </div>


        {/* 内容 */}
        <div className="link_boxes">


          <div className="box">
            <h2 className="link_title">{t("产品")}</h2>

            <Link href="/" className="footer_Link">Qiancset</Link>
          </div>


          <div className="box">
            <h2 className="link_title">{t("介绍")}</h2>

            <Linkli href="/guide">
              {t("入门指南")}
            </Linkli>

            <Linkli href="/whitepaper" >
              {t("白皮书")}
            </Linkli>
          </div>


          <div className="box">
            <h2 className="link_title">{t("服务")}</h2>

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


          <div className="box">
            <h2 className="link_title">{t("关于")}</h2>

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






        {/* 大logo */}
        <div className="footer_logo">
          <ThemeImage/>
        </div>






        <div className="页眉">
          <div className="版权"> Copyright © 2023 Qiancset 千赛特 {t("版权所有")}</div>
        </div>






      </div>
    </footer>
  );
}
const ThemeImage = (props) => {
  const { srcLight, srcDark, ...rest } = props

  return (
    <>
      <Image {...rest}
        src="/images/icon/QianCset.png"
        alt="QianCset"
        className={`imgLight QianCset`}
        width={600} height={150}
      />
      <Image {...rest}
        src="/images/icon/QianCset白.png"
        alt="QianCset"
        className={`imgDark QianCset`} 
        width={600} height={150}
      />
    </>
  )
}