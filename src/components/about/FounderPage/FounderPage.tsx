import Image from 'next/image'
import { FC, Fragment } from 'react'

import KakejikuImg from '@/../public/page-images/kakejiku.webp'
import { BreadCrumb } from '@/components/common/BreadCrumb/BreadCrumb'
import { NextLink } from '@/components/common/NextLink/NextLink'
import { PageTitle } from '@/components/common/PageTitle/PageTitle'
import { Reveal } from '@/components/common/Reveal/Reveal'
import { Button } from '@/components/ui/button'
import { aboutFounderPage, aboutMembersPage } from '@/constants/aboutPages'
import { founder } from '@/constants/members'
import { pageLinkObject } from '@/constants/pageLinks'
import { cn } from '@/lib/utils'

/**
 * 創設者の言葉。「迫田周大」で検索した人が着地するページ。
 *
 * 題に氏名は入れていないが、中身の主題は本人。
 * 氏名・ふりがな・役割名は h2 と本文に必ず残すこと（title と構造化データも同様）。
 * ここが消えると、検索で拾われる手がかりがサイトから無くなる。
 *
 * 歴代代表ページは2代目からにしている。初代の話はこのページが担う。
 *
 * 本文は長いが、見出しは立てない。本人の語りなので、章立てにすると報告書の口調になる。
 * 代わりに、要になる二つの段落を紺の帯にして、そこで区切っている。
 * 見出しを置かないおかげで h2 は氏名だけになり、検索での手がかりも濁らない。
 * 本文の構成は constants/members.ts 側にある。
 */
export const FounderPage: FC = () => {
    const { role, name, reading, faculty, enrolledYear, image, catchphrase, story, message } = founder

    return (
        <>
            <BreadCrumb
                items={[
                    { href: pageLinkObject.TOP.href, label: pageLinkObject.TOP.textEng },
                    { href: pageLinkObject.ABOUT.href, label: pageLinkObject.ABOUT.text },
                    { href: aboutFounderPage.href, label: aboutFounderPage.text },
                ]}
            />
            <PageTitle band en={aboutFounderPage.textEng}>
                {aboutFounderPage.text}
            </PageTitle>

            <div className='mx-auto max-w-(--breakpoint-md) px-6 md:px-8'>
                <Reveal className='space-y-4 text-gray-700'>
                    <p>
                        京大マーケティング研究所は、2024年3月に京都大学の学生団体として設立。
                        2026年には、活動の拡大に伴い、一般社団法人マーケティング研究所として法人化。
                        企業様や大学関係者の皆様からご協力を賜りながら、毎年新たな代表の下で、活動の基盤を整えている。
                    </p>
                    <p>
                        <NextLink
                            className='text-sm underline underline-offset-4 hover:text-primary'
                            href={aboutMembersPage.href}
                        >
                            {aboutMembersPage.text}はこちら
                        </NextLink>
                    </p>
                </Reveal>

                <Reveal className='mt-16 flex flex-col items-center gap-8 sm:flex-row sm:items-start sm:gap-12'>
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
                        <p className='text-gray-600 text-sm'>{role}</p>
                        {/* 氏名は見出しとして置く。このページの主題が本人であることの手がかりになる */}
                        <h2 className='font-title text-heading leading-snug'>
                            {name}
                            <span className='ml-3 align-middle text-base text-gray-600'>{reading}</span>
                        </h2>
                        <p className='text-gray-600 text-sm'>
                            {faculty} {enrolledYear}年入学
                        </p>
                    </div>
                </Reveal>

                <div className='mt-16 space-y-4'>
                    <p className='font-en text-brand-accent text-xs uppercase tracking-[0.3em]'>In a Word</p>
                    <p className='font-title text-heading leading-relaxed'>「{catchphrase}」</p>
                </div>
            </div>

            {/*
             * 本文と帯を順に並べる。
             * 帯は字を大きくしない。地の色が変わるだけで十分に目が留まるし、
             * 大きくすると本文との落差が出て、語りの調子が途切れる。
             */}
            {story.map((block) =>
                block.kind === 'text' ? (
                    <div
                        className='mx-auto mt-14 max-w-(--breakpoint-md) space-y-6 px-6 text-justify text-gray-700 md:mt-16 md:px-8'
                        key={block.body[0]}
                    >
                        {block.body.map((line) => (
                            <Reveal key={line}>
                                <p>{line}</p>
                            </Reveal>
                        ))}
                    </div>
                ) : (
                    <Reveal
                        className={cn(
                            'mt-14 bg-primary py-16 text-primary-foreground md:mt-16 md:py-20',
                            block.withStars && 'star-field',
                        )}
                        key={block.text}
                    >
                        {block.withKakejiku ? (
                            <div className='mx-auto grid max-w-(--breakpoint-md) items-center gap-10 px-6 sm:grid-cols-[1fr_1.4fr] md:px-8'>
                                <Image
                                    {...KakejikuImg}
                                    alt='マーケハウスに掛かる掛け軸'
                                    className='w-full object-cover'
                                    sizes='(max-width: 640px) 100vw, 260px'
                                />
                                <p className='text-justify leading-loose'>{block.text}</p>
                            </div>
                        ) : (
                            <p className='mx-auto max-w-(--breakpoint-md) px-6 text-justify leading-loose md:px-8'>
                                {block.text}
                            </p>
                        )}
                    </Reveal>
                ),
            )}

            <div className='mx-auto max-w-(--breakpoint-md) px-6 pb-24 md:px-8'>
                <Reveal className='mt-20 space-y-4 border-gray-200 border-l-2 pl-6'>
                    <p className='font-en text-brand-accent text-xs uppercase tracking-[0.3em]'>To Candidates</p>
                    <p className='font-title text-lg'>入会を考えている方へ</p>
                    <div className='space-y-4 text-justify text-gray-700'>
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
