'use client'
import { ConfigProvider } from 'antd'
import zhCN from 'antd/locale/zh_CN';


 /* 使用 Design Token */
 const theme = {
    token: {
      "colorPrimary": "#ea7411",
      "borderRadius": 16,
      "wireframe": false
    }
  };
export default function AntdContainer({children}) {
  return (
 
      <ConfigProvider theme={theme} locale={zhCN}>{children}</ConfigProvider>

  )
}
