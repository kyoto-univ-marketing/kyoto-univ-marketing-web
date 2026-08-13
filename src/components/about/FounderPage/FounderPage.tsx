import Image from 'next/image'
import { FC } from 'react'

import { BreadCrumb } from '@/components/common/BreadCrumb/BreadCrumb'
import { NextLink } from '@/components/common/NextLink/NextLink'
import { PageTitle } from '@/components/common/PageTitle/PageTitle'
import { Reveal } from '@/components/common/Reveal/Reveal'
import { Button } from '@/components/ui/button'
import { aboutFounderPage, aboutMembersPage } from '@/constants/aboutPages'
import { founder } from '@/constants/members'
import { pageLinkObject } from '@/constants/pageLinks'

/**
 * 創設者・初代代表のプロフィール。
 *
 * 「迫田周大」で検索した人が着地するページ。
 * 主題が本人であることをぶらさないため、h1 は氏名、役割名とふりがなは本文に必ず残す。
 * 団体の話（協賛・入会など）を厚く書き足さないこと。
 */
export const FounderPage: FC = () => {
    const { en, role, name, reading, faculty, enrolledYear, image, catchphrase, lead, message } = founder

    return (
        <>
            <BreadCrumb
                items={[
                    { href: pageLinkObject.TOP.href, label: pageLinkObject.TOP.textEng },
                    { href: pageLinkObject.ABOUT.href, label: pageLinkObject.ABOUT.text },
                    { href: aboutFounderPage.href, label: aboutFounderPage.text },
                ]}
            />
            <PageTitle band en={en}>
                {name}
            </PageTitle>
            <div className='mx-auto max-w-(--breakpoint-md) px-6 pb-24 md:px-8'>
                <Reveal className='flex flex-col items-center gap-8 sm:flex-row sm:items-start sm:gap-12'>
                    <div className='w-full max-w-60 shrink-0 sm:w-60'>
                        <Image
                            {...image}
                            alt={`京大マーケティング研究所 ${role} ${name}（${reading}）`}
                            className='aspect-square w-full object-cover'
                            priority
                            sizes='(max-width: 640px) 70vw, 240px'
                        />
                    </div>
                    <div className='space-y-3 text-center sm:pt-2 sm:text-left'>
                        <p className='text-gray-600 text-sm'>京大マーケティング研究所 {role}</p>
                        <p className='font-title text-heading leading-snug'>
                            {name}
                            <span className='ml-3 align-middle text-base text-gray-600'>{reading}</span>
                        </p>
                        <p className='text-gray-600 text-sm'>
                            {faculty} {enrolledYear}年入学
                        </p>
                        <p className='text-gray-600 text-sm'>
                            2024年3月に京大マーケティング研究所を設立。
                            2026年に一般社団法人マーケティング研究所として法人化しました。
                        </p>
                    </div>
                </Reveal>

                <Reveal className='mt-16 space-y-4'>
                    <p className='font-en text-brand-accent text-xs uppercase tracking-[0.3em]'>In a Word</p>
                    <p className='font-title text-heading leading-relaxed'>「{catchphrase}」</p>
                    <div className='space-y-4 text-gray-700'>
                        {lead.map((line) => (
                            <p key={line}>{line}</p>
                        ))}
                    </div>
                </Reveal>

                <Reveal className='mt-16 space-y-4 border-gray-200 border-l-2 pl-6'>
                    <p className='font-en text-brand-accent text-xs uppercase tracking-[0.3em]'>To You</p>
                    <p className='font-title text-lg'>入会を考えている方へ</p>
                    <div className='space-y-4 text-gray-700'>
                        {message.map((line) => (
                            <p key={line}>{line}</p>
                        ))}
                    </div>
                </Reveal>

                <div className='mt-20 flex flex-col items-center justify-center gap-4 sm:flex-row'>
                    <Button asChild className='px-8 py-5'>
                        <NextLink href={aboutMembersPage.href}>{aboutMembersPage.text}を見る</NextLink>
                    </Button>
                    <Button asChild className='px-8 py-5' variant='outline'>
                        <NextLink href={pageLinkObject.ABOUT.href}>団体概要へ戻る</NextLink>
                    </Button>
                </div>
            </div>
        </>
    )
}
