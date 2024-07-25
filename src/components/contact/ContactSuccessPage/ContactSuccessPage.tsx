import { FC } from 'react'

import { PageTitle } from '@/components/common/PageTitle/PageTitle'
import { pageLinkObject } from '@/constants/pageLinks'

import { BreadCrumb } from '../../common/BreadCrumb/BreadCrumb'
import { RedirectCountDown } from '../RedirectCountDown/RedirectCountDown'

export interface ContactSuccessPageProps {}

/** お問い合わせ成功ページ */
export const ContactSuccessPage: FC<ContactSuccessPageProps> = ({ ...props }) => {
    return (
        <>
            <BreadCrumb
                items={[
                    { label: pageLinkObject.TOP.textEng, href: pageLinkObject.TOP.href },
                    { label: pageLinkObject.CONTACT.text, href: pageLinkObject.CONTACT.href },
                    { label: '送信完了', href: `${pageLinkObject.CONTACT.href}/success` },
                ]}
            />
            <PageTitle>送信が完了しました</PageTitle>
            <div className='mb-12 px-8'>
                <div className='space-y-4'>
                    <p>お問い合わせありがとうございます。</p>
                    <p>内容を確認の上、近日中に担当者からご連絡いたします。</p>
                </div>
            </div>
            <div className='mb-12'>
                <RedirectCountDown duration={10} />
            </div>
        </>
    )
}
