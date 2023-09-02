'use client'

import { ConfigProvider } from 'antd'  
import zhCN from 'antd/locale/zh_CN';  
  


export default function Antd({children}) {  


  return (  
    <ConfigProvider theme={light} locale={zhCN}>{children}</ConfigProvider>  
  );  
}

  
/* 使用 Design Token */  
const light = {  
  "token": {
    "colorPrimary": "#ea7411",
    "borderRadius": 20,
    "wireframe": false,
    "colorInfo": "#ea7411",
    "sizeUnit": 4,
    "sizeStep": 6
  }
};  