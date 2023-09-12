import Link from 'next/link'
import '@/CSS/HomePage.css'
import { AiOutlineAppstore, AiFillAppstore } from "react-icons/ai"
export default function Home() {

   return (
      <>
         <div className='max_Home'>
            <div className="HomeHomepage">



               <Link href='/Dappbrowser'><AiOutlineAppstore className='AiOutlineAppstore' />Dapp浏览器</Link>

               <div className='Home'>

                  <h1 >
                     Home
                  </h1>
<h2>    <Link href='/about' target="_blank">关于</Link></h2>
               </div>

            </div>
         </div>
      </>
   )
}