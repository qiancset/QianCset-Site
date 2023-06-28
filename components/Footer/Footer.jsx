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
              <li ><Link target="_blank" href="https://docs.qlweb3.top/ru-men-zhi-nan">
                {t('入门指南')}
              </Link></li>
              <li ><Link target="_blank" href="https://docs.qlweb3.top/xue-xi-wen-dang">
                {t('学习文档')}
              </Link></li>
              <li ><Link target="_blank" href="https://docs.qlweb3.top/bai-pi-shu">
                {t('白皮书')}
              </Link></li>
              <li ><Link target="_blank" href='https://docs.qlweb3.top/jia-mi-huo-bi'>
                {t('加密货币')}
              </Link></li>
            </ul>





            <ul className="box3">
              <li className="link_name">
                <h2>{t('服务')}</h2>
              </li>
              <li ><Link target="_blank" href="https://docs.qlweb3.top/%E6%9C%8D%E5%8A%A1/chuang-ye-rong-zi">
                {t('创业融资')}
              </Link></li>
              <li ><Link target="_blank" href="https://docs.qlweb3.top/%E6%9C%8D%E5%8A%A1/ji-shu-wen-ti">
                {t('寻找团队')}
              </Link></li>
              <li ><Link target="_blank" href="https://docs.qlweb3.top/%E6%9C%8D%E5%8A%A1/jia-ru-gong-xian">
                {t('技术问题')}
              </Link></li>
              <li ><Link target="_blank" href="https://docs.qlweb3.top/%E6%9C%8D%E5%8A%A1/xun-zhao-tuan-dui" >
                {t('加入贡献')}
              </Link></li>
            </ul>

            <ul className="box4">
              <li className="link_name">
                <h2>{t('关于')}</h2>
              </li>
              <li ><Link target="_blank" href=" https://docs.qlweb3.top/%E5%85%B3%E4%BA%8E/guan-yu-she-qu" >
                {t('关于社区')}
              </Link></li>

              <li ><Link target="_blank" href=" https://docs.qlweb3.top/%E5%85%B3%E4%BA%8E/he-zuo">
                {t('合作')}
              </Link></li>

              <li ><Link target="_blank" href="https://docs.qlweb3.top/%E5%85%B3%E4%BA%8E/zan-zhu-shang">
                {t('赞助商')}
              </Link></li>


              <li ><Link target="_blank" href=" https://docs.qlweb3.top/%E5%85%B3%E4%BA%8E/%E6%B3%95%E5%BE%8B/cookie-zheng-ce">
                {t('Cookie政策')}
              </Link></li>
              <li ><Link target="_blank" href=" https://docs.qlweb3.top/%E5%85%B3%E4%BA%8E/%E6%B3%95%E5%BE%8B/shi-yong-tiao-kuan">
                {t('使用条款')}
              </Link></li>
              <li ><Link target="_blank" href=" https://docs.qlweb3.top/%E5%85%B3%E4%BA%8E/%E6%B3%95%E5%BE%8B/yin-si-zheng-ce">
                {t('隐私政策')}
              </Link></li>
            </ul>
          </div>
          <div className="content2">

          </div>


        </div>
      </div>

      <div className="ffbb">
        <p><img src={'/Q.png'} alt="Q.png" className='logo1' /></p>

        <ul >
          <div className="ffbbxx">
            <nav className='ffa'>
              <Link href="/">QianLi Web3</Link> {t('版权所有')}© 2023
            </nav>
          </div>
        </ul>

      </div>
    </footer>
  );
}