'use client'
import { useTranslation } from "react-i18next";
import { GoLinkExternal } from 'react-icons/go';

export default function HmoeWeb3() {
  const { t } = useTranslation();
  return (
    <div>
      <div id="hmoeWeb3">
        <div className="kapian">
          <div className="feature-card">
            <p>
              <i className="fas fa-project-diagram fa-2x"></i>
            </p>
            <h4>{t("Web3技术解决方案")}</h4>
          </div>

          <div className="feature-card">
            <p>
              <i className="fas fa-share-square fa-2x"></i>
            </p>
            <h4>{t("分享你的想法和经验")}</h4>
          </div>
        </div>

        <div className="kapian">
          <div className="feature-card">
            <p>
              <i className="fas fa-code fa-2x"></i>
            </p>
            <h4>{t("用技术推动web3发展")}</h4>
          </div>

          <div className="feature-card">
            <p>
              <i className="fas fa-users fa-2x"></i>
            </p>
            <h4>{t("学习交流web3的社区")}</h4>
          </div>
        </div>

     
          <div>
{/*             <div className="kapian">
              <div className="feature-card">
                
                  <a
                    href="https://app.aragon.org/#/daos/polygon/0xdbdbb86436a7fea70baf8bbecbe0a36f11f23981/dashboard"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                   <h1><button className="Bbutton">{t('前往Aragon')}<GoLinkExternal/></button></h1>
                  </a>
                

                <p className="p-aragon">
                  <i className="fas fa-user-plus fa-2x"></i>
                </p>
                <h4 className="h4-aragon">{t("加入 Aragon DAO社区共同治理")}</h4>
              </div>
            </div> */}

            <div className="social-media1">
              <a
                href="https://pd.qq.com/s/mev662r5"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="Bbutton">
                  <p>
                    <i className="fab fa-qq fa-1x"></i>
                    {t("加入QQ频道")}
                  </p>
                </button>
              </a>

              <a
                href="https://discord.gg/pMzB7fSs9E"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="Bbutton">
                  <p>
                    <i className="fab fa-discord fa-1x"></i>
                    {t("加入Dis频道")}
                  </p>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
   
  );
}
