'use client'

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import './MyNavLink.css';
import { useEffect, useState } from 'react';

export default function MyNavLink({ href, children }) {
  const [isActive, setIsActive] = useState(false);
  const pathname = usePathname();
  const isActiveLink = pathname === href;

  useEffect(() => {
    setIsActive(isActiveLink);
  }, [isActiveLink]);
  
  return (
    <Link href={href} prefetch={true} passHref>
      <div className={`nav_link ${isActive ? 'active' : ''}`}>{children}</div>
    </Link>
  );
}