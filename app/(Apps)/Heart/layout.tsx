import AppsFooter from '../Component/AppsFooter/AppsFooter'
import Headerchildren from '../Component/AppsHeader/Headerchildren';


export default function Heartlayout({ children }) {
   return (
      <>
         <HeartHeader />
         {children}
         <AppsFooter />
      </>
   )
}
function HeartHeader() {
   return (
      <>
         <Headerchildren>
            <div className="Header_left">
               <h1>关注</h1>
            </div>
         </Headerchildren>
      </>
   );
}