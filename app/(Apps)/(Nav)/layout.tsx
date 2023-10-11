import Navbar from '@/UI/Navbar/Navbar'
import AppsHeader from '@/UI/AppsHeader/AppsHeader'
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
               {children}
            </div>
            
         </div>


     
      </>
   )
}