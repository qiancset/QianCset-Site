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
            <header className='AppsHeader'>
                <div className="max_AppsHeader">

                    {pathname === "/" && <Home />}
                    {pathname.startsWith("/Home") && <Home />}
                    {pathname === "/Concern" && <Concern />}
                    {pathname === "/Message" && <Message />}
                    {pathname === "/My" && <My />}

                    <HeaderChildern />

                </div>
            </header>

        </>
    );
}


function HeaderChildern() {
    const pathname = usePathname();
    return (
        <>
            {pathname === "/Dappbrowser" &&
                <div className="Header_center">
                    <h1 className="Header_P">Dapp 浏览器</h1>
                </div>
            }
            {pathname === "/Settings" &&
                <div className="Header_center">
                    <h1>Settings</h1>
                </div>
            }


        </>
    );
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
                <div className='Header_My'>
                    <Locales />
                    <ModeThemes />
                </div>
            </div>

        </>
    );
}


