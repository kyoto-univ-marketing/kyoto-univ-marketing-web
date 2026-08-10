import Link from 'next/link'
import { FC, Suspense } from 'react'

import { Logo } from '../../../common/Logo/Logo'
import { Button } from '../../../ui/button'
import { Activities } from '../../Activities/Activities'
import { ImageSwitch } from '../../ImageSwitch/ImageSwitch'
import { topHeaderImageList } from '../../imageList'
import { LatestArticles } from '../../LatestArticles/LatestArticles'
import { LatestArticlesSkeleton } from '../../LatestArticlesSkeleton/LatestArticlesSkeleton'
import { MakeHouse } from '../../MakeHouse/MakeHouse'
import { SecondOrigin } from '../../SecondOrigin/SecondOrigin'
import { TopCta } from '../../TopCta/TopCta'

export interface TopPresenterMobileProps {}

export const TopPresenterMobile: FC<TopPresenterMobileProps> = () => {
    return (
        <div className='w-full'>
            {/* 写真には手を加えず、文字は下の紺の帯に分けて置く（PCと同じ考え方） */}
            <section className='flex h-[calc(100svh-var(--spacing)*18)] flex-col'>
                <div className='relative flex-1 overflow-hidden'>
                    <ImageSwitch
                        className='absolute inset-0 h-full'
                        imageList={topHeaderImageList}
                        interval={7000}
                        transitionDuration={2000}
                    />
                </div>
                <div className='flex flex-col gap-5 bg-primary px-8 py-8 text-primary-foreground'>
                    <div className='flex items-center gap-4'>
                        <Logo reverse size='xl' />
                        <h1 className='font-title text-2xl leading-tight'>
                            <span className='inline-block whitespace-nowrap'>京大</span>
                            <span className='inline-block whitespace-nowrap'>マーケティング</span>
                            <span className='inline-block whitespace-nowrap'>研究所</span>
                        </h1>
                    </div>
                    <div className='flex flex-col gap-3'>
                        <span aria-hidden className='block h-px w-12 bg-brand-accent' />
                        <p className='font-en text-xs uppercase tracking-[0.3em]'>Kyodai Marketing Institute</p>
                    </div>
                    <p className='font-title text-lg'>大学生に「セカンド原体験」を与える。</p>
                    <Button
                        asChild
                        className='mt-1 w-fit border-white/70 bg-transparent px-8 py-5 text-white hover:bg-white hover:text-primary'
                        variant='outline'
                    >
                        <Link href='/about'>団体概要</Link>
                    </Button>
                </div>
            </section>
            <div className='section-stack py-16'>
                {/* 並び順はPCと同じ。していること → 考え方 → 拠点 → お知らせ */}
                <Activities />
                <Suspense fallback={null}>
                    <SecondOrigin />
                </Suspense>
                <MakeHouse />
                <Suspense fallback={<LatestArticlesSkeleton />}>
                    <LatestArticles />
                </Suspense>
            </div>

            <TopCta />
        </div>
    )
}
