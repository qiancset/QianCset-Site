"use client";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import { FaCode, FaLaptopCode, FaRegShareSquare, FaUsers } from "react-icons/fa";

export default function HmoeWeb3() {
  const { t } = useTranslation();
  return (
    <>
      <div id="hmoeWeb3">



        <div className="hmoeWeb3_card">

          <div className="kapian">
            <HmoeWeb3card>
              <p>
              <FaLaptopCode className="fa_icon_4"/>
             
              </p>
              <h4>{t("Web3技术解决方案")}</h4>
            </HmoeWeb3card>

            <HmoeWeb3card>
              <p>
                <FaRegShareSquare className="fa_icon_4"/>
              </p>
              <h4>{t("分享想法和经验")}</h4>
            </HmoeWeb3card>
          </div>

          <div className="kapian">
            <HmoeWeb3card>
              <p>
                <FaCode className="fa_icon_4"/>
              </p>
              <h4>{t("用技术推动web3发展")}</h4>
            </HmoeWeb3card>

            <HmoeWeb3card>
              <p>
              <FaUsers className="fa_icon_4"/>
            
              </p>
              <h4>{t("学习交流web3的社区")}</h4>
            </HmoeWeb3card>
          </div>

        </div>





      </div>
    </>
  );
}
function HmoeWeb3card({ children }) {
  return <div className="feature-card">{children}</div>;
}