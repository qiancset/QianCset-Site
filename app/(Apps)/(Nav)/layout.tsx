import AppsHeader from '@/Component/AppsHeader/AppsHeader'
import Navbar from '@/Component/Navbar/Navbar'
import './layout.css'

export default function Navlayout({ children }) {
   return (
      <>



         <AppsHeader />




         <div className="appspage-container">

            <div className="appspage-left">
               <Navbar />
            </div>

            <div className="appspage-right">
               <div className='max-width'>
                  {children}
               </div>
            </div>

         </div>



      </>
   )
}