"use client";
import Image from 'next/image'
import React, { useState } from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import "./Card.css";
import Dashang from './dashang.png'
import { useTranslation } from 'react-i18next';

function Card({ content }) {
const { t } = useTranslation();
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 5000);
  };
  return (
    <div className="card1">
      <h3>{t('扫码捐赠加密货币')}</h3>
      <Image src={Dashang} alt="dashang" className='card1Image'/>

      <div className='Copy1'>
        <span>{content}</span>

        <div className='Copy2'>
          <CopyToClipboard text={content} onCopy={handleCopy}>
            <button>{copied ? t('已复制') : t('复制地址') }</button>
          </CopyToClipboard>
        </div>

      </div>

    </div>
  );
}

export default Card;
