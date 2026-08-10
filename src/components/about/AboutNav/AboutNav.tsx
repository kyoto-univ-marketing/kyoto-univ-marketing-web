import Image from 'next/image'
import { FC } from 'react'

import { NextLink } from '@/components/common/NextLink/NextLink'
import { Reveal } from '@/components/common/Reveal/Reveal'
import { aboutFounderPage, aboutMembersPage } from '@/constants/aboutPages'
import { founder, members } from '@/constants/members'

/**
 * 団体概要から、創設者・歴代代表の各ページへの導線。
 *
 * リンクの文言に「創設者 迫田 周大」と氏名を入れておくこと。
 * 検索エンジンはリンクの文言でリンク先の主題を判断するため、
 * ここが「詳しく見る」だけになると創設者ページの手がかりが弱くなる。
 */
export const AboutNav: FC = () => (
    <section>
        <h2 className='border-b px-4 pb-4 text-heading'>代表について</h2>
        <div className='grid gap-6 py-8 sm:grid-cols-2'>
            <Reveal>
                <NextLink
                    className='group flex h-full flex-col gap-4 border border-gray-200 bg-white p-6 transition-colors hover:border-brand-accent'
                    href={aboutFounderPage.href}
                >
                    <p className='font-en text-brand-accent text-xs uppercase tracking-[0.35em]'>
                        {aboutFounderPage.textEng}
                    </p>
                    <div className='flex items-center gap-4'>
                        <Image
                            {...founder.image}
                            alt=''
                            className='size-16 shrink-0 object-cover'
                            sizes='64px'
                        />
                        <div>
                            <p className='font-title text-lg leading-snug transition-colors group-hover:text-primary'>
                                {founder.role} {founder.name}
                            </p>
                            <p className='text-gray-600 text-sm'>{founder.reading}</p>
                        </div>
                    </div>
                    <p className='text-gray-700 text-sm leading-relaxed'>
                        2024年3月に京大マーケティング研究所を設立。設立の考えと、これから入会する方へのことば。
                    </p>
                </NextLink>
            </Reveal>
            <Reveal delay={80}>
                <NextLink
                    className='group flex h-full flex-col gap-4 border border-gray-200 bg-white p-6 transition-colors hover:border-brand-accent'
                    href={aboutMembersPage.href}
                >
                    <p className='font-en text-brand-accent text-xs uppercase tracking-[0.35em]'>
                        {aboutMembersPage.textEng}
                    </p>
                    <div className='flex items-center gap-3'>
                        <div className='flex shrink-0 gap-2'>
                            {members.map((member) => (
                                <Image
                                    {...member.image}
                                    alt=''
                                    className='size-12 object-cover'
                                    key={member.name}
                                    sizes='48px'
                                />
                            ))}
                        </div>
                    </div>
                    <p className='font-title text-lg leading-snug transition-colors group-hover:text-primary'>
                        {aboutMembersPage.text}
                    </p>
                    <p className='text-gray-700 text-sm leading-relaxed'>
                        初代から現代表まで。それぞれが考える「この場所は何であるか」を、そのままの言葉で。
                    </p>
                </NextLink>
            </Reveal>
        </div>
    </section>
)
