import Image from 'next/image'
import { FC } from 'react'

import KakejikuImg from '@/../public/page-images/kakejiku.webp'
import { BreadCrumb } from '@/components/common/BreadCrumb/BreadCrumb'
import { NextLink } from '@/components/common/NextLink/NextLink'
import { PageTitle } from '@/components/common/PageTitle/PageTitle'
import { Reveal } from '@/components/common/Reveal/Reveal'
import { Button } from '@/components/ui/button'
import { aboutFounderPage, aboutMembersPage } from '@/constants/aboutPages'
import { founder } from '@/constants/members'
import { pageLinkObject } from '@/constants/pageLinks'

/**
 * 設立の経緯。「迫田周大」で検索した人が着地するページ。
 *
 * 題は「設立の経緯」だが、中身の主題は創設者本人。
 * 氏名・ふりがな・役割名は h2 と本文に必ず残すこと（title と構造化データも同様）。
 * ここが消えると、検索で拾われる手がかりがサイトから無くなる。
 *
 * 歴代代表ページは2代目からにしている。初代の話はこのページが担う。
 *
 * 長い本文は、途中に写真つきの一段を挟んで区切る。
 * 段落ごとに背景を交互に替える形も試したが、縞模様に見えて落ち着かなかった。
 */
export const FounderPage: FC = () => {
    const { role, name, reading, faculty, enrolledYear, image, catchphrase, lead, message } = founder
    // 前半・写真と並べる一段・後半に分ける
    const [beforePhoto, besidePhoto, afterPhoto] = [lead.slice(0, 2), lead[2], lead.slice(3)]

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
                <Reveal className='text-gray-700'>
                    <p>
                        京大マーケティング研究所は、2024年3月に京都大学の学生団体として設立しました。
                        2026年には一般社団法人マーケティング研究所として法人化し、活動の基盤を整えています。
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

                <div className='mt-10 space-y-6 text-gray-700'>
                    {beforePhoto.map((line) => (
                        <Reveal key={line}>
                            <p>{line}</p>
                        </Reveal>
                    ))}
                </div>
            </div>

            {/*
             * 「思考の関節を外して生き方を見つめ直す」段落に掛け軸を並べる。
             * 飾りではなく、この一段の内容そのものを写した写真として置いている。
             */}
            <div className='mt-14 bg-background-secondary py-14'>
                <Reveal className='mx-auto grid max-w-(--breakpoint-md) items-center gap-10 px-6 sm:grid-cols-[1fr_1.4fr] md:px-8'>
                    <Image
                        {...KakejikuImg}
                        alt='マーケハウスに掛かる掛け軸'
                        className='w-full object-cover'
                        sizes='(max-width: 640px) 100vw, 260px'
                    />
                    <p className='text-gray-700'>{besidePhoto}</p>
                </Reveal>
            </div>

            <div className='mx-auto max-w-(--breakpoint-md) px-6 pb-24 md:px-8'>
                <div className='mt-14 space-y-6 text-gray-700'>
                    {afterPhoto.map((line) => (
                        <Reveal key={line}>
                            <p>{line}</p>
                        </Reveal>
                    ))}
                </div>

                <Reveal className='mt-16 space-y-4 border-gray-200 border-l-2 pl-6'>
                    <p className='font-en text-brand-accent text-xs uppercase tracking-[0.3em]'>To Candidates</p>
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
