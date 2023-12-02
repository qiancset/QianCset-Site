import '@/CSS/theme/Apps.css'
import '@/CSS/theme/Apps_dark.css'
import '@/CSS/layout_Apps.css'
import './layout_Nav.css'
import AppsHeader from '@/Component/AppsHeader/AppsHeader'
import Navbar from '@/Component/Navbar/Navbar'

export default function AppsLayout({ children }) {
    return (
        <div>




                <AppsHeader />


            <div className='layout_Nav'>
                <div className="appspage-container">

                    <div className="appspage-left">
                        <Navbar />
                    </div>

                  
                    <div className="appspage-right">
                        {children}
                    </div>
                   

                </div>
            </div>


        </div>
    )
}