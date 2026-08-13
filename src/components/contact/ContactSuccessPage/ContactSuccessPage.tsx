import { FC } from 'react'

import { PageTitle } from '@/components/common/PageTitle/PageTitle'
import { pageLinkObject } from '@/constants/pageLinks'
import { getTextById } from '@/lib/api'

import { BreadCrumb } from '../../common/BreadCrumb/BreadCrumb'
import { RedirectCountDown } from '../RedirectCountDown/RedirectCountDown'

export interface ContactSuccessPageProps {}

export const ContactSuccessPage: FC<ContactSuccessPageProps> = async () => {
    const message = await getTextById('contact_success_message')
    return (
        <>
            <BreadCrumb
                items={[
                    { label: pageLinkObject.TOP.textEng, href: pageLinkObject.TOP.href },
                    { label: pageLinkObject.CONTACT.text, href: pageLinkObject.CONTACT.href },
                    { label: '送信完了', href: `${pageLinkObject.CONTACT.href}/success` },
                ]}
            />
            <PageTitle band en='Thank You'>
                送信が完了しました
            </PageTitle>
            <div className='mx-auto max-w-(--breakpoint-md) space-y-12 px-6 pb-24 md:px-8'>
                <p className='whitespace-pre-wrap text-gray-700'>{message}</p>
                <RedirectCountDown duration={10} />
            </div>
        </>
    )
}
