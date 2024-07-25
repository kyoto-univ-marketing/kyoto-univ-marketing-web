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
                    <p className='mt-8 px-4 text-sm'>
                        ※入力いただいた個人情報(お名前、所属先、メールアドレス)はお問い合わせへの回答のために利用します。また、お問い合わせの内容によりましては、今後のご連絡で利用させていただく場合がございます。
                    </p>
                </div>
                <div className='mb-16 space-y-16'>
                    <h2 className='w-full bg-primary p-3 text-center text-primary-foreground'>
                        お問い合わせの内容につきまして
                    </h2>
                    <div className='space-y-4 px-8'>
                        <h3 className='text-lg'>企業、その他団体・個人の皆様</h3>
                        <p className='bg-backgroundSecondary p-4'>
                            お問い合わせをいただき次第、迅速に対応させていただきます。担当者の状況により、すぐに対応できない場合がございます。何卒ご了承くださいますようお願い申し上げます。現在、講演会やイベントの企画、共同プロジェクトのご提案などに関するお問い合わせを多く承っております。その他の内容につきましても、柔軟に対応させていただきますので、お気軽にお問い合わせください。
                        </p>
                    </div>
                    <div className='space-y-4 px-8'>
                        <h3 className='text-lg'>京大生の方</h3>
                        <p className='bg-backgroundSecondary p-4'>
                            京大生の事業活動やサークル活動に対するマーケティング支援を行っております。お気軽にお問い合わせいただければ幸いです。また、京大マーケティング研究所への入部を希望される方も心よりお待ち申し上げております。ただし、ご連絡いただいた時期の運営体制やプロジェクトの進行状況により、入部をお待ちいただく場合がございます。予めご了承ください。
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}
