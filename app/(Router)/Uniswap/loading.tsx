"use client";


import React, { useState } from 'react';
import {Spin,Space  } from 'antd';


const Loading: React.FC = () => {
  const [active] = useState(true);



  return (
    <>
    <div style={{ height: '6vh' }} />
    <div className='loading'>
    <Space direction="vertical" style={{ width: '100%' }}>
      
      <Spin tip="加载中...Loading..." size="large">
        <div className="content" />
      </Spin>
      </Space>


    </div>
    </>
  );
};

export default Loading;