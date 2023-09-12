'use client'
import './TextArea.css'

import { IoSendOutline } from "react-icons/io5"
import React, { useEffect, useState } from 'react';
import { Avatar, Divider, List, Skeleton } from 'antd';

import { Input } from 'antd';


const { TextArea } = Input;
export default function Mpage() {
  const [value, setValue] = useState('');
  return (
    <div className='page'>
      <div className='Mpage'>
      <App />
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


const App = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const loadMoreData = () => {
    if (loading) {
      return;
    }
    setLoading(true);
    fetch('https://randomuser.me/api/?results=10&inc=name,gender,email,nat,picture&noinfo')
      .then((res) => res.json())
      .then((body) => {
        setData([...data, ...body.results]);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  };
  useEffect(() => {
    loadMoreData();
  }, []);
  return (
    <div
      id="scrollableDiv"
      style={{
        height: '80vh',
        overflow: 'auto',
        padding: '0 16px',
        border: '1px solid rgba(140, 140, 140, 0.35)',
      }}
    >

        <List
          dataSource={data}
          renderItem={(item) => (
            <List.Item key={item.email}>
              <List.Item.Meta
                avatar={<Avatar src={item.picture.large} />}
                title={<a href="/">{item.name.last}</a>}
                description={item.email}
              />
              <div>Content</div>
            </List.Item>
          )}
        />
      
    </div>
  );
};
