'use client'
import i18next from 'i18next';
import Backend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import en from '../en.json';
import zh from '../zh.json';
import { locizePlugin } from 'locize';

// 配置json的格式
const resources = {
  en,zh
};



export default i18next
.use(locizePlugin)      // 检测用户语言
.use(LanguageDetector)  // 用于检测用户语言的语言检测器。将 i18n 实例传递给initReactI18next
.use(initReactI18next)  // 绑定 React-i18 旁边的实例
.use(Backend)           //后端来加载来自服务器的翻译，
  

.init({             // 初始化 i18next
resources,            //获取json
lng: 'zh',           // 指定默认的语言中文（zh）。如果启动时未指定语言，则将默认使用此语言。
fallbackLng: 'zh',    // 如果指定的语言不存在，则默认使用这个
debug: true,
interpolation: {escapeValue: false,},//反应不需要，因为它默认转义

  });

