import Image from 'next/image'
import { FC, Suspense } from 'react'
import { FaInstagram } from 'react-icons/fa6'

import LogoImg from '@/../public/logo.png'
import FeastImg from '@/../public/page-images/bands/feast.webp'
import { CircleStats, CircleStatsSkeleton } from '@/components/about/CircleStats/CircleStats'
import { BreadCrumb } from '@/components/common/BreadCrumb/BreadCrumb'
import { MakeHouseBand } from '@/components/common/MakeHouseBand/MakeHouseBand'
import { NextLink } from '@/components/common/NextLink/NextLink'
import { PageTitle } from '@/components/common/PageTitle/PageTitle'
import { Reveal } from '@/components/common/Reveal/Reveal'
import { SectionHeading } from '@/components/common/SectionHeading/SectionHeading'
import { Button } from '@/components/ui/button'
import { aboutFounderPage, aboutMembersPage } from '@/constants/aboutPages'
import { pageLinkObject } from '@/constants/pageLinks'
import { getSiteSettings } from '@/lib/microcms'

export interface JoinPageProps {}

export const JoinPage: FC<JoinPageProps> = async () => {
    const siteSettings = await getSiteSettings()

    return (
        <>
            <BreadCrumb
                items={[
                    { href: pageLinkObject.TOP.href, label: pageLinkObject.TOP.textEng },
                    { href: pageLinkObject.JOIN.href, label: pageLinkObject.JOIN.text },
                ]}
            />
            <PageTitle band en='Join Us'>
                入会をお考えの方へ
            </PageTitle>

            <div className='section-stack pb-24'>
                <div className='section-stack mx-auto w-full max-w-(--breakpoint-md) px-6 md:px-8'>
                    <Reveal className='space-y-8'>
                        {/* 新歓で使っているコピー。学生に向けるページなので、ここだけこの言い回しにする
                            （トップの「セカンド原体験とは」は別の一文）。
                            画像で入れる手もあるが、手元の原寸が 850px しかなく、
                            拡大すると文字がにじむため、文字とロゴを重ねて組んでいる。

                            縦組みにして、ロゴを大きく重ねる。ここだけは読ませる文章ではなく
                            一枚の絵として見せたいので、本文の組み方（横組み・両端揃え）から外す。
                            高さは em で指定してあるので、文字サイズを変えれば追随する
                            （10.5em ＝ 長いほうの「終わりたくない人へ」9文字ぶんの余裕） */}
                        <div className='relative isolate flex justify-center overflow-hidden py-8 md:py-12'>
                            <Image
                                alt=''
                                aria-hidden
                                className='-z-10 -translate-x-1/2 -translate-y-1/2 pointer-events-none absolute top-1/2 left-1/2 w-[19rem] max-w-none opacity-[0.12] sm:w-[26rem] md:w-[30rem]'
                                sizes='480px'
                                src={LogoImg}
                            />
                            <p className='h-[10.5em] font-title text-[clamp(1.85rem,1.2rem+2.2vw,2.75rem)] leading-[2.1] tracking-[0.1em] [writing-mode:vertical-rl]'>
                                <span className='block'>「京大卒」で</span>
                                <span className='block'>終わりたくない人へ</span>
                            </p>
                        </div>
                        <p className='text-justify text-gray-700'>
                            京大マーケティング研究所は、学生時代にもうひとつの原体験——「セカンド原体験」を創る場です。
                            やりたいことが決まっている人も、まだ探している人も歓迎します。
                        </p>
                    </Reveal>

                    <Reveal className='space-y-6'>
                        <Suspense fallback={<CircleStatsSkeleton />}>
                            <CircleStats />
                        </Suspense>
                        <p className='mx-auto max-w-2xl text-justify text-gray-700 text-sm'>
                            文系・理系の垣根を越えた京大生が在籍しています。
                            毎週複数回の勉強会、3本のゼミ、実践のプロジェクト、年3回の合宿。
                            参加はいずれも任意で、学業やほかの活動と両立している部員がほとんどです。
                        </p>
                        <div className='flex justify-center'>
                            <Button asChild className='px-8 py-5'>
                                <NextLink href={pageLinkObject.PROJECT.href}>活動内容を見る</NextLink>
                            </Button>
                        </div>
                    </Reveal>
                </div>

                <MakeHouseBand />

                {/* 「なぜ」を読んでから「どうやって」に進む順にする */}
                <div className='section-stack mx-auto w-full max-w-(--breakpoint-md) px-6 md:px-8'>
                    {/* 創設者ページと歴代代表ページには、入会を考えている方へのことばが載っている。
                        ここから読みに行けるようにしておく */}
                    <Reveal>
                        <SectionHeading en='Message' index={1}>
                            代表からのことば
                        </SectionHeading>
                        <p className='text-gray-700'>創設者と歴代代表が、入会を考えている方へのことばを書いています。</p>
                        <div className='mt-8 flex flex-col gap-4 sm:flex-row'>
                            <Button asChild className='px-8 py-5'>
                                <NextLink href={aboutFounderPage.href}>{aboutFounderPage.text}を読む</NextLink>
                            </Button>
                            <Button asChild className='px-8 py-5' variant='outline'>
                                <NextLink href={aboutMembersPage.href}>{aboutMembersPage.text}を見る</NextLink>
                            </Button>
                        </div>
                    </Reveal>

                    {/* 入会の可否は時期の運営状況で変わるため、断定せずに相談してもらう形にする */}
                    <Reveal>
                        <SectionHeading en='How to Join' index={2}>
                            入会について
                        </SectionHeading>
                        <div className='space-y-4 text-gray-700'>
                            <p>
                                学年・学部は問いません。まずはご連絡いただければ、活動の見学や新歓の予定をご案内します。
                            </p>
                            <p className='text-sm'>
                                ※ ご連絡いただいた時期の運営体制やプロジェクトの進行状況により、
                                入会をお待ちいただく場合があります。あらかじめご了承ください。
                            </p>
                        </div>
                    </Reveal>
                </div>

                <Reveal className='relative overflow-hidden bg-primary px-6 py-16 text-center text-primary-foreground md:py-20'>
                    <Image alt='' className='object-cover opacity-30' fill sizes='100vw' src={FeastImg} />
                    <h2 className='relative text-balance font-title text-heading leading-relaxed'>
                        まずは話を聞きに来てください
                    </h2>
                    <p className='relative mx-auto mt-5 max-w-xl text-primary-foreground/85 text-sm leading-relaxed'>
                        お問い合わせフォームか、InstagramのDMからご連絡ください。
                    </p>
                    <div className='relative mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row'>
                        <Button
                            asChild
                            className='border-white/70 bg-transparent px-8 py-5 text-white hover:bg-white hover:text-primary'
                            variant='outline'
                        >
                            <NextLink href={pageLinkObject.CONTACT.href}>お問い合わせフォームへ</NextLink>
                        </Button>
                        <NextLink
                            className='inline-flex items-center gap-2 text-primary-foreground/85 text-sm underline underline-offset-4 hover:text-primary-foreground'
                            href={siteSettings.instagram_url}
                        >
                            <FaInstagram size={18} />
                            InstagramのDMで聞く
                        </NextLink>
                    </div>
                </Reveal>
            </div>
        </>
    )
}
