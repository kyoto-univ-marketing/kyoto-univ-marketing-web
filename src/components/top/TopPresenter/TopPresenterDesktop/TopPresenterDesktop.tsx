import { FC, Suspense } from 'react'

import { PageImage } from '@/components/common/PageImage/PageImage'
import { Reveal } from '@/components/common/Reveal/Reveal'

import img3884 from '../../../../../public/page-images/top/IMG_3884.webp'
import img3893 from '../../../../../public/page-images/top/IMG_3893.webp'
import { Logo } from '../../../common/Logo/Logo'
import { ImageSwitch } from '../../ImageSwitch/ImageSwitch'
import { topHeaderImageList } from '../../imageList'
import { LatestArticles } from '../../LatestArticles/LatestArticles'
import { LatestArticlesSkeleton } from '../../LatestArticlesSkeleton/LatestArticlesSkeleton'
import { MakeHouse } from '../../MakeHouse/MakeHouse'
import { ScrollCue } from '../../ScrollCue/ScrollCue'
import { SecondOrigin } from '../../SecondOrigin/SecondOrigin'
import { TopCta } from '../../TopCta/TopCta'

export interface TopPresenterDesktopProps {
    message: string
    subMessage: string
}

export const TopPresenterDesktop: FC<TopPresenterDesktopProps> = ({ message, subMessage }) => {
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

            <div className='section-stack py-24'>
                {/* PCは横幅を使う。左に文章、右に写真の二段組みにして、
                    スマホと同じ縦一列にならないようにする */}
                <Reveal className='mx-auto grid w-full max-w-(--breakpoint-lg) grid-cols-2 items-center gap-12 px-8'>
                    <div className='space-y-6'>
                        <h2 className='font-title text-heading leading-relaxed'>{message}</h2>
                        <p className='whitespace-pre-wrap text-gray-700'>{subMessage}</p>
                    </div>
                    <div className='grid gap-4'>
                        <PageImage alt='勉強会の様子' containerClassName='w-full aspect-64/27' src={img3884} />
                        <PageImage alt='勉強会の教室' containerClassName='w-2/3 justify-self-end' src={img3893} />
                    </div>
                </Reveal>

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
