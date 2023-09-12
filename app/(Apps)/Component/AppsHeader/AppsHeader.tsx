"use client";
import Rainbowkit from "@/Component/Rainbowkit";
import "./AppsHeader.css";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";

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
                <Image
                    src="/images/icon/QianCset.jpg"
                    className="QianCset"
                    alt="header-Q"
                    height={132}
                    width={400}
                />
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
            <div className="Header_center">
                <p className="Header_P">我的</p>
            </div>
            <div className="Header_right">
                <Rainbowkit />
            </div>
        </>
    );
}
