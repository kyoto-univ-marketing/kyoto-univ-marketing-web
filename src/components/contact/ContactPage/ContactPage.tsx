import { FC } from 'react'

import { client } from '@/api/client'
import { PageTitle } from '@/components/common/PageTitle/PageTitle'
import { pageLinkObject } from '@/constants/pageLinks'

import { BreadCrumb } from '../../common/BreadCrumb/BreadCrumb'
import { ContactForm } from '../ContactForm/ContactForm'

export interface ContactPageProps {}

/** お問い合わせページ */
export const ContactPage: FC<ContactPageProps> = async ({ ...props }) => {
    const privacyText = await client
        .GET('/api/text/{id}/', { params: { path: { id: 'contact_privacy' } } })
        .then((res) => res.data?.text ?? '')
    if (!privacyText) {
        console.error("Couldn't get privacy text")
    }
    const descriptionForOthers = await client
        .GET('/api/text/{id}/', { params: { path: { id: 'contact_description_for_others' } } })
        .then((res) => res.data?.text ?? '')
    if (!descriptionForOthers) {
        console.error("Couldn't get description for others text")
    }
    const descriptionForKyodai = await client
        .GET('/api/text/{id}/', { params: { path: { id: 'contact_description_for_kyodai' } } })
        .then((res) => res.data?.text ?? '')
    if (!descriptionForKyodai) {
        console.error("Couldn't get description for kyodai text")
    }
    return (
        <>
            <BreadCrumb
                items={[
                    { label: pageLinkObject.TOP.textEng, href: pageLinkObject.TOP.href },
                    { label: pageLinkObject.CONTACT.text, href: pageLinkObject.CONTACT.href },
                ]}
            />
            <PageTitle>{pageLinkObject.CONTACT.text}</PageTitle>
            <div>
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
