'use client'

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import './MyNavLink.css';

export default function MyNavLink({ href, children,newTab = false  }) {

  const pathname = usePathname();

  const className = `nav_link ${pathname === `${href}` ? 'active' : ''}`;  
  return newTab ? (  
    <Link href={href} target="_blank" rel="noopener noreferrer" prefetch={true} passHref >  
      <div className={className}> {children} </div>
    </Link>  
  ) : (  
    <Link href={href} prefetch={true} passHref>  
     <div className={className}> {children} </div>
    </Link>  
  ); 
  
/*   return (
    <Link href={href} prefetch={true} passHref>
      <div className={`nav_link ${pathname === `${href}` ? 'active' : ''}`}>{children}</div>
    </Link>
  ); */
}