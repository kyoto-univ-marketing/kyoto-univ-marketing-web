import { FC, Suspense } from 'react'

import { Reveal } from '@/components/common/Reveal/Reveal'

import { Logo } from '../../../common/Logo/Logo'
import { Activities } from '../../Activities/Activities'
import { ImageSwitch } from '../../ImageSwitch/ImageSwitch'
import { topHeaderImageList } from '../../imageList'
import { LatestArticles } from '../../LatestArticles/LatestArticles'
import { LatestArticlesSkeleton } from '../../LatestArticlesSkeleton/LatestArticlesSkeleton'
import { MakeHouse } from '../../MakeHouse/MakeHouse'
import { ScrollCue } from '../../ScrollCue/ScrollCue'
import { SecondOrigin } from '../../SecondOrigin/SecondOrigin'
import { TopCta } from '../../TopCta/TopCta'

export interface TopPresenterDesktopProps {}

export const TopPresenterDesktop: FC<TopPresenterDesktopProps> = () => {
    return (
        <div className='w-full'>
            {/*
             * 写真には一切手を加えず（白膜をかけない）、文字は紺のパネルに分けて置く。
             * 写真の上に文字を重ねると、どちらも中途半端になるため。
             */}
            <section className='flex h-[calc(100svh-var(--spacing)*18)]'>
                {/* 紺のパネルと写真を横に並べる。写真を全幅に敷いてパネルを重ねると
                    被写体がパネルの裏に隠れ、写真の枠の中で中央に来ないため */}
                <div className='relative flex w-[46%] max-w-[34rem] shrink-0 flex-col justify-center gap-12 bg-primary px-8 text-primary-foreground md:px-10 lg:px-16'>
                    <Reveal className='flex flex-col gap-10'>
                        <Logo className='size-16' reverse sizes='128px' />
                        <div className='flex flex-col gap-6'>
                            {/* 語の途中（研／究所）で折り返さないよう、意味の切れ目で区切る */}
                            <h1 className='font-title text-[clamp(2rem,1rem+2.4vw,3.5rem)] leading-[1.15]'>
                                <span className='inline-block whitespace-nowrap'>京大</span>
                                <span className='inline-block whitespace-nowrap'>マーケティング</span>
                                <span className='inline-block whitespace-nowrap'>研究所</span>
                            </h1>
                            <span aria-hidden className='block h-px w-16 bg-brand-accent' />
                            <p className='font-title text-heading leading-relaxed'>
                                大学生に「セカンド原体験」を与える。
                            </p>
                        </div>
                    </Reveal>
                    {/*
                     * 欧文名は縦組みにしてパネルの右端に沿わせる。本を立てたときの背に近い扱いで、
                     * 明朝と紺の面に「和」の軸を一本入れるための装飾。読ませる要素ではない。
                     */}
                    <p className='-translate-y-1/2 absolute top-1/2 right-5 hidden font-en text-primary-foreground/60 text-xs uppercase tracking-[0.5em] [writing-mode:vertical-rl] lg:block'>
                        Kyodai Marketing Institute
                    </p>
                    <ScrollCue reverse />
                </div>
                <div className='relative flex-1 overflow-hidden'>
                    <ImageSwitch
                        className='absolute inset-0 h-full'
                        imageList={topHeaderImageList}
                        interval={7000}
                        transitionDuration={2000}
                    />
                </div>
            </section>

            {/*
             * 並び順は「活動概要 → 考え方 → 拠点 → お知らせ」。
             * はじめて来た人は、何をしている団体かを知ってからでないと
             * セカンド原体験の話を受け取れないため、活動を先に置いている。
             */}
            <div className='section-stack py-24'>
                <Activities />

                <Suspense fallback={null}>
                    <SecondOrigin />
                </Suspense>

                <MakeHouse />

                <div className='mx-auto w-full max-w-(--breakpoint-md) px-8'>
                    <Reveal>
                        <Suspense fallback={<LatestArticlesSkeleton />}>
                            <LatestArticles />
                        </Suspense>
                    </Reveal>
                </div>
            </div>

            <TopCta />
        </div>
    )
}
