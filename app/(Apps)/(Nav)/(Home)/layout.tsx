'use client'

import Link from "next/link"


export default function layout({ children }) {
    return (
        <>
{/*         <p><Link href='/'>Home</Link></p>
            <p><Link href='/Home/A'>A</Link></p>
            <p><Link href='/Home/B'>B</Link></p>
            <p><Link href='/Home/C'>C</Link></p> */}
            {children}
        </>
    )
}