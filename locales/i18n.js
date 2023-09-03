'use client'
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './en.json'
import zh from './zh.json'
import fr from './fr.json'
import ja from './ja.json'

// 配置json的格式
const resources = {
  en,zh,fr,ja
};



export default i18next

.use(Backend)           //后端来加载来自服务器的翻译，
.use(initReactI18next)  // 绑定 React-i18 旁边的实例
.use(LanguageDetector)  // 用于检测用户语言的语言检测器。将 i18n 实例传递给initReactI18next
  

.init({             // 初始化 i18next
resources,            //获取json
lng: 'zh',           // 指定默认的语言中文（zh）。如果启动时未指定语言，则将默认使用此语言。
fallbackLng: 'en',    // 如果指定的语言不存在，则默认使用这个
debug: true,
interpolation: {escapeValue: false,},//反应不需要，因为它默认转义

  });

