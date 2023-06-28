'use client'
import {  useEffect } from 'react';
import { useTranslation } from 'react-i18next';
export default function Marquee() {

 const { t } = useTranslation();  
    
      useEffect(() => {
    // 用于复制marquee-track中的元素以实现无限循环
    const marqueeTrack = document.querySelector('.marquee-track');
    marqueeTrack.innerHTML += marqueeTrack.innerHTML;

    // 获取marquee-track的宽度
    const marqueeTrackWidth = marqueeTrack.getBoundingClientRect().width;

    // 设置marquee-track的宽度以实现横向滚动
    marqueeTrack.style.width = marqueeTrackWidth + 'px';


  }, []);
    return (
        <div>
            <div className="marquee-container">
                <div className="marquee-track">
                    <div className="marquee-item">Web3</div>
                    <div className="marquee-item">{t('应用')}</div>
                    <div className="marquee-item">{t('市场')}</div>
                    <div className="marquee-item">{t('存储')}</div>
                    <div className="marquee-item">{t('身份')}</div>
                    <div className="marquee-item">{t('科技')}</div>
                    <div className="marquee-item">{t('金融')}</div>
                    <div className="marquee-item">{t('自治组织')}</div>
                    <div className="marquee-item">{t('游戏娱乐')}</div>
                    <div className="marquee-item">{t('社交网络')}</div>
                    <div className="marquee-item">NFT</div>
                    <div className="marquee-item">{t('数据身份')}</div>
                    <div className="marquee-item">{t('数据主权')}</div>

                </div>
            </div>
        </div>
    );
}