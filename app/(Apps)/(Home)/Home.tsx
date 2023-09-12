import Link from 'next/link'
import './HomePage.css'
import {AiOutlineAppstore,AiFillAppstore } from "react-icons/ai"
export default function Home() {

   return (
     <>
      <div className='max_Home'>
<div className="HomeHomepage">

 

<Link href='/Dappbrowser'><AiOutlineAppstore className='AiOutlineAppstore'/>Dapp浏览器</Link>

<div className='Home'>

<h1 >
Home
</h1>

</div>

     </div>
  </div>
     </>
   )
}