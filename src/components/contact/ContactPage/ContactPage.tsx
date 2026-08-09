import { FC } from 'react'

import { PageTitle } from '@/components/common/PageTitle/PageTitle'
import { pageLinkObject } from '@/constants/pageLinks'
import { getTextById } from '@/lib/api'

import { BreadCrumb } from '../../common/BreadCrumb/BreadCrumb'
import { ContactForm } from '../ContactForm/ContactForm'

export interface ContactPageProps {}

export const ContactPage: FC<ContactPageProps> = async () => {
    const [privacyText, descriptionForOthers, descriptionForKyodai] = await Promise.all([
        getTextById('contact_privacy'),
        getTextById('contact_description_for_others'),
        getTextById('contact_description_for_kyodai'),
    ])
    return (
        <>
            <BreadCrumb
                items={[
                    { label: pageLinkObject.TOP.textEng, href: pageLinkObject.TOP.href },
                    { label: pageLinkObject.CONTACT.text, href: pageLinkObject.CONTACT.href },
                ]}
            />
            <PageTitle band en='Contact'>{pageLinkObject.CONTACT.text}</PageTitle>
            <div className='mx-auto max-w-(--breakpoint-sm)'>
                <div className='space-y-2 p-4'>
                    <p className='text-gray-700'>以下のフォームからご自由にお問い合わせください。</p>
                </div>
                <div className='mb-12 px-4 py-8'>
                    <ContactForm />
                    <p className='mt-8 px-4 text-sm'>{privacyText}</p>
                </div>
                <div className='mb-16 space-y-16'>
                    <h2 className='w-full bg-primary p-3 text-center text-primary-foreground'>
                        お問い合わせの内容につきまして
                    </h2>
                    <div className='space-y-4 px-8'>
                        <h3 className='text-lg'>企業、その他団体・個人の皆様</h3>
                        <p className='bg-background-secondary p-4'>{descriptionForOthers}</p>
                    </div>
                    <div className='space-y-4 px-8'>
                        <h3 className='text-lg'>京大生の方</h3>
                        <p className='bg-background-secondary p-4'>{descriptionForKyodai}</p>
                    </div>
                </div>
            </div>
        </>
    )
}
