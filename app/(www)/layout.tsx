
import './css/www.css'
import './css/www_dark.css'
import './css/Anniu.css'
import './css/pages.css'
import Header from './components/Header/Header'



export default function layout({ children }) {
  return (
    <>
      <Header />
      <div style={{ marginTop: '65px' }}></div>
      {children}
    </>
  )
}