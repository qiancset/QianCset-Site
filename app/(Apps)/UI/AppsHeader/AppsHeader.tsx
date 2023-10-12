"use client";

import "./AppsHeader.css";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import ModeThemes from "@/app/(www)/components/ModeThemes/ModeThemes";
import Locales from "@/app/(www)/components/LocalesButton/Locales";
import { useTranslation } from 'react-i18next';
export default function AppsHeader() {
    const pathname = usePathname();

    const [activePage, setActivePage] = useState("");

    useEffect(() => {
        setActivePage(pathname);
    }, [pathname]);

    return (
        <header className="AppsHeader">
            <div className="max_AppsHeader">
                {activePage === "/Home" && <Home />}

                {activePage === "/Concern" && <Concern />}

                {activePage === "/Message" && <Message />}

                {activePage === "/User" && <User />}
            </div>


        </header>
    );
}

function Home() {
    return (
        <>
            <div className="Header_left_home">
                <Image src="/images/icon/QianCset.jpg" className="QianCset_lef" alt="Q" width={120} height={37} />
            </div>

            <div className="Header_center_home">
                <Image src="/favicon.ico" className="QianCset" alt="header-Q"width={40} height={40}  />
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

function User() {
    return (
        <>
            <div className="Header_User">


                <div className='Header_left_User'>

                </div>
                <div className='Header_right_User'>
                
                        <Locales />
                        <ModeThemes />

                
                </div>


            </div>

        </>
    );
}
