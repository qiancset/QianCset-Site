
import '@/css/www.css'
import '@/css/www_dark.css'
import '@/css/Anniu.css'
import Header from '../component/header/header'



export default function layout({ children }) {
  return (
    <>
      <Header />

      {children}
    </>
  )
}