import  "@/locales/i18n"; // 引入你的 i18n 配置

import "../app/(www)/css/Anniu.css";
import "../app/(www)/css/pages.css";
import "../app/(www)/css/www.css";
import "../app/(www)/css/www_dark.css";

import { Inter } from "next/font/google";
import AntdRegistry from "../Providers/lib/AntdRegistry";
import Antd from "../Providers/Antd";

const inter = Inter({ subsets: ["latin"] });

export default function MyApp({ Component, pageProps }) {
  return (
    <div className={inter.className}>
      <AntdRegistry>
        <Antd>
          
            <Component {...pageProps} />
    
        </Antd>
      </AntdRegistry>
    </div>
  );
}
