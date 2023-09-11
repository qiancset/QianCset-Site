'use client'

import Link from "next/link"
import { Collapse } from 'antd';


export default function Ppage() {
  const onChange = (key) => {
    console.log(key);
  }
  
   return (
     <>
<h1>
    User
</h1>


 <Collapse items={items} defaultActiveKey={['1']} onChange={onChange} />;

    <Link href='/about'>关于</Link>
     </>
   )
}

const items = [
  {
    key: '1',
    label: 'This is panel header 1',
    children: <p>A dog is a type of domesticated animal.</p>,
  },
  {
    key: '2',
    label: 'This is panel header 2',
    children: <p>A dog is a type of domesticated animal.</p>,
  },
  {
    key: '3',
    label: 'This is panel header 3',
    children: <p>A dog is a type of domesticated animal.</p>,
  },
];
