"use client";
import { useTranslation } from "react-i18next";
import Image from "next/image";

export default function HmoeWeb3() {
  const { t } = useTranslation();
  return (
    <>
      <div id="hmoeWeb3">
        <div className="hmoeWeb3_card">
          <div className="kapian">
            <HmoeWeb3card>
              <p>
                <i className="fas fa-project-diagram fa-2x" />
              </p>
              <h4>{t("Web3技术解决方案")}</h4>
            </HmoeWeb3card>

            <HmoeWeb3card>
              <p>
                <i className="fas fa-share-square fa-2x" />
              </p>
              <h4>{t("分享想法和经验")}</h4>
            </HmoeWeb3card>
          </div>

          <div className="kapian">
            <HmoeWeb3card>
              <p>
                <i className="fas fa-code fa-2x" />
              </p>
              <h4>{t("用技术推动web3发展")}</h4>
            </HmoeWeb3card>

            <HmoeWeb3card>
              <p>
                <i className="fas fa-users fa-2x" />
              </p>
              <h4>{t("学习交流web3的社区")}</h4>
            </HmoeWeb3card>
          </div>
        </div>

        <div className="social-media1">
          <a
            href="https://admin.daohaus.fun/#/molochv3/0x89/0xf403bb02187fe7184722f0575e59578e4f649269"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="Bbutton">
              {t("加入Daohaus")} 
              <Image src="/images/COMLOGO/DAOhaus.svg" alt="DAOhaus" height={40} width={40}/>
            </button>
          </a>
        </div>
      </div>
    </>
  );
}
function HmoeWeb3card({ children }) {
  return <div className="feature-card">{children}</div>;
}
