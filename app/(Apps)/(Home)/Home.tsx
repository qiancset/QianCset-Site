import Link from 'next/link'
import './AppsHomePage.css'
import {AiOutlineAppstore,AiFillAppstore } from "react-icons/ai"
export default function Apps() {

   return (
     <>
      <div className='max_Home'>
<div className="AppsHomepage">

 

<Link href='/Dappbrowser'><AiOutlineAppstore className='AiOutlineAppstore'/>Dapp浏览器</Link>

<div className='Home'>

<h1 >
Apps Home
</h1>

</div>

     </div>
  </div>
     </>
   )
}