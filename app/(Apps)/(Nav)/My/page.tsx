'use client'
import My_List from "./_My_List/My_List";
import Rainbowkit from "@/UI/Wallet/Rainbowkit";




export default function Ppage() {


  return (
    <div className='My_Page'>

      <div className="My_Button">

        <div className="My_left_Button">
          我的
          </div>

        <div className="My_right_Button">
          <Rainbowkit />
        </div>

      </div>

<div className="My_List">
      <My_List />
</div>


    </div>
  )
}





