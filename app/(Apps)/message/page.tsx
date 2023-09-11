'use client'
import './TextArea.css'
import React, { useState } from 'react';
import { IoSendOutline } from "react-icons/io5"


import { Input } from 'antd';


const { TextArea } = Input;
export default function Mpage() {
  const [value, setValue] = useState('');
  return (
    <div className='page'>
      <div className='Mpage'>

      </div>

      <div className='message'>

    
          <TextArea
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Controlled autosize"
            autoSize={{
              minRows: 2,
              maxRows: 3,
            }}
            className='TextArea'
      
          />
       
   
          <IoSendOutline className='IoSendOutline'/>
      

      </div>
    </div>
  )
}