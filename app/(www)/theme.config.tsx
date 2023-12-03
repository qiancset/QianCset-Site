


import '@/locales/i18n';
import "@/app/(www)/css/Anniu.css";
import "@/app/(www)/css/pages.css";
import "@/app/(www)/css/www.css";
import "@/app/(www)/css/www_dark.css";

import Image from "next/image";
import ModeThemes from "@/UI/ModeThemes/ModeThemes";
import Locales from "@/UI/LocalesButton/Locales";
import Themes from '@/Providers/Themes'
import { FaTwitter } from "react-icons/fa";
import { FaGithub, FaSquareXTwitter } from "react-icons/fa6";
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useSSR } from 'react-i18next';



interface EditLinkProps {
  filePath?: string;
  className?: string;
}

interface EditLinkProps {
  filePath?: string;
  className?: string;
}


const Feedback: React.FC = () => {
  const { t, i18n } = useTranslation();

  return t('给我们反馈问题↗')
};

interface EditLinkProps {
  filePath?: string;
  className?: string;
}
const EditLink: React.FC<EditLinkProps> = ({ filePath, className }) => {
  const { t } = useTranslation();
  return (
    <a href={`https://github.com/Qiancset/Qiancset-Site/tree/dev/${filePath}`} className={className} target="_blank">
      {t('在 GitHub 上编辑此页面')} ↗
    </a>
  );
};


type GitTimestampProps = {
  timestamp: Date;
};
const GitTimestamp: React.FC<GitTimestampProps> = ({ timestamp }) => {
  const { t } = useTranslation();
  return <>{t('更新时间')}:{timestamp.toLocaleString()}</>;
};

const Toc: React.FC = () => {
  const { t } = useTranslation();
  return t('页面目录')
};
const Placeholder: React.FC = () => {
  const { t } = useTranslation();
  return t('搜索文档')
};
const I18N: React.FC = (initialI18nStore, initialLanguage) => {
  useSSR(initialI18nStore, initialLanguage);
  return (
    <>
    </>
  )
};


export default {

  //搜索引擎优化选项
  useNextSeoProps() {
    return {
      titleTemplate: '%s - 千赛特 QianCset Web3'
    }
  },
  head: (
    <>
      <link rel="icon" href="/images/icon/favicon.ico" type="/images/icon" />
    </>
  ),


  //网站徽标的 React 组件
  logo: (<>
    <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}>
      <Image src='/images/icon/favicon.ico' width={40} height={40} alt="logo" />
    </motion.div>
  </>),
  logoLink: '/about',
  //搜索组件的数据
  search: { placeholder: Placeholder },

  //在导航栏上显示链接到项目主页的按钮
  project: {
    link: 'https://github.com/qiancset',
  },

  //显示一个按钮该按钮链接到您的项目论坛或其他社交媒体 导航栏
  chat: {
    link: 'https://twitter.com/qiancset',
    icon: (<FaSquareXTwitter style={{ width: "27.5px", height: "27.5px" }}
    />)
  },

  //自定义导航栏
  navbar: {

    //在最后一个图标之后显示额外的内容
    extraContent: <Themes><Locales/><ModeThemes /></Themes>
  },

  //导航的选项
  //navigation: {},

  //指向文档存储库的链接字符串
  docsRepositoryBase: 'https://github.com/Qiancset/Qiancset-Site/tree/dev',
  //反馈链接
  feedback: { content: Feedback },
  //编辑链接
  editLink: { component: EditLink },

  //呈现上次更新日期的函数
  gitTimestamp: GitTimestamp,


  //侧边栏
  sidebar: {
    defaultMenuCollapseLevel: 2,//指定默认情况下折叠左侧菜单的文件夹级别。
    autoCollapse: false,//自动折叠非活动文件夹
    toggleButton: true,//侧边栏隐藏按钮
  },

  //目录侧边栏
  toc: {
    title: <Toc />,//标题
    //backToTop: true //添加“滚动到顶部”链接
  },



  darkMode: false,


  //国际化
  /*   i18n: [
      { locale: 'zh', text: '中文' },
      { locale: 'en', text: 'English' },
    ], */


  //横幅
  banner: {
    dismissible: true,
    key: '2.0-release',
    text: (
      <a href="https://twitter.com/qiancset" target="_blank">
        🎉 关注 Twitter →
      </a>
    )
  },


  //页脚
  footer: {
    //默认页脚组件的内容。
    text: (<div className="版权">Copyright © 2023 Qiancset 千赛特 版权所有</div>),

    //自定义页脚组件。
    //component: (<div className="版权">Copyright © 2023 Qiancset 千赛特 版权所有</div>)
  },
}

