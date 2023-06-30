/* eslint-disable @next/next/no-img-element */
'use client'


import { GoLinkExternal } from 'react-icons/go';
import { useTranslation } from 'react-i18next';


export default function Projects() {
	const { t } = useTranslation();
	return (
		<div>
			<div id="projects">
				<h3 className="projectsh3">{t('学习文档')}<hr /></h3>
				<p>{t('点击阅读了解新一代互联网')}</p>
				<div className="work-box">
					<div className="work">
						<div>
							<a href="https://ethereum.org/zh/defi/#what-is-defi" target="_blank" rel="noopener noreferrer" className="card">
								<img className="work-img" src="/images/TU/DeFi.jpg"alt="DeFi"/>

								<div className="work-content"><strong>{t('去中心化金融')} <GoLinkExternal /></strong></div></a>
						</div>
						<div>
							<a href="https://ethereum.org/zh/dao/#what-are-daos" target="_blank" rel="noopener noreferrer" className="card">
								<img className="work-img" src="/images/TU/DAO.jpg"alt="DAO"/>

								<div className="work-content"><strong>{t('去中心化自治组织')} <GoLinkExternal /></strong></div></a>
						</div>
						<div >
							<a href="https://ethereum.org/zh/nft/#what-are-nfts" target="_blank" rel="noopener noreferrer" className="card">
								<img className="work-img" src="/images/TU/NFT.jpg"alt="NFT"/>

								<div className="work-content"><strong>{t('非同质化通证')} <GoLinkExternal /></strong></div></a>
						</div>
						<div>
							<a href="https://ethereum.org/zh/developers/docs/dapps/" target="_blank" rel="noopener noreferrer" className="card">
								<img className="work-img" src="/images/TU/Dapp.jpg"alt="Dapp"/>

								<div className="work-content"><strong>{t('去中心化应用')} <GoLinkExternal /></strong></div></a>
						</div>
						<div >
							<a href="https://ethereum.org/zh/developers/docs/smart-contracts/" target="_blank" rel="noopener noreferrer" className="card">
								<img className="work-img" src="/images/TU/zhineng.jpg"alt="zhineng"/>

								<div className="work-content"><strong>{t('智能合约')} <GoLinkExternal /></strong></div></a>
						</div>
						<div >
							<a href="https://ethereum.org/zh/layer-2/" target="_blank" rel="noopener noreferrer" className="card">
								<img className="work-img" src="/images/TU/Gaming.jpeg"alt="Gaming"/>

								<div className="work-content"><strong>{t('去中心化游戏')} <GoLinkExternal /></strong></div></a>
						</div>
						<div >
							<a href="https://ethereum.org/zh/zero-knowledge-proofs/" target="_blank" rel="noopener noreferrer" className="card">
								<img className="work-img" src="/images/TU/ling.jpg"alt="ling"/>

								<div className="work-content"><strong>{t('零知识证明')} <GoLinkExternal /></strong></div></a>
						</div>

						<div>
							<a href="https://ethereum.org/zh/web3/" target="_blank" rel="noopener noreferrer" className="card">
								<img className="work-img" src="/images/TU/web3.0.jpg"alt="web3.0"/>

								<div className="work-content"><strong>{t('去中心化互联网')} <GoLinkExternal /></strong></div></a>
						</div>


						<a href="https://ethereum.org/zh/wallets/find-wallet/" target="_blank" rel="noopener noreferrer" className="card">
							<img className="work-img" src="/images/TU/web3wallet.jpg"alt="web3wallet"/>

							<div className="work-content"><strong>{t('Web3钱包数字身份')} <GoLinkExternal /></strong></div></a>


					</div>
				</div>




			</div>
		</div>
	);
}