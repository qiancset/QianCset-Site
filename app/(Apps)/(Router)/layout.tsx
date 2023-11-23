import AppsHeader from "@/Component/AppsHeader/AppsHeader";



export default function layout({children}) {
   return (
     <>
     <AppsHeader />
     <div style={{marginTop: '65px'}}></div>

     {children}
     </>
   )
}