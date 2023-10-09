"use client";
import Rainbowkit from "@/UI/Rainbowkit";
import "./AppsHeader.css";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import ModeThemes from "@/app/(www)/components/ModeThemes/ModeThemes";
import Locales from "@/app/(www)/components/LocalesButton/Locales";

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

                {activePage === "/Heart" && <Heart />}

                {activePage === "/Message" && <Message />}

                {activePage === "/User" && <User />}
            </div>
        </header>
    );
}

function Home() {
    return (
        <>

            <div className="Header_center">

                <Image src="/favicon.ico" className="QianCset" alt="header-Q" height={40} width={40} />


            </div>

        </>
    );
}
function Heart() {
    return (
        <>
            <div className="Header_center">
                <p className="Header_P">关注</p>
            </div>
        </>
    );
}

function Message() {
    return (
        <>
            <div className="Header_center">
                <p className="Header_P">消息</p>
            </div>
        </>
    );
}

function User() {
    return (
        <>
            <div className="Header_User">

                <div className='Header_left_User'>
                    <div className="ModeThemes">
                        <ModeThemes />
                    </div>
                </div>
                <div className='Header_right_User'>
                    <div className="Locales">
                        <Locales />
                    </div>
                </div>
            </div>

        </>
    );
}
