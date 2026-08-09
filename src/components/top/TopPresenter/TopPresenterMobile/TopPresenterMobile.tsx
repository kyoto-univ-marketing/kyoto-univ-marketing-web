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
import { TopPageProject } from '../../TopPageProject/TopPageProject'

export interface TopPresenterMobileProps {
    message: string
    subMessage: string
}

export const TopPresenterMobile: FC<TopPresenterMobileProps> = ({ message, subMessage }) => {
    return (
        <div className='relative w-full'>
            {/* 写真はヘッダーの裏まで伸ばし、画面いっぱいの一枚に見せる */}
            <ImageSwitch
                className='-z-50 -top-18 absolute h-svh brightness-[0.45]'
                imageList={topHeaderImageList}
                interval={7000}
                transitionDuration={2000}
            />
            <div className='flex h-[calc(100svh-var(--spacing)*18)] select-none flex-col items-center justify-center gap-7 px-6 text-white'>
                <Logo reverse size='3xl' />
                <div className='flex flex-col items-center gap-4 text-center'>
                    <h1 className='font-title text-3xl leading-tight'>
                        <span className='inline-block'>京大</span>
                        <span className='inline-block'>マーケティング研究所</span>
                    </h1>
                    <span aria-hidden className='block h-px w-12 bg-brand-accent' />
                    <p className='font-en text-xs uppercase tracking-[0.35em]'>Kyodai Marketing Institute</p>
                </div>
                <p className='text-center font-title text-xl tracking-wider'>大学生に「セカンド原体験」を与える。</p>
                <Button
                    asChild
                    className='mt-2 border-white/70 bg-transparent px-10 py-6 text-white hover:bg-white hover:text-primary'
                    variant='outline'
                >
                    <Link href='/about'>サークルについて</Link>
                </Button>
            </div>
            <Reveal className='space-y-6 px-8 py-16'>
                <h2 className='font-title text-heading leading-relaxed'>{message}</h2>
                <p className='whitespace-pre-wrap text-sm'>{subMessage}</p>
            </Reveal>
            <div className='mb-16'>
                <Suspense fallback={<LatestArticlesSkeleton />}>
                    <LatestArticles />
                </Suspense>
            </div>
            <Reveal className='mb-16 grid gap-4'>
                <PageImage alt='勉強会の様子' containerClassName='w-3/4 aspect-64/27' src={img3884} />
                <PageImage alt='勉強会の教室' containerClassName='w-1/2 justify-self-end' src={img3893} />
            </Reveal>
            <div className='mb-16'>
                <TopPageProject />
            </div>
        </div>
    )
}
