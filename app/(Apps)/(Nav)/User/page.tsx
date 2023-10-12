
import User_List from "./User_List";
import Rainbowkit from "@/UI/Wallet/Rainbowkit";




export default function Ppage() {


  return (
    <div className='User_Page'>

      <div className="Button_User">
        <div className="List_User_left_Button">我的</div>

        <div className="List_User_right_Button">
          <Rainbowkit />
        </div>
      </div>
    
      <User_List />

    </div>
  )
}





