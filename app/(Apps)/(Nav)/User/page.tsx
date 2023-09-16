'use client'

import Link from 'next/link';
import { SettingOutlined, RightOutlined, QuestionCircleOutlined, ExperimentOutlined, SolutionOutlined, WalletOutlined } from '@ant-design/icons'
import Rainbowkit from "../../UI/Rainbowkit";
export default function Ppage() {


  return (
    <>

      <div className="Button_User">
        <div className="List_User_left_Button">我的User</div>

        <div className="List_User_right_Button">
          <Rainbowkit />
        </div>
      </div>
      <List />


    </>
  )
}


const data = [
  {
    href: '/',
    text: '资料',
    ico: <div><SolutionOutlined /></div>

  },
  {
    href: '/a',
    text: '测试',
    ico: <div ><ExperimentOutlined /></div>
  },
  {
    href: '/',
    text: '功能',
    ico: <div ><WalletOutlined /></div>
  },
  {
    href: '/Settings',
    text: '设置',
    ico: <div ><SettingOutlined /></div>
  },
  {
    href: '/about',
    text: '关于',
    ico: <div ><QuestionCircleOutlined /></div>,
    target: '_blank' // 添加此属性
  },
];

const List = () => (
  <>

    <ul className='custom_list'>
      {data.map((item) => (
        <li key={item.href}>

          <Link href={item.href} className='List_Link' target={item.target}>
            <div className='List_Item'>

              <div className='List_User_left'>

                <div className='ico_text'>
                  <div className='ico'>{item.ico}</div>
                  <div className="gap"></div>
                  <div className='text'>{item.text}</div>
                </div>

              </div>

              <div className='List_User_right'><RightOutlined /></div>

            </div>
          </Link>

        </li>
      ))}
    </ul>


  </>
);



