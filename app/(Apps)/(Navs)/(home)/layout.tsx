'use client'
import Alert from './_home_c/Alert'
import Home_Tabs from './_home_c/Home_Tabs'
export default function layout({ children }) {
    return (
        <>
            <Alert />
            <Home_Tabs />
            {children}
        </>
    )
}

