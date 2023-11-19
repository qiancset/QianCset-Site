'use client'
import './Home.css'
import Link from "next/link"
import { BsHouseCheck, BsHouses, BsHouseUp, BsPinMap } from 'react-icons/bs'
import TabsButton from '@/Component/Button/TabsButton'

export default function layout({ children }) {
    return (
        <>
            <div className='Home_Tabs'>
                <TabsButton text={'整租'} icons={<BsHouseCheck />} fenlei={1} />
                <TabsButton text={'合租'} icons={<BsHouses />} fenlei={2} />
                <TabsButton text={'地图'} icons={<BsPinMap />} fenlei={3} />
                <TabsButton text={'出租'} icons={<BsHouseUp />} fenlei={4} />
            </div>
            <h1>开发中...</h1>
            <h1>千赛特租房 Dapp</h1>
            {children}
        </>
    )
}