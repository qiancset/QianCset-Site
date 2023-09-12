import AppsFooter from '@/Component/AppsFooter/AppsFooter'
import AppsHeader from '@/Component/AppsHeader/AppsHeader'


export default function Heartlayout({ children }) {
   return (
      <>
         <AppsHeader />
         {children}
         <AppsFooter />
      </>
   )
}