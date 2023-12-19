"use client";

import "./AppsHeader.css";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import ModeThemes from "@/gui/ModeThemes/ModeThemes";
import Locales from "@/gui/LocalesButton/Locales";
import Rainbowkit from "@/gui/Wallet/RainbowkitButton";
import { GoArrowLeft } from "react-icons/go";

export default function AppsHeader() {
  const pathname = usePathname();

  return (
    <>
      <div className='AppsHeader'>
        <div className='max_AppsHeader'>
          {pathname === "/" && <Home />}
          {pathname && pathname.startsWith("/house") && <Home />}
          {pathname === "/concern" && <Concern />}
          {pathname === "/message" && <Message />}
          {pathname === "/my" && <My />}
          <HeaderChildern />
        </div>
      </div>
    </>
  );
}

// 组件
function Pathname({ href, children }) {
  const pathname = usePathname();
  return pathname === href ? (
    <div className='Header_layout'>{children}</div>
  ) : null;
}

function BackLink({ href }) {
  return (
    <div className='Header_left'>
      <Link href={`${href}`} prefetch={true} passHref>
        <div className='BackLink'>
          <GoArrowLeft />
        </div>
      </Link>
    </div>
  );
}
function QianCset() {
  return (
    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
      <Image
        src='/favicon.ico'
        width={40}
        height={40}
        className='Header_QianCset'
        alt='Q'
      />
    </motion.div>
  );
}
function RainbowkitPAGE() {
  return <Rainbowkit />;
}

// 显示的内容
function HeaderChildern({}) {
  const pathname = usePathname();

  return (
    <>
      <Pathname href='/a'>
        <BackLink href='/my' />
        <div className='Header_center'>
          <p className='Header_P'>A</p>
        </div>
        <div className='Header_right'></div>
      </Pathname>
      <Pathname href='/BlockchainNav'>
        <BackLink href='/my' />
        <div className='Header_center'>
          <p className='Header_P'>BlockchainNav</p>
        </div>
        <div className='Header_right'></div>
      </Pathname>
      <Pathname href='/dappbrowser'>
        <BackLink href='/my' />
        <div className='Header_center'>
          <p className='Header_P'>Dapp 浏览器</p>
        </div>
        <div className='Header_right'></div>
      </Pathname>

      <Pathname href='/function'>
        <BackLink href='/my' />
        <div className='Header_center'>
          <p className='Header_P'>功能</p>
        </div>
        <div className='Header_right'></div>
      </Pathname>

      <Pathname href='/settings'>
        <BackLink href='/my' />
        <div className='Header_center'>
          <p className='Header_P'>Settings</p>
        </div>
        <div className='Header_right'></div>
      </Pathname>

      <Pathname href='/dappbrowser/Uinswap'>
        <BackLink href='/my' />
        <div className='Header_center'>
          <p className='Header_P'>Swap</p>
        </div>
        <div className='Header_right'>
          <RainbowkitPAGE />
        </div>
      </Pathname>

      {pathname && pathname.startsWith("/Github") && (
        <div className='Header_layout'>
          <BackLink href='/' />
          <div className='Header_center'>
            <p className='Header_P'>Github存储库</p>
          </div>
          <div className='Header_right'></div>
        </div>
      )}

      {pathname && pathname.startsWith("/zufang") && (
        <div className='Header_layout'>
          <BackLink href='/' />
          <div className='Header_center'>
            <p className='Header_P'>房屋信息</p>
          </div>
          <div className='Header_right'>
            <RainbowkitPAGE />
          </div>
        </div>
      )}
      {pathname && pathname.startsWith("/user") && (
        <div className='Header_layout'>
          <BackLink href='/my' />
          <div className='Header_center'>
            <p className='Header_P'>User</p>
          </div>
          <div className='Header_right'>
            <RainbowkitPAGE />
          </div>
        </div>
      )}
    </>
  );
}

function Home() {
  return (
    <div className='Header_layout'>
      <div className='Header_left'>
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <Image
            src='/favicon.ico'
            width={40}
            height={40}
            className='Home_QianCset'
            alt='Q'
          />
        </motion.div>
      </div>

      <motion.div
        animate={{
          scale: [1, 2, 2, 1, 1],
          rotate: [0, 0, 270, 270, 0],
          borderRadius: ["20%", "20%", "50%", "50%", "20%"],
        }}
      />
      <div className='Header_center'>开发中...请勿使用</div>

      <div className='Header_right'>
        <RainbowkitPAGE />
      </div>
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

      <div className='Header_center'>
        <p className='Header_P'>{t("关注")}</p>
      </div>

      <div className='Header_right'></div>
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

      <div className='Header_center'>
        <p className='Header_P'>{t("消息")}</p>
      </div>

      <div className='Header_right'></div>
    </div>
  );
}

function My() {
  return (
    <div className='Header_layout'>
      <div className='Header_left_My'>
        <QianCset />
      </div>

      <div className='Header_center_My'>
        <Locales />
        <ModeThemes />
      </div>
      <div className='Header_right_My'>
        <RainbowkitPAGE />
      </div>
    </div>
  );
}
