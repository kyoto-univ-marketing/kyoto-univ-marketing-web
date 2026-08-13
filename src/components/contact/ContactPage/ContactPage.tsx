import { FC } from 'react'

import { NextLink } from '@/components/common/NextLink/NextLink'
import { PageTitle } from '@/components/common/PageTitle/PageTitle'
import { pageLinkObject } from '@/constants/pageLinks'
import { getTextById } from '@/lib/api'

import { BreadCrumb } from '../../common/BreadCrumb/BreadCrumb'
import { ContactForm } from '../ContactForm/ContactForm'

export interface ContactPageProps {}

/**
 * お問い合わせ。
 *
 * 以前は「企業の皆様へ」「京大生の方へ」の説明文を下に置いていたが、
 * その内容は /sponsorship と /join が担うようになったため、リンクだけ残している。
 * 同じ説明を二か所に書くと、片方だけ古くなる。
 */
export const ContactPage: FC<ContactPageProps> = async () => {
    const privacyText = await getTextById('contact_privacy')
    return (
        <>
            <BreadCrumb
                items={[
                    { label: pageLinkObject.TOP.textEng, href: pageLinkObject.TOP.href },
                    { label: pageLinkObject.CONTACT.text, href: pageLinkObject.CONTACT.href },
                ]}
            />
            <PageTitle band en='Contact'>{pageLinkObject.CONTACT.text}</PageTitle>
            <div className='mx-auto max-w-(--breakpoint-md) px-6 pb-24 md:px-8'>
                <p className='text-gray-700'>以下のフォームからご自由にお問い合わせください。</p>
                <p className='mt-3 text-gray-600 text-sm'>
                    協賛のご検討は
                    <NextLink
                        className='underline underline-offset-4 hover:text-primary'
                        href={pageLinkObject.SPONSORSHIP.href}
                    >
                        {pageLinkObject.SPONSORSHIP.text}
                    </NextLink>
                    、入会のご相談は
                    <NextLink
                        className='underline underline-offset-4 hover:text-primary'
                        href={pageLinkObject.JOIN.href}
                    >
                        {pageLinkObject.JOIN.text}
                    </NextLink>
                    もあわせてご覧ください。
                </p>
                <div className='mt-12'>
                    <ContactForm />
                    <p className='mt-8 text-sm'>{privacyText}</p>
                </div>
            </div>
        </>
    )
}
