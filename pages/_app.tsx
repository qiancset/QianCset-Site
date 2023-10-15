

import { Inter } from "next/font/google";
import AntdRegistry from '@/Providers/lib/AntdRegistry'
import Antd from '@/Providers/Antd'
import Providers from '@/Providers/Providers'
import 'locales/i18n'
const inter = Inter({ subsets: ["latin"] });
export default function MyApp({ Component, pageProps }) {

    return (<div className={inter.className}>

        <AntdRegistry>
     

                <Component {...pageProps} />

        
        </AntdRegistry>


    </div>)
}