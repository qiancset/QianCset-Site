"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useTranslation } from 'react-i18next';
import { usePathname, useSearchParams } from 'next/navigation'
import "./Navbar.css";

import { GoHome, GoHomeFill, GoHeart, GoHeartFill, GoBell, GoBellFill, GoPerson, GoPersonFill } from "react-icons/go";
import { AiOutlineMessage, AiFillMessage } from "react-icons/ai";





export default function Navbar() {
  const { t } = useTranslation();
  const pathname = usePathname();


  return (
    <>

      <div className={`Navbar`}>


        <NavLink
          href='/'
          activeHrefs={['/', `/Github/${pathname}`, `/house/${pathname}`, '/house/1', '/house/2', '/house/3', '/house/4',]}
          icon={<GoHome className="Navicon" />}
          activeIcon={<GoHomeFill className="Navicon" />}
        >{t('主页')}</NavLink>

        <NavLink
          href='/concern'
          activeHrefs={['/concern']}
          icon={<GoHeart className="Navicon" />}
          activeIcon={<GoHeartFill className="Navicon" />}
        >{t('关注')}</NavLink>

        <NavLink
          href='/message'
          activeHrefs={['/message']}
          icon={<AiOutlineMessage className="Navicon" />}
          activeIcon={<AiFillMessage className="Navicon" />}
        >{t('消息')}</NavLink>

        <NavLink
          href='/my'
          activeHrefs={['/my', '/dappbrowser', '/function', '/settings', '/a',]}
          icon={<GoPerson className="Navicon" />}
          activeIcon={<GoPersonFill className="Navicon" />}
        >{t('我的')}</NavLink>


      </div>

    </>
  );
}


function NavLink({ href, activeIcon, icon, children, activeHrefs }) {
  const pathname = usePathname();
  const className = `nav_link ${activeHrefs.includes(pathname) ? 'active' : ''}`

  return (
    <div className="Link">

      <Link
        className={className}
        href={href}
        prefetch={true} passHref
      >


        <div className="NavLink-container">


            <div className="NavLink-left">
              {activeHrefs.includes(pathname) ? activeIcon : icon}
            </div>
 

          <div className="NavLink-center">
            <p className="Link_children">{children}</p>
          </div>

        </div>

      </Link>


    </div>
  );
}

