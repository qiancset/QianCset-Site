import '../app/layout.css'
import "@/css/www.css";
import "@/css/www_dark.css";
import "@/css/Anniu.css";
import { Inter } from "next/font/google";
import AntdRegistry from '@/Providers/lib/AntdRegistry'
import Providers from '@/Providers/Providers'

const inter = Inter({ subsets: ["latin"] });
export default function MyApp({ Component, pageProps }) {

    return (

        <div className={inter.className}>

            <AntdRegistry>

          
                    <Component {...pageProps} />
               

            </AntdRegistry>

        </div>

    )
}