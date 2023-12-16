import '@/CSS/Apps.css'
import '@/CSS/Apps_dark.css'
import AppsHeader from "@/app/(Apps)/Component/AppsHeader/AppsHeader";

export default function layout({ children }) {
    return (
        <div className="Apps">
            <AppsHeader />
            <div style={{ marginTop: '65px' }}></div>
            <div className='Router'>

                {children}
            </div>
        </div>
    )
}