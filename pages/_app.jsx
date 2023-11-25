
import '../locales/i18n';
import { useSSR } from 'react-i18next';
import "../app/(www)/css/Anniu.css";
import "../app/(www)/css/pages.css";
import "../app/(www)/css/www.css";
import "../app/(www)/css/www_dark.css";

import { Inter } from "next/font/google";
import AntdRegistry from '../Providers/lib/AntdRegistry'
import Antd from '../Providers/Antd'



const inter = Inter({ subsets: ["latin"] });

export default function MyApp({ Component, pageProps,initialI18nStore, initialLanguage }) {
    useSSR(initialI18nStore, initialLanguage);
    return (<div className={inter.className}>

        <AntdRegistry>
         
                <Antd>

                    <Component {...pageProps} />


                </Antd>
            
        </AntdRegistry>


    </div>)
}