import '@/CSS/theme/Apps.css'
import '@/CSS/theme/Apps_dark.css'
import '@/CSS/layout_Apps.css'
import Loading from "./loading";
import { Suspense } from "react";

export default function AppsLayout({ children }) {
    return (
        <div>
       

       
                <Suspense fallback={<Loading />}>
                    {children}
                </Suspense>

      
        </div>
    )
}