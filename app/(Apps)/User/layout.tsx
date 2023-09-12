import AppsFooter from '@/Component/AppsFooter/AppsFooter'
import Headerchildren from '@/Component/AppsHeader/Headerchildren';
import './User.css'
import Rainbowkit from '@/Component/Rainbowkit';


export default function Userlayout({children}) {
   return (
    <>
    
     <div className="User">
     <UserHeader />
     {children}
     </div>
     <AppsFooter />
    </>
   )
}

function UserHeader() {
   return (
      <>
         <Headerchildren>
         <div className="Header_left">
                <h1>我的</h1>
            </div>
            <div className="Header_right">
                <Rainbowkit />
            </div>
         </Headerchildren>
      </>
   );
}