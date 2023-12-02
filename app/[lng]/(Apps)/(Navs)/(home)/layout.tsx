'use client'
import './Home.css'
import { BsHouseCheck, BsHouses, BsHouseUp, BsPinMap } from 'react-icons/bs'

import Link from 'next/link'
import Alert from './_home_c/Alert'
export default function layout({ children,params: { lng }}) {
    return (
        <>
         <Link href={`/${lng}/second-page`}>
        second page
      </Link>
            <Alert />

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

