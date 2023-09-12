import AppsFooter from '@/UI/AppsFooter/AppsFooter'
import AppsHeader from '@/UI/AppsHeader/AppsHeader'


export default function Heartlayout({ children }) {
   return (
      <>
         <AppsHeader />
         {children}
         <AppsFooter />
      </>
   )
}