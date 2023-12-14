
import './Home_Tabs.css'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { BsHouseCheck, BsHouses, BsHouseUp, BsPinMap } from 'react-icons/bs'
export default function Home_Tabs() {
    const pathname = usePathname();
    return (
        <>
            <div className='Home_Tabs'>
                <Link href='/house/1' className={`TabsButton ${pathname === `/house/1` ? 'active' : ''}`}><BsHouseCheck /><p>整租</p></Link>
                <Link href='/house/2' className={`TabsButton ${pathname === `/house/2` ? 'active' : ''}`}><BsHouses /><p>合租</p></Link>
                <Link href='/house/3' className={`TabsButton ${pathname === `/house/3` ? 'active' : ''}`}><BsPinMap /><p>地图</p></Link>
                <Link href='/house/4' className={`TabsButton ${pathname === `/house/4` ? 'active' : ''}`}><BsHouseUp /><p>出租</p></Link>
            </div>
        </>
    )
}