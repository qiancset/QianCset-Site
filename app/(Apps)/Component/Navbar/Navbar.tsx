"use client";
import Link from "next/link";
import "./Navbar.css";
import { useTranslation } from 'react-i18next';
import { usePathname, useSearchParams } from 'next/navigation'

import { GoHome, GoHomeFill, GoHeart, GoHeartFill, GoBell, GoBellFill, GoPerson, GoPersonFill } from "react-icons/go";



export default function Navbar() {
  const { t } = useTranslation();
  const pathname = usePathname();


  return (
    <>

      <div className="Navbar">


        <NavLink
          href='/'
          activeHrefs={['/',`/Github/${pathname}`,`/home/${pathname}`,'/home/1','/home/2','/home/3','/home/4',]}
          icon={<GoHome className="Navicon" />}
          activeIcon={<GoHomeFill className="Navicon" />}
        >{t('首页')}</NavLink>

        <NavLink
          href='/concern'
          activeHrefs={['/concern']}
          icon={<GoHeart className="Navicon" />}
          activeIcon={<GoHeartFill className="Navicon" />}
        >{t('关注')}</NavLink>

        <NavLink
          href='/message'
          activeHrefs={['/message']}
          icon={<GoBell className="Navicon" />}
          activeIcon={<GoBellFill className="Navicon" />}
        >{t('消息')}</NavLink>

        <NavLink
          href='/my'
          activeHrefs={['/my', '/dappbrowser', '/function', '/settings','/a',]}
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

