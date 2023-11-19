'use client'
import Link from 'next/link'
import './TabsButton.css'
export default function TabsButton({ icons, text, fenlei }) {
    return (
        <>
            <Link href={`/Home/${fenlei}`} className='TabsButton'>

                {icons}

                <div>{text}</div>

            </Link>
        </>
    )
}