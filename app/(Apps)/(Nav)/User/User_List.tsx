'use client'
import './User_List.css'
import { SettingOutlined, RightOutlined, QuestionCircleOutlined, ExperimentOutlined, SolutionOutlined, WalletOutlined, AppstoreOutlined } from '@ant-design/icons'
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
export default function User_List() {
    const { t } = useTranslation();
    return (
        <>
 <User_List_card href={`/a`} text={t('资料')} ico={<SolutionOutlined />} />
 <User_List_card href={`/a`} text={t('测试')} ico={<ExperimentOutlined />} />
 <User_List_card href={`/Dappbrowser`} text={t('Dapp浏览器')} ico={<AppstoreOutlined />} />
 <User_List_card href={`/Function`} text={t('功能')} ico={<WalletOutlined />} />
 <User_List_card href={`/Settings`} text={t('设置')} ico={<SettingOutlined />} />
 <User_List_card href={`/about`} text={t('关于')} ico={<QuestionCircleOutlined />} />


        </>
    );
}
function User_List_card({ href, ico, text }) {
    const isAboutPage = href === '/about';
    return (
        <>
            <ul className='custom_list'>
                <li key={href}>

                    <Link href={href} className='List_Link' target={isAboutPage ? '_blank' : undefined}>
                        <div className='List_Item'>

                            <div className='List_User_left'>

                                <div className='ico_text'>
                                    <div className='ico'>{ico}</div>
                                    <div className="gap"></div>
                                    <div className='text'>{text}</div>
                                </div>

                            </div>

                            <div className='List_User_right'>
                                <RightOutlined className='RightOutlined'/>
                                </div>

                        </div>
                    </Link>

                </li>
            </ul>
        </>
    )
}


