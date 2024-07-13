import { FC } from 'react'

import { BreadCrumb } from '../BreadCrumb/BreadCrumb'
import { ContactForm } from '../ContactForm/ContactForm'

export interface ContactPageProps {}

export const ContactPage: FC<ContactPageProps> = ({ ...props }) => {
    return (
        <div>
            <div className='p-4'>
                <BreadCrumb items={[{ label: 'ホーム', href: '/' }, { label: 'お問い合わせ' }]} />
            </div>
            <div>
                <div className='space-y-2 p-4'>
                    <h1 className='text-xl font-bold'>お問い合わせ</h1>
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
        </div>
    )
}
