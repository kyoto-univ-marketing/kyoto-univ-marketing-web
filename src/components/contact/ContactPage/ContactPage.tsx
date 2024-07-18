import { FC } from 'react'

import { PageTitle } from '@/components/common/PageTitle/PageTitle'
import { pageLinkObject } from '@/constants/pageLinks'

import { BreadCrumb } from '../../common/BreadCrumb/BreadCrumb'
import { ContactForm } from '../ContactForm/ContactForm'

export interface ContactPageProps {}

/** お問い合わせページ */
export const ContactPage: FC<ContactPageProps> = ({ ...props }) => {
    return (
        <>
            <BreadCrumb
                items={[
                    { label: pageLinkObject.TOP.textEng, href: pageLinkObject.TOP.href },
                    { label: pageLinkObject.CONTACT.text },
                ]}
            />
            <PageTitle>{pageLinkObject.CONTACT.text}</PageTitle>
            <div>
                <div className='space-y-2 p-4'>
                    <p className='text-gray-700'>以下のフォームからご自由にお問い合わせください。</p>
                </div>
                <div className='px-4 py-8'>
                    <ContactForm />
                </div>
                <div className='space-y-8 bg-slate-50 p-6'>
                    <h2 className='text-lg underline'>お問い合わせの内容につきまして</h2>
                    <div className='space-y-4 p-2'>
                        <h3 className='text-center text-lg'>企業、その他団体・個人の皆様</h3>
                        <p>テキストテキストテキストテキストテキストテキストテキストテキスト</p>
                        <p>テキストテキストテキストテキストテキストテキストテキストテキスト</p>
                        <p>テキストテキストテキストテキストテキストテキストテキストテキスト</p>
                    </div>
                    <div className='space-y-4 p-2'>
                        <h3 className='text-center text-lg'>京大生の方</h3>
                        <p>テキストテキストテキストテキストテキストテキストテキストテキスト</p>
                        <p>テキストテキストテキストテキストテキストテキストテキストテキスト</p>
                    </div>
                </div>
            </div>
        </>
    )
}
