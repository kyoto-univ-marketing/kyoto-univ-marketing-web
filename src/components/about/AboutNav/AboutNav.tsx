import Image from 'next/image'
import { FC } from 'react'

import { NextLink } from '@/components/common/NextLink/NextLink'
import { Reveal } from '@/components/common/Reveal/Reveal'
import { SectionHeading } from '@/components/common/SectionHeading/SectionHeading'
import { aboutFounderPage, aboutMembersPage } from '@/constants/aboutPages'
import { founder, presidents } from '@/constants/members'

/**
 * 創設者・歴代代表の各ページへの導線。
 *
 * リンクの文言に「創設者 迫田 周大」と氏名を入れておくこと。
 * 検索エンジンはリンクの文言でリンク先の主題を判断するため、
 * ここが「詳しく見る」だけになると創設者ページの手がかりが弱くなる。
 */
export const FounderSection: FC = () => (
    <section>
        <SectionHeading en={aboutFounderPage.textEng} index={3}>
            {aboutFounderPage.text}
        </SectionHeading>
        <Reveal>
            <NextLink className='group flex items-center gap-6' href={aboutFounderPage.href}>
                <Image
                    {...founder.image}
                    alt=''
                    className='size-24 shrink-0 object-cover sm:size-28'
                    sizes='112px'
                />
                <div className='space-y-2'>
                    <p className='text-gray-600 text-sm'>{founder.role}</p>
                    <p className='font-title text-lg leading-snug transition-colors group-hover:text-primary'>
                        {founder.name}
                        <span className='ml-3 align-middle text-gray-600 text-sm'>{founder.reading}</span>
                    </p>
                    <p className='text-gray-600 text-sm'>
                        {founder.faculty} {founder.enrolledYear}年入学
                    </p>
                    <p className='text-gray-700 text-sm leading-relaxed'>
                        2024年3月に京大マーケティング研究所を設立。設立の考えと、これから入会する方へのことば。
                    </p>
                    {/* このリンクは写真から説明文までを含む一つのリンクなので、
                        文言を短くしても氏名はリンクの中に残る */}
                    <span className='inline-block text-sm underline underline-offset-4 group-hover:text-primary'>
                        {`${aboutFounderPage.text}を読む`}
                    </span>
                </div>
            </NextLink>
        </Reveal>
    </section>
)

export const MembersSection: FC = () => (
    <section>
        <SectionHeading en={aboutMembersPage.textEng} index={4}>
            {aboutMembersPage.text}
        </SectionHeading>
        <Reveal>
            <NextLink className='group flex items-center gap-6' href={aboutMembersPage.href}>
                <div className='flex shrink-0 gap-2'>
                    {presidents.map((member) => (
                        <Image
                            {...member.image}
                            alt=''
                            className='size-16 object-cover sm:size-20'
                            key={member.name}
                            sizes='80px'
                        />
                    ))}
                </div>
                <div className='space-y-2'>
                    <p className='text-gray-700 text-sm leading-relaxed'>
                        初代から現代表まで。それぞれが考える「この場所は何であるか」を、そのままの言葉で。
                    </p>
                    <span className='inline-block text-sm underline underline-offset-4 group-hover:text-primary'>
                        {aboutMembersPage.text}を見る
                    </span>
                </div>
            </NextLink>
        </Reveal>
    </section>
)
