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

                {activePage === "/message" && <Message />}

                {activePage === "/User" && <User />}


            </div>
        </header>
    );
}

function Home() {
    return (
        <>
            <div className="Header_center">
            <Image src="/images/icon/QianCset.jpg" className="QianCset" alt="header-Q" height={132} width={400}/>
            </div>
        </>
    );
}
function Heart() {
    return (
        <>
            <div className="Header_left">
                <h1>关注</h1>
            </div>
        </>
    );
}

function Message() {
    return (
        <>
            <div className="Header_left">
                <h1>消息</h1>
            </div>
        </>
    );
}

function User() {
    return (
        <>
            <div className="Header_left">
                <h1>我的</h1>
            </div>
            <div className="Header_right">
                <Rainbowkit />
            </div>

        </>
    );
}