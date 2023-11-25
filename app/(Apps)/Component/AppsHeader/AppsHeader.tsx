"use client";

import './AppsHeader.css'
import { usePathname, useRouter } from "next/navigation";
import Link from 'next/link';
import Image from "next/image";

import { useTranslation } from 'react-i18next';
import ModeThemes from "@/UI/ModeThemes/ModeThemes";
import Locales from "@/UI/LocalesButton/Locales";
import Rainbowkit from "@/UI/Wallet/Rainbowkit";
import { GoArrowLeft, GoGear } from 'react-icons/go';
import { useEffect } from 'react';
import { motion } from "framer-motion"
export default function AppsHeader() {
    const pathname = usePathname();

    return (
        <>
            <header className='AppsHeader'>
                <div className="max_AppsHeader">


                    {pathname === "/" && <Home />}
                    {pathname && pathname.startsWith("/house") && <Home />}
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
        <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
        >
            <Image src='/favicon.ico' width={40} height={40} className='Header_QianCset' alt="Q" />
        </motion.div>
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
            <Pathname href='/a'>
                <BackLink href='/my' />
                <div className="Header_center">
                    <p className='Header_P'>Dapp 浏览器</p>
                </div>
                <div className="Header_right"></div>
            </Pathname>

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

            <Pathname href='/dappbrowser/Uinswap'>
                <BackLink href='/my' />
                <div className="Header_center">
                    <p className='Header_P'>Swap</p>
                </div>
                <div className="Header_right"><RainbowkitPAGE /></div>
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

            {pathname && pathname.startsWith("/zufang") &&
                <div className="Header_layout">
                    <BackLink href='/' />
                    <div className="Header_center">
                        <p className='Header_P'>房屋信息</p>
                    </div>
                    <div className="Header_right"><RainbowkitPAGE /></div>
                </div>
            }





        </>
    );
}


function Home() {
    return (
        <div className='Header_layout'>

            <div className='Header_left'>
                <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    <Image src='/favicon.ico' width={40} height={40} className='Home_QianCset' alt="Q" />
                </motion.div>
            </div>

            <motion.div
                animate={{
                    scale: [1, 2, 2, 1, 1],
                    rotate: [0, 0, 270, 270, 0],
                    borderRadius: ["20%", "20%", "50%", "50%", "20%"],
                }}
            />
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

                <RainbowkitPAGE />
            </div>

        </div>
    );
}


