'use client'
import './Home.css'
import { BsHouseCheck, BsHouses, BsHouseUp, BsPinMap } from 'react-icons/bs'

import Link from 'next/link'

export default function layout({ children }) {
    return (
        <>
            <h1>开发中...千赛特租房 Dapp</h1>
            
            <div className='Home_Tabs'>
            <Link href='/house/1' className='TabsButton'><BsHouseCheck />整租</Link>
            <Link href='/house/2' className='TabsButton'><BsHouses />合租</Link>
            <Link href='/house/3' className='TabsButton'><BsPinMap />地图</Link>
            <Link href='/house/4' className='TabsButton'><BsHouseUp />出租</Link>
            </div>

            {children}
        </>
    )
}

