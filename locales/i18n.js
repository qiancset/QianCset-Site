'use client'


import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './en.json'
import zh from './zh.json'

// 配置json的格式
const resources = {
  en,zh
};



export default i18next
.use(initReactI18next)  // 绑定 React-i18 旁边的实例
.init({             // 初始化 i18next

resources,            //获取json
lng: 'zh',           // 指定默认的语言中文（zh）。如果启动时未指定语言，则将默认使用此语言。
fallbackLng: 'zh',    // 如果指定的语言不存在，则默认使用这个
debug: false,

  });

