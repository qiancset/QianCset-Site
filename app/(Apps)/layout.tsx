import '@/CSS/theme/Apps.css'
import '@/CSS/theme/Apps_dark.css'
import Loading from "./loading";
import { Suspense } from "react";

export default function AppsLayout({ children }) {
    return (
        <>
            <Suspense fallback={<Loading />}>

                {children}
            </Suspense>
            
  
        </>
    )
}