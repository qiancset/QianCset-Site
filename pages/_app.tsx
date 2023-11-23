'use client'

import '@/locales/i18n';
import "@/css/pages.css";
import "@/css/www.css";
import "@/css/www_dark.css";
import "@/css/Anniu.css";

import { Inter } from "next/font/google";
import AntdRegistry from '@/Providers/lib/AntdRegistry'
import Antd from '@/Providers/Antd'



const inter = Inter({ subsets: ["latin"] });
export default function MyApp({ Component, pageProps }) {

    return (<div className={inter.className}>

        <AntdRegistry>
         
                <Antd>

                    <Component {...pageProps} />


                </Antd>
            
        </AntdRegistry>


    </div>)
}