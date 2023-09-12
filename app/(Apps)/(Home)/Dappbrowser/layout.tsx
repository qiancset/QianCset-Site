import Headerchildren from "@/Component/AppsHeader/Headerchildren"
import Rainbowkit from "@/Component/Rainbowkit";


export default function Dappbrowserlayout({children}) {
   return (
    <>
   <DappbrowserHeader />
     {children}
    
    </>
   )
}

function DappbrowserHeader() {
   return (
       <>
       <Headerchildren>
           <div className="Header_left">
               <h1>Dapp browser</h1>
           </div>
           <div className="Header_right">
               <Rainbowkit />
           </div>
           </Headerchildren>
       </>
   );
}