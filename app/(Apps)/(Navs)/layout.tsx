
import './layout_Nav.css'

import Navbar from '@/Component/Navbar/Navbar'

export default function AppsLayout({ children }) {
    return (
        <>


           


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


        </>
    )
}