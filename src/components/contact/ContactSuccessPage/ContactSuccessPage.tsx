import { FC } from 'react'

import { client } from '@/api/client'
import { PageTitle } from '@/components/common/PageTitle/PageTitle'
import { pageLinkObject } from '@/constants/pageLinks'

import { BreadCrumb } from '../../common/BreadCrumb/BreadCrumb'
import { RedirectCountDown } from '../RedirectCountDown/RedirectCountDown'

export interface ContactSuccessPageProps {}

/** お問い合わせ成功ページ */
export const ContactSuccessPage: FC<ContactSuccessPageProps> = async ({ ...props }) => {
    const message = await client
        .GET('/api/text/{id}/', { params: { path: { id: 'contact_success_message' } } })
        .then((res) => res.data?.text ?? '')
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
                <div>
                    <p className='whitespace-pre-wrap leading-10'>{message}</p>
                </div>
            </div>
            <div className='mb-12'>
                <RedirectCountDown duration={10} />
            </div>
        </>
    )
}
