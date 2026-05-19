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
            <PageTitle>送信が完了しました</PageTitle>
            <div className='mx-auto mb-12 max-w-(--breakpoint-sm) px-8'>
                <p className='whitespace-pre-wrap leading-10'>{message}</p>
            </div>
            <div className='mb-12'>
                <RedirectCountDown duration={10} />
            </div>
        </>
    )
}
