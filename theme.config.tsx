import '@/locales/i18n'

import Image from "next/image";
import ModeThemes from "@/UI/ModeThemes/ModeThemes";
import Locales from "@/UI/LocalesButton/Locales";
import Themes from '@/Providers/Themes'
import { FaTwitter } from "react-icons/fa";
import { useTranslation } from 'react-i18next';


const Feedback: React.FC = () => {
  const { t } = useTranslation();
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
  return t('搜索文档...')
};
export default {

  //搜索引擎优化选项
  useNextSeoProps() {
    return {
      titleTemplate: '%s — 千赛特 QianCset Web3'
    }
  },

  //网站徽标的 React 组件
  logo: (<><Image src='/images/icon/QianCset.png' width={120} height={30} alt="logo" /></>),
  //logo组件的链接
  logoLink: '/about',

  //搜索组件的数据
  search: { placeholder: Placeholder },

  //在导航栏上显示链接到项目主页的按钮
  project: {
    link: 'https://github.com/Qiancset/Qiancset-Site'
  },

  //显示一个按钮该按钮链接到您的项目论坛或其他社交媒体 导航栏
  chat: {
    link: 'https://twitter.com/qiancset',
    icon: (<FaTwitter style={{ fontSize: '1.5rem' }} />)
  },

  //自定义导航栏
  navbar: {

    //在最后一个图标之后显示额外的内容
    extraContent: <Themes><Locales /><ModeThemes /></Themes>
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
    defaultMenuCollapseLevel: 1,//指定默认情况下折叠左侧菜单的文件夹级别。
    autoCollapse: true,//自动折叠非活动文件夹
    toggleButton: true,//侧边栏隐藏按钮
  },

  //目录侧边栏
  toc: {

    title: <Toc />,//标题
    backToTop: true //添加“滚动到顶部”链接
  },


  /*   //主题颜色
    primaryHue: { dark: '#ea7411', light: '#ea7411' },
    primarySaturation: { dark: '100%', light: '100%' },
  
    //主题配置
    nextThemes: {
      primaryHue: { dark: '#ea7411', light: '#ea7411' },
      primarySaturation: { dark: '100%', light: '100%' },
    }, */

  //主题切换
  themeSwitch: {
    /*     component:{//用于呈现主题切换的组件。
    
        }, */

    useOptions() {//主题开关中的选项。
      const { t } = useTranslation();

      return {
        light: t('光亮'),
        dark: t('暗黑'),
        system: t('系统')
      }
    }
  },

  //国际化
  //i18n: {},

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
    component: (<div className="版权">Copyright © 2023 Qiancset 千赛特 版权所有</div>)
  },
}

