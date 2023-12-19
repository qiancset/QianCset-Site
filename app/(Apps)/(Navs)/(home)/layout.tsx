'use client'

import Home_Tabs from './_home_c/Home_Tabs'
export default function layout({ children }) {
    return (
        <>
          
            <Home_Tabs />
            {children}
        </>
    )
}

