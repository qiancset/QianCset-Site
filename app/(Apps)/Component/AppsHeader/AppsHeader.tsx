"use client";

import './AppsHeader.css'
import { usePathname } from "next/navigation";
import Link from 'next/link';
import Image from "next/image";
import { useTranslation } from 'react-i18next';
import ModeThemes from "@/UI/ModeThemes/ModeThemes";
import Locales from "@/UI/LocalesButton/Locales";

import { GoArrowLeft, GoGear } from 'react-icons/go';

export default function AppsHeader() {
    const pathname = usePathname();

    return (
        <>
            <header className='AppsHeader'>
                <div className="max_AppsHeader">


                    {pathname === "/" && <Home />}
                    {pathname && pathname.startsWith("/Home") && <Home />}
                    {pathname === "/Concern" && <Concern />}
                    {pathname === "/Message" && <Message />}
                    {pathname === "/My" && <My />}
                    <HeaderChildern />



                </div>

            </header>

        </>
    );
}

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
    return <Image src="/images/icon/QianCset.png" alt="Q" width={120} height={30} />
}

function HeaderChildern({ }) {
    const pathname = usePathname();

    return (
        <>
            <Pathname href='/Dappbrowser'>
                <BackLink href='/My' />

                <div className="Header_center">
                    <p className='Header_P'>Dapp 浏览器</p>
                </div>

                <div className="Header_right"></div>

            </Pathname>

            <Pathname href='/Settings'>
                <BackLink href='/My' />

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
        <>
            <div className="Header_left_home">
                <QianCset />
            </div>

            <div className="Header_center_home">
                <Image src="/favicon.ico" alt="header-Q" width={40} height={40} />

            </div>

        </>
    );
}

function Concern() {
    const { t } = useTranslation();
    return (
        <div className='Header_layout'>

            <div className="Header_left_home">
                <QianCset />
            </div>

            <div className="Header_center">
                <p className="Header_P">{t('关注')}</p>
            </div>

        </div>
    );
}

function Message() {
    const { t } = useTranslation();
    return (
        <>
            <div className='Header_layout'>

                <div className="Header_left_home">
                    <QianCset />
                </div>

                <div className="Header_center">
                    <p className="Header_P">{t('消息')}</p>
                </div>

            </div>
        </>
    );
}

function My() {

    return (
        <div className='Header_layout'>

            <div className="Header_left_home">
                <QianCset />
            </div>

            <div className="Header_left"></div>
            <div className="Header_center"></div>
            <div className='Header_right_My'>
                <Locales />
                <ModeThemes />
                {/*                 <div>
                    <GoGear className='Header_right_GoGear' />
                </div> */}
            </div>

        </div>
    );
}


