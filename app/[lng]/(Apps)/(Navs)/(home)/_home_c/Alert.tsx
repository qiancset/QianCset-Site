import React from 'react';
import { Alert, Space } from 'antd';
import { GoAlert } from "react-icons/go";
const onClose = (e) => {
  console.log(e, 'I was closed.');
};
const App = () => (
  <Space
    direction="vertical"
    style={{
      width: '100%',
    }}
  >

<Alert message="开发中... 千赛特租房 Dapp" type="info" showIcon />
  </Space>
);
export default App;