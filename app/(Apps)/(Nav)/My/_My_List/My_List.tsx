'use client'
import './My_List.css'
import { SettingOutlined, RightOutlined, QuestionCircleOutlined, ExperimentOutlined, SolutionOutlined, WalletOutlined, AppstoreOutlined } from '@ant-design/icons'
import Link from 'next/link';
import { useTranslation } from 'react-i18next';

export default function My_List() {
    const { t } = useTranslation();
    return (
        <>
 <My_List_card href={`/a`} text={t('资料')} ico={<SolutionOutlined />} />
 <My_List_card href={`/a`} text={t('测试')} ico={<ExperimentOutlined />} />
 <My_List_card href={`/Dappbrowser`} text={t('Dapp浏览器')} ico={<AppstoreOutlined />} />
 <My_List_card href={`/Function`} text={t('功能')} ico={<WalletOutlined />} />
 <My_List_card href={`/Settings`} text={t('设置')} ico={<SettingOutlined />} />
 <My_List_card href={`/about`} text={t('关于')} ico={<QuestionCircleOutlined />} />


        </>
    );
}
function My_List_card({ href, ico, text }) {
    const isAboutPage = href === '/about';
    return (
        <>
            <ul className='custom_list'>
                <li key={href}>

                    <Link href={href} className='List_Link' target={isAboutPage ? '_blank' : undefined}>
                        <div className='List_Item'>

                            <div className='List_My_left'>

                                <div className='ico_text'>
                                    <div className='ico'>{ico}</div>
                                    <div className="gap"></div>
                                    <div className='text'>{text}</div>
                                </div>

                            </div>

                            <div className='List_My_right'>
                                <RightOutlined className='RightOutlined'/>
                                </div>

                        </div>
                    </Link>

                </li>
            </ul>
        </>
    )
}


