import './Home_Tabs.css'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { BsHouseCheck, BsHouses, BsHouseUp, BsPinMap } from 'react-icons/bs'
export default function Home_Tabs() {
    const pathname = usePathname();
    return (
        <>
            <div className='Home_Tabs'>
                <Link href='/house/1' className={`TabsButton ${pathname === `/house/1` ? 'active' : ''}`}><BsHouseCheck />整租</Link>
                <Link href='/house/2' className={`TabsButton ${pathname === `/house/2` ? 'active' : ''}`}><BsHouses />合租</Link>
                <Link href='/house/3' className={`TabsButton ${pathname === `/house/3` ? 'active' : ''}`}><BsPinMap />地图</Link>
                <Link href='/house/4' className={`TabsButton ${pathname === `/house/4` ? 'active' : ''}`}><BsHouseUp />出租</Link>
            </div>
        </>
    )
}