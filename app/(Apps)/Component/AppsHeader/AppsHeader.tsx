"use client";


import './AppsHeader.css'
import { usePathname } from "next/navigation";

import Image from "next/image";
import ModeThemes from "@/UI/ModeThemes/ModeThemes";
import Locales from "@/UI/LocalesButton/Locales";
import { useTranslation } from 'react-i18next';
export default function AppsHeader() {
    const pathname = usePathname();  
 




    return (
        <>
            {pathname === "/" &&
                <Header >
                    <Home />
                </Header>
            }
            {pathname.startsWith("/Home") &&
                <Header >
                    <Home />
                </Header>
            }
            {pathname === "/Concern" &&
                <Header >
                    <Concern />
                </Header>
            }

            {pathname === "/Message" &&
                <Header >
                    <Message />
                </Header>
            }

            {pathname === "/My" &&
                <Header >
                    <My />
                </Header>
            }


        </>
    );
}
function Header({ children }) {
    return (
        <>
            <header className="AppsHeader">
                <div className="max_AppsHeader">
                    {children}
                </div>
            </header>
        </>
    )
}


function Home() {
    return (
        <>
            <div className="Header_left_home">
                <Image src="/images/icon/QianCset.jpg" className="QianCset_lef" alt="Q" width={120} height={37} />
            </div>

            <div className="Header_center_home">
                <Image src="/favicon.ico" className="QianCset" alt="header-Q" width={40} height={40} />

            </div>

        </>
    );
}
function Concern() {
    const { t } = useTranslation();
    return (
        <>
            <div className="Header_center">
                <p className="Header_P">{t('关注')}</p>
            </div>
        </>
    );
}

function Message() {
    const { t } = useTranslation();
    return (
        <>
            <div className="Header_center">
                <p className="Header_P">{t('消息')}</p>
            </div>
        </>
    );
}

function My() {

    return (
        <>

            <div className='Header_right'>
                <Locales />
                <ModeThemes />
            </div>

        </>
    );
}


