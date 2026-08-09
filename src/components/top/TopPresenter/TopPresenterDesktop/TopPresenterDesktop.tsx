import { FC, Suspense } from 'react'

import { Reveal } from '@/components/common/Reveal/Reveal'

import { Logo } from '../../../common/Logo/Logo'
import { ImageSwitch } from '../../ImageSwitch/ImageSwitch'
import { topHeaderImageList } from '../../imageList'
import { LatestArticles } from '../../LatestArticles/LatestArticles'
import { LatestArticlesSkeleton } from '../../LatestArticlesSkeleton/LatestArticlesSkeleton'
import { ScrollCue } from '../../ScrollCue/ScrollCue'
import { TopPageProject } from '../../TopPageProject/TopPageProject'

export const TopPresenterDesktop: FC = () => {
    return (
        <div className='w-full'>
            {/*
             * 写真には一切手を加えず（白膜をかけない）、文字は紺のパネルに分けて置く。
             * 写真の上に文字を重ねると、どちらも中途半端になるため。
             */}
            <section className='flex h-[calc(100svh-var(--spacing)*18)]'>
                {/* 紺のパネルと写真を横に並べる。写真を全幅に敷いてパネルを重ねると
                    被写体がパネルの裏に隠れ、写真の枠の中で中央に来ないため */}
                <div className='relative flex w-[46%] max-w-[34rem] shrink-0 flex-col justify-center gap-10 bg-primary px-12 text-primary-foreground lg:px-16'>
                    <Reveal className='flex flex-col gap-8'>
                        <Logo className='size-20' reverse sizes='160px' />
                        <div className='flex flex-col gap-5'>
                            <h1 className='font-title text-[clamp(1.75rem,1rem+1.8vw,2.75rem)] leading-tight'>
                                京大マーケティング研究所
                            </h1>
                            <span aria-hidden className='block h-px w-16 bg-brand-accent' />
                            <p className='font-en text-sm uppercase tracking-[0.35em]'>Kyodai Marketing Institute</p>
                        </div>
                        <p className='font-title text-heading leading-relaxed'>
                            大学生に「セカンド原体験」を与える。
                        </p>
                    </Reveal>
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
            <div className='mb-24 grid grid-cols-2 gap-8 px-8 pt-8'>
                <Reveal className='border border-gray-200 bg-white pb-8'>
                    <Suspense fallback={<LatestArticlesSkeleton />}>
                        <LatestArticles />
                    </Suspense>
                </Reveal>
                <Reveal className='border border-gray-200 bg-white pb-8' delay={120}>
                    <TopPageProject />
                </Reveal>
            </div>
        </div>
    )
}
