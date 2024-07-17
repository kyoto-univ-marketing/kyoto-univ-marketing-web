import { FC } from 'react'

import { pageLinkObject } from '@/constants/pageLinks'

import { BreadCrumb } from '../../common/BreadCrumb/BreadCrumb'

export interface ContactSuccessPageProps {}

/** お問い合わせ成功ページ */
export const ContactSuccessPage: FC<ContactSuccessPageProps> = ({ ...props }) => {
    return (
        <>
            <BreadCrumb
                items={[
                    { label: pageLinkObject.TOP.textEng, href: pageLinkObject.TOP.href },
                    { label: pageLinkObject.CONTACT.text, href: pageLinkObject.CONTACT.href },
                    { label: '送信完了' },
                ]}
            />
            <div className='p-8'>
                <h1 className='mb-12 text-center text-xl font-bold'>送信が完了しました</h1>
                <div className='space-y-4'>
                    <p>お問い合わせありがとうございます。</p>
                    <p>内容を確認の上、近日中に担当者からご連絡いたします。</p>
                </div>
            </div>
        </>
    )
}
