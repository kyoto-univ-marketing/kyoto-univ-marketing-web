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
        <div className='relative w-full'>
            {/* 写真はヘッダーの裏まで回り込ませる。ヘッダーが透過するため一枚の絵として見える */}
            <div className='-z-50 fixed top-0 left-0 h-svh w-full'>
                <div className='relative size-full'>
                    <ImageSwitch
                        className='size-full'
                        imageList={topHeaderImageList}
                        interval={7000}
                        transitionDuration={2000}
                    />
                    {/* 白の薄膜。写真を活かしつつ、上に載る明朝の黒文字が読める濃さにする */}
                    <div className='absolute top-0 left-0 size-full bg-linear-to-b from-white/70 via-white/55 to-white/75' />
                </div>
            </div>
            <div className='relative flex h-[calc(100svh-var(--spacing)*18)] flex-col items-center justify-center gap-10 px-8'>
                <Reveal className='aspect-square w-full max-w-[22vh]'>
                    <Logo className='size-full' sizes='300px' />
                </Reveal>
                <Reveal className='flex flex-col items-center gap-5' delay={120}>
                    <h1 className='text-center font-title text-[clamp(2rem,1.2rem+2vw,3.25rem)] leading-tight'>
                        京大マーケティング研究所
                    </h1>
                    <span aria-hidden className='block h-px w-16 bg-brand-accent' />
                    <p className='font-en text-sm uppercase tracking-[0.4em]'>Kyodai Marketing Institute</p>
                </Reveal>
                <Reveal delay={240}>
                    <p className='text-center font-title text-heading tracking-wider'>
                        大学生に「セカンド原体験」を与える。
                    </p>
                </Reveal>
                <ScrollCue />
            </div>
            <div className='mb-24 grid grid-cols-2 gap-8 px-8'>
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
