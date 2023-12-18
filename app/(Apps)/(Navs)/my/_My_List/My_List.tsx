'use client'
import './My_List.css'


import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { GoQuestion, GoGear, GoMention, GoBriefcase, GoBeaker, GoChevronRight, GoBrowser, GoListOrdered } from 'react-icons/go';

export default function My_List() {
    const { t } = useTranslation();
    return (
        <>
            <My_List_card href={`/user`} text={t('资料')} ico={<GoMention />} />
            <My_List_card href={`/a`} text={t('测试')} ico={<GoBeaker />} />
            <My_List_card href={`/dappbrowser`} text={t('Dapp')} ico={<GoBrowser />} />
            <My_List_card href={`/function`} text={t('功能')} ico={<GoBriefcase />} />
            <My_List_card href={`/settings`} text={t('设置')} ico={<GoGear />} />
            <My_List_card href={`/about`} text={t('关于')} ico={<GoQuestion />} />


        </>
    );
}
function My_List_card({ href, ico, text }) {
    const isAboutPage = href === '';
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
                                <GoChevronRight className='GoChevronRight' />
                            </div>

                        </div>
                    </Link>

                </li>
            </ul>
        </>
    )
}


