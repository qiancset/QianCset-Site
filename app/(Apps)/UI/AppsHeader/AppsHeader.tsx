"use client";
import Rainbowkit from "@/UI/Rainbowkit";
import "./AppsHeader.css";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import ModeThemes from "@/app/(Router)/components/ModeThemes/ModeThemes";
import Locales from "@/app/(Router)/components/LocalesButton/Locales";

export default function AppsHeader() {
    const pathname = usePathname();

    const [activePage, setActivePage] = useState("");

    useEffect(() => {
        setActivePage(pathname);
    }, [pathname]);

    return (
        <header className="AppsHeader">
            <div className="max_AppsHeader">
                {activePage === "/" && <Home />}

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

                <div className='Header_left_User'><ModeThemes /></div>
                <div className='Header_right_User'><Locales /></div>
            </div>

        </>
    );
}
