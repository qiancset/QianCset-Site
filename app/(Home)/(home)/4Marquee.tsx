"use client";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
export default function Marquee() {
  const { t } = useTranslation();

  useEffect(() => {
    // 用于复制marquee-track中的元素以实现无限循环
    const marqueeTrack = document.querySelector(".marqueeTrack");
    marqueeTrack.innerHTML += marqueeTrack.innerHTML;

    // 获取marquee-track的宽度
    const marqueeTrackWidth = marqueeTrack.getBoundingClientRect().width;

    // 设置marquee-track的宽度以实现横向滚动
    marqueeTrack.style.width = marqueeTrackWidth + "px";
  }, []);
  return (
    <div>
      <div className="marqueeContainer">
        <div className="marqueeTrack">
          <Marqueeitem>Web3</Marqueeitem>
          <Marqueeitem>{t("应用")}</Marqueeitem>
          <Marqueeitem>{t("市场")}</Marqueeitem>
          <Marqueeitem>{t("存储")}</Marqueeitem>
          <Marqueeitem>{t("身份")}</Marqueeitem>
          <Marqueeitem>{t("科技")}</Marqueeitem>
          <Marqueeitem>{t("金融")}</Marqueeitem>
          <Marqueeitem>{t("自治组织")}</Marqueeitem>
          <Marqueeitem>{t("游戏娱乐")}</Marqueeitem>
          <Marqueeitem>{t("社交网络")}</Marqueeitem>
          <Marqueeitem>NFT</Marqueeitem>
          <Marqueeitem>{t("数据身份")}</Marqueeitem>
          <Marqueeitem>{t("数据主权")}</Marqueeitem>
        </div>
      </div>
    </div>
  );
}
function Marqueeitem({ children }) {
  return <div className="marqueeItem">{children}</div>;
}
