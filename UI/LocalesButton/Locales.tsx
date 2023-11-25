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
      title={t('选择语言')}
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
          onClick={() => switchLanguage('zh_CN')}
          className={currentLanguage === 'zh_CN' ? 'theme_button_active' : 'theme_button'}>
          简体中文
        </div>

        <div
          onClick={() => switchLanguage('zh_TW')}
          className={currentLanguage === 'zh_TW' ? 'theme_button_active' : 'theme_button'}>
          繁体中文
        </div>

        <div
          onClick={() => switchLanguage('en')}
          className={currentLanguage === 'en' ? 'theme_button_active' : 'theme_button'}>
          English
        </div>

        <div
          onClick={() => switchLanguage('fr')}
          className={currentLanguage === 'fr' ? 'theme_button_active' : 'theme_button'}>
          Français
        </div>

        <div
          onClick={() => switchLanguage('ko')}
          className={currentLanguage === 'ko' ? 'theme_button_active' : 'theme_button'}>
          한국어
        </div>

        <div
          onClick={() => switchLanguage('ja')}
          className={currentLanguage === 'ja' ? 'theme_button_active' : 'theme_button'}>
          日本語
        </div>

        <div
          onClick={() => switchLanguage('ar')}
          className={currentLanguage === 'ar' ? 'theme_button_active' : 'theme_button'}>
          بالعربية
        </div>

        <div
          onClick={() => switchLanguage('bt')}
          className={currentLanguage === 'bt' ? 'theme_button_active' : 'theme_button'}>
          Português
        </div>




      </div>
    </Modal>
  </>

  );
}


