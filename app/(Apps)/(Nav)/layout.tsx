import AppsHeader from '@/Component/AppsHeader/AppsHeader'
import Navbar from '@/Component/Navbar/Navbar'
import './layout_Nav.css'

export default function Navlayout({ children }) {
   return (

      <>



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
         
      </>
   )
}