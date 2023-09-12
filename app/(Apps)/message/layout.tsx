import AppsFooter from '@/Component/AppsFooter/AppsFooter'
import Headerchildren from '@/Component/AppsHeader/Headerchildren'

export default function Mpagelayout({ children }) {
   return (
      <>
         <MpageHeader />
         {children}
         <AppsFooter />
      </>
   )
}

function MpageHeader() {
   return (
      <>
         <Headerchildren>
            <div className="Header_left">
               <h1>消息</h1>
            </div>
         </Headerchildren>
      </>
   );
}