"use client";

import './AppsHeader.css'
import { usePathname } from "next/navigation";
import Link from 'next/link';
import Image from "next/image";

import { useTranslation } from 'react-i18next';
import ModeThemes from "@/UI/ModeThemes/ModeThemes";
import Locales from "@/UI/LocalesButton/Locales";
import Rainbowkit from "@/UI/Wallet/Rainbowkit";
import { GoArrowLeft, GoGear } from 'react-icons/go';

export default function AppsHeader() {
    const pathname = usePathname();

    return (
        <>
            <header className='AppsHeader'>
                <div className="max_AppsHeader">


                    {pathname === "/" && <Home />}
                    {pathname && pathname.startsWith("/home") && <Home />}
                    {pathname === "/concern" && <Concern />}
                    {pathname === "/message" && <Message />}
                    {pathname === "/my" && <My />}
                    <HeaderChildern />



                </div>

            </header>

        </>
    );
}

// 组件
function Pathname({ href, children }) {
    const pathname = usePathname();
    return pathname === href ? <div className="Header_layout">{children}</div> : null;
}
function BackLink({ href }) {
    return (
        <div className="Header_left">
            <Link href={`${href}`} prefetch={true} passHref>
                <div className="BackLink">
                    <GoArrowLeft />
                </div>
            </Link>
        </div>
    )
}
function QianCset() {
    return (
        <Image src='/favicon.ico' width={40} height={40} className='Header_QianCset' alt="Q" />
    )
}
function RainbowkitPAGE() {
    return (
        <Rainbowkit />
    )
}



// 显示的内容
function HeaderChildern({ }) {
    const pathname = usePathname();

    return (
        <>

            <Pathname href='/dappbrowser'>
                <BackLink href='/my' />
                <div className="Header_center">
                    <p className='Header_P'>Dapp 浏览器</p>
                </div>
                <div className="Header_right"></div>
            </Pathname>

            <Pathname href='/function'>
                <BackLink href='/my' />
                <div className="Header_center">
                    <p className='Header_P'>功能</p>
                </div>
                <div className="Header_right"></div>
            </Pathname>

            <Pathname href='/settings'>
                <BackLink href='/my' />
                <div className="Header_center">
                    <p className='Header_P'>Settings</p>
                </div>
                <div className="Header_right"></div>
            </Pathname>




            {pathname && pathname.startsWith("/Github") &&
                <div className="Header_layout">
                    <BackLink href='/' />
                    <div className="Header_center">
                        <p className='Header_P'>Github存储库</p>
                    </div>
                    <div className="Header_right"></div>
                </div>
            }






        </>
    );
}


function Home() {
    return (
        <div className='Header_layout'>

            <div className='Header_left'>
            <Image src='/favicon.ico' width={40} height={40} alt="Q" />
            </div>

            <div className="Header_center">

            </div>

            <div className="Header_right"><RainbowkitPAGE /></div>

        </div>
    );
}

function Concern() {
    const { t } = useTranslation();
    return (
        <div className='Header_layout'>

            <div className='Header_left'>
                <QianCset />
            </div>

            <div className="Header_center">
                <p className="Header_P">{t('关注')}</p>
            </div>

            <div className="Header_right"></div>

        </div>
    );
}

function Message() {
    const { t } = useTranslation();

    return (

        <div className='Header_layout'>


            <div className='Header_left'>
                <QianCset />
            </div>


            <div className="Header_center">
                <p className="Header_P">{t('消息')}</p>
            </div>

            <div className="Header_right"></div>

        </div>

    );
}

function My() {

    return (
        <div className='Header_layout'>


            <div className='Header_left_My'>
                <QianCset />
            </div>


            <div className="Header_center_My">
                <Locales />
                <ModeThemes />
            </div>
            <div className='Header_right_My'>

                <Rainbowkit />
            </div>

        </div>
    );
}


