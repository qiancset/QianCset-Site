/* eslint-disable @next/next/no-img-element */
'use client'
import './Footer.css'
import Link from "next/link"
import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation();
  return (
    <footer className='.copyright'>


      <div className="ffaa">
        <div id="ff" className="content">




          <div className="link_boxes">

            <ul className="box1">
              <li className="link_name"><h2>{t('产品')}</h2></li>

              <li><Link href="/" >{t('开发中')}...</Link></li>


            </ul>

            <ul className="box2">
              <li className="link_name"><h2>{t('介绍')}</h2></li>
              <li ><Link target="_blank" href="https://docs.qiancset.com/ru-men-zhi-nan">
                {t('入门指南')}
              </Link></li>
              <li ><Link target="_blank" href="https://docs.qiancset.com/category/%E5%AD%A6%E4%B9%A0%E6%96%87%E6%A1%A3/">
                {t('学习文档')}
              </Link></li>
              <li ><Link target="_blank" href="https://docs.qiancset.com/bai-pi-shu">
                {t('白皮书')}
              </Link></li>
              <li ><Link target="_blank" href='https://docs.qiancset.com/jia-mi-huo-bi'>
                {t('加密货币')}
              </Link></li>
            </ul>





            <ul className="box3">
              <li className="link_name">
                <h2>{t('服务')}</h2>
              </li>
              <li ><Link target="_blank" href="https://docs.qiancset.com/Serve/chuang-ye-rong-zi">
                {t('创业融资')}
              </Link></li>
              <li ><Link target="_blank" href="https://docs.qiancset.com/Serve/xun-zhao-tuan-dui" >
                {t('寻找团队')}
              </Link></li>
              <li ><Link target="_blank" href="https://docs.qiancset.com/Serve/ji-shu-wen-ti">
                {t('技术问题')}
              </Link></li>
              <li ><Link target="_blank" href="https://docs.qiancset.com/Serve/jia-ru-gong-xian">
                {t('加入贡献')}
              </Link></li>
            </ul>

            <ul className="box4">
              <li className="link_name">
                <h2>{t('关于')}</h2>
              </li>
              <li ><Link target="_blank" href=" https://docs.qiancset.com/category/guan-yu-she-qu" >
                {t('关于社区')}
              </Link></li>

              <li ><Link target="_blank" href=" https://docs.qiancset.com/category/he-zuo">
                {t('合作')}
              </Link></li>

              <li ><Link target="_blank" href="https://docs.qiancset.com/category/zan-zhu-shang">
                {t('赞助商')}
              </Link></li>


              <li ><Link target="_blank" href=" https://docs.qiancset.com/category/Legal_Terms/cookie-zheng-ce">
                {t('Cookie政策')}
              </Link></li>
              <li ><Link target="_blank" href=" https://docs.qiancset.com/category/Legal_Terms/shi-yong-tiao-kuan">
                {t('使用条款')}
              </Link></li>
              <li ><Link target="_blank" href=" https://docs.qiancset.com/category/Legal_Terms/yin-si-zheng-ce">
                {t('隐私政策')}
              </Link></li>
            </ul>
          </div>
          <div className="content2">

          </div>


        </div>
      </div>

      <div className="ffbb">
        <p><img src={'/icon/Q.png'} alt="footer-Q" className='logo1' /></p>

        
          <div className="ffbbxx">
            <div className='ffa'>
              <Link href="/">Qiancset Web3</Link> {t('版权所有')}© 2023
            </div>
          </div>
      
      </div>
    </footer>
  );
}