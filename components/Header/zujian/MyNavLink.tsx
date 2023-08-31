import { usePathname } from 'next/navigation';
import Link from 'next/link';
import './MyNavLink.css';

export default function MyNavLink({ href, children }) {
  const pathname = usePathname();
  let isActive = false;
  
  if (pathname === href) {
    isActive = true;
  } else if (pathname.startsWith(href + '/') && pathname !== '/') {
    isActive = true;
  }
  
  return (
    <Link href={href} prefetch={true}>
      <div className={`nav_link ${isActive ? 'active' : ''}`}>{children}</div>
    </Link>
  );
}