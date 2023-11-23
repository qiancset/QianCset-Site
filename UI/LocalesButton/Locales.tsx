"use client";

import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Button, Modal } from "antd";
import { AiOutlineTranslation } from "react-icons/ai";
import "./Locales.css";



export default function Locales({ }) {
  const { t, i18n } = useTranslation();  
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language);  
    
  const switchLanguage = (lng) => {  
    i18n.changeLanguage(lng);  
    setCurrentLanguage(lng);  
  };  

  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };


  return (<>

    <div className="language-toggle">
      <Button
        type="text"
        onClick={showModal}
        icon={<AiOutlineTranslation />}

      />

    </div>
    <Modal
      title={`当前主题选项`}
      style={{}}
      focusTriggerAfterClose={false}
      mask={true}
      zIndex={1000}
      open={isModalOpen}
      footer={null}
      onOk={handleOk} //点击确定回调
      okText={"确定"} //确定按钮文字
      confirmLoading={false} //确定按钮 loading
      onCancel={handleCancel} //点击遮罩层或右上角叉或取消按钮的回调
      cancelText={"取消"} //取消按钮文字
    >
      <div>
        <div 
        onClick={() => switchLanguage('zh')}  
        className={currentLanguage === 'zh' ? 'theme_button_active' : 'theme_button'}>
          中文 zh-CN Chinese
        </div>
        <div 
        onClick={() => switchLanguage('en')}  
        className={currentLanguage === 'en' ? 'theme_button_active' : 'theme_button'}>
          英文 en-US English
        </div>
      </div>

    </Modal>
  </>

  );
}


