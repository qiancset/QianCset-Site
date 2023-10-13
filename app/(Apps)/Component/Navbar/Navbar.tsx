"use client";
import Link from "next/link";
import "./Navbar.css";

import { usePathname } from 'next/navigation'
import { GoHome, GoHomeFill, GoHeart, GoHeartFill, GoPerson, GoPersonFill } from "react-icons/go";
import { AiOutlineMessage, AiFillMessage } from "react-icons/ai"
import { useTranslation } from 'react-i18next';

export default function Navbar() {
const { t } = useTranslation();
  return (
    <>
  
    <div className="Navbar">

   

       
          <NavLink
            href='/'
            icon={<GoHome className="Navicon" />}
            activeIcon={<GoHomeFill className="Navicon" />}
          >{t('首页')}</NavLink>

          <NavLink
            href='/Concern'
            icon={<GoHeart className="Navicon" />}
            activeIcon={<GoHeartFill className="Navicon" />}
          >{t('关注')}</NavLink>

          <NavLink
            href='/Message'
            icon={<AiOutlineMessage className="Navicon" />}
            activeIcon={<AiFillMessage className="Navicon" />}
          >{t('消息')}</NavLink>

          <NavLink
            href='/My'
            icon={<GoPerson className="Navicon" />}
            activeIcon={<GoPersonFill className="Navicon" />}
          >{t('我的')}</NavLink>
      

      
    </div>

    </>
  );
}


function NavLink({ href, activeIcon, icon, children }) {
  const pathname = usePathname();

  return (
    <div className="Link">

  
    <Link
      className={`nav_link ${pathname === `${href}` ? 'active' : ''}`}
      href={href}
      prefetch={true} passHref
    >
      <div className="NavLink-container">

        <div className="NavLink-left"> 
          {pathname === `${href}` ? activeIcon : icon}
        </div>

        <div className="NavLink-center">
          <p className="Link_children">{children}</p>
        </div>


      </div>
    </Link>


    </div>
  );
}

