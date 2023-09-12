import Link from "next/link"

import { SettingOutlined, RightOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
import { Collapse} from 'antd';


const App = () => {
    const [expandIconPosition] = useState('end');  
    
    const genExtra = () => (  
      <SettingOutlined />  
    );  
  
  
  
    const items = [
      {
        key: '1',
        label: <Link href="/">资料</Link>,
        extra: genExtra(),
      },
      {
        key: '2',
        label: <Link href='/'>ok</Link>,
        extra: genExtra(),
      },
      {
        key: '3',
        label: <Link href="/">设置</Link>,
        extra: genExtra(),
      },
    ];
  
    return (
      <>
        <Collapse
         
          expandIconPosition={expandIconPosition}
          items={items}
          destroyInactivePanel={true}
          collapsible={true}
  
        />
      </>
    );
  };
  