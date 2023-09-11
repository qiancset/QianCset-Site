
import { ClerkProvider } from '@clerk/nextjs'
import { zhCN,esES,frFR,jaJP } from "@clerk/localizations";

export default function Clerk({ children }) {



    return (
        <>
            <ClerkProvider localization={zhCN}>
                {children}
   
            </ClerkProvider>
        </>
    )
}
