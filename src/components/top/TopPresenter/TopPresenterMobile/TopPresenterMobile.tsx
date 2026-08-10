import Link from 'next/link'
import { FC, Suspense } from 'react'

import { PageImage } from '@/components/common/PageImage/PageImage'
import { Reveal } from '@/components/common/Reveal/Reveal'

import img3884 from '../../../../../public/page-images/top/IMG_3884.webp'
import img3893 from '../../../../../public/page-images/top/IMG_3893.webp'
import { Logo } from '../../../common/Logo/Logo'
import { Button } from '../../../ui/button'
import { ImageSwitch } from '../../ImageSwitch/ImageSwitch'
import { topHeaderImageList } from '../../imageList'
import { LatestArticles } from '../../LatestArticles/LatestArticles'
import { LatestArticlesSkeleton } from '../../LatestArticlesSkeleton/LatestArticlesSkeleton'
import { MakeHouse } from '../../MakeHouse/MakeHouse'
import { SecondOrigin } from '../../SecondOrigin/SecondOrigin'
import { TopCta } from '../../TopCta/TopCta'

export interface TopPresenterMobileProps {
    message: string
    subMessage: string
}

export const TopPresenterMobile: FC<TopPresenterMobileProps> = ({ message, subMessage }) => {
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
            <Reveal className='space-y-6 px-8 py-16'>
                <h2 className='font-title text-heading leading-relaxed'>{message}</h2>
                <p className='whitespace-pre-wrap text-sm'>{subMessage}</p>
            </Reveal>
            <div className='mb-16'>
                <Suspense fallback={null}>
                    <SecondOrigin />
                </Suspense>
            </div>
            <div className='mb-16'>
                <MakeHouse />
            </div>
            <div className='mb-16'>
                <Suspense fallback={<LatestArticlesSkeleton />}>
                    <LatestArticles />
                </Suspense>
            </div>
            <Reveal className='mb-16 grid gap-4'>
                <PageImage alt='勉強会の様子' containerClassName='w-3/4 aspect-64/27' src={img3884} />
                <PageImage alt='勉強会の教室' containerClassName='w-1/2 justify-self-end' src={img3893} />
            </Reveal>

            <TopCta />
        </div>
    )
}
