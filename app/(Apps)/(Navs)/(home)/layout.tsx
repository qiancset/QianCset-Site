'use client'
import './Home.css'
import { BsHouseCheck, BsHouses, BsHouseUp, BsPinMap } from 'react-icons/bs'

import Link from 'next/link'

export default function layout({ children }) {
    return (
        <>
            <div className='Home_Tabs'>
            <Link href='/home/1' className='TabsButton'><BsHouseCheck />整租</Link>
            <Link href='/home/2' className='TabsButton'><BsHouses />合租</Link>
            <Link href='/home/3' className='TabsButton'><BsPinMap />地图</Link>
            <Link href='/home/4' className='TabsButton'><BsHouseUp />出租</Link>
            </div>



            <h1>开发中...</h1>
            <h1>千赛特租房 Dapp</h1>
            {children}
        </>
    )
}

