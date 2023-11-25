

import i18next from 'i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import en from './en.json'
import zh_CN from './zh_CN.json'
//import zh_Hant from './zh_Hant.json'


// 配置json的格式
const resources = {
  en, zh_CN
};


export default i18next
  .use(Backend)
  .use(LanguageDetector)  //i18next-浏览器语言检测器
  .use(initReactI18next)  // 绑定 React-i18 旁边的实例
  .init({             // 初始化 i18next

    resources,            //获取json
    nonExplicitSupportedLngs:true,
    //lng: 'zh_CN',// 指定默认的语言中文（zh）。
    fallbackLng: 'en',  // 如果指定的语言不存在，则默认使用这个
    debug: false,
    react: {
      bindI18n: 'languageChanged',
      useSuspense: true,
    },

    detection: {  
      order: ['localStorage', 'sessionStorage', 'navigator','cookie', 'htmlTag','path', 'default',], // 检测语言设置的顺序  
      lookupQuerystring: 'lng', // 从URL中解析语言代码的参数名  
      lookupCookie: 'lng', // 从Cookie中解析语言代码的参数名  
      lookupSession: 'lng', // 从SessionStorage中解析语言代码的参数名  
      lookupFromPathIndex: 0, // 从路径中解析语言代码的索引位置（0表示第一个）  
      caches: ['localStorage' ], // 缓存检测结果的位置（可选）  
      //excludeCacheFor: ['cib'], // 需要排除缓存的语言代码（可选）  
      cookieMinutes: 1440, // Cookie的有效时间（分钟）（可选）  
      cookieDomain: 'myDomain', // Cookie的域名（可选）  
    },  
  });  
  
// 获取检测到的语言代码并写入HTML的lang属性  
/* const detectedLng = i18next.language;  

if (typeof document !== 'undefined') {  
  document.documentElement.lang = detectedLng;  
} */

