"use client";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import { FaCode, FaLaptopCode, FaRegShareSquare, FaUsers } from "react-icons/fa";


export default function HmoeWeb3() {
  const { t } = useTranslation();
  return (
    <>
      <div id="hmoeWeb3">
        <h3 className="h3">
          {t("去中心化社区")}
          <hr className="About_hr" />
        </h3>
        <h3>
          {t("Web3互动交流的区块链世界")}
        </h3>


        <div className="hmoeWeb3_card">

          <div className="hmoeWeb3_box">
            <HmoeWeb3card>
              <div className="feature_card-img">
                <FaLaptopCode className="fa_icon_4" />
              </div>
              <p>{t("Web3技术解决方案")}</p>
            </HmoeWeb3card>

            <HmoeWeb3card>
              <div className="feature_card-img">
                <FaRegShareSquare className="fa_icon_4" />
              </div>
              <p>{t("分享想法和经验")}</p>
            </HmoeWeb3card>
          </div>

          <div className="hmoeWeb3_box">
            <HmoeWeb3card>
              <div className="feature_card-img">
                <FaCode className="fa_icon_4" />
              </div>
              <p>{t("用技术推动web3发展")}</p>
            </HmoeWeb3card>

            <HmoeWeb3card>
              <div className="feature_card-img">
                <FaUsers className="fa_icon_4" />
              </div>
              <p>{t("学习交流web3的社区")}</p>
            </HmoeWeb3card>
          </div>

        </div>





      </div>
    </>
  );
}
function HmoeWeb3card({ children }) {
  return <div className="feature_card">{children}</div>;
}
