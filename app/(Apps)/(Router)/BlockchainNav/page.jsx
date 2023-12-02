import React from "react";
import "./BlockchainNav.css";

const MenuItem = ({ label, link, icon, children }) => (
  <div className="menu-item">
    <a href={link}>
      {icon && <span className="menu-icon">{icon}</span>}
      <span className="menu-label">{label}</span>
    </a>
    {children && <div className="submenu">{children}</div>}
  </div>
);

const MenuDivider = () => <div className="menu-divider"></div>;

const BlockchainNav = () => (
  <div className="blockchain-nav">
    {menuItems.map((item, index) => {
      if (item.type === "divider") {
        return <MenuDivider key={index} />;
      } else {
        return (
          <MenuItem
            key={item.key}
            label={item.label}
            icon={item.icon}
            children={item.children}
            link={item.link}
          />
        );
      }
    })}
  </div>
);

const menuItems = [
  getItem("入门必备", "1", "🧡", null, "/entry"),
  getItem("热门网站", "2", "🧡", null, "/popular"),
  getItem("区块链钱包", "9", "🧡", null, "/wallet"),
  getItem("数据分析", "8", "🧡", null, "/analytics"),
  getItem("CEX交易所", "3", "🧡", null, "/cex"),

  { type: "divider" },

  getItem("DeFi 金融", "4", "🧡", null, "/defi"),
  getItem("NFT 版权", "5", "🧡", null, "/nft"),
  getItem("Gaming 游戏", "6", "🧡", null, "/gaming"),
  getItem("Meta 元宇宙", "6", "🧡", null, "/meta-universe"),
  getItem("DAO 自治组织", "6", "🧡", null, "/dao"),
  getItem("Social 身份社交", "6", "🧡", null, "/social"),
  getItem("科学技术", "18", "🧡", null, "/science-tech"),

  { type: "divider" },

  getItem("社交媒体", "18", "🧡", null, "/security-audit"),
  getItem("投资孵化机构", "9", "🧡", null, "/investment"),
  getItem("金融财经", "10", "🧡", null, "/finance"),
  getItem("国内媒体", "11", "🧡", null, "/domestic-media"),
  getItem("海外媒体", "12", "🧡", null, "/overseas-media"),
  getItem("推特红人", "13", "🧡", null, "/twitter-influencers"),
  { type: "divider" },

  getItem("技术服务", "16", "🧡", null, "/security-audit"),
  getItem("安全审计", "14", "🧡", null, "/security-audit"),
  getItem("区块链服务", "15", "🧡", null, "/blockchain-service"),
  getItem("矿池及矿机", "16", "🧡", null, "/mining-pools"),
  getItem("云算力平台", "17", "🧡", null, "/cloud-computing"),
];

function getItem(label, key, icon, children, link) {
  return { label, key, icon, children, link };
}

export default BlockchainNav;
