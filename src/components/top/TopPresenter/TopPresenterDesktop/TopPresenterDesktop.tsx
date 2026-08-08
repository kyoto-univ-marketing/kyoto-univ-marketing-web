import { FC, Suspense } from 'react'

import { Logo } from '../../../common/Logo/Logo'
import { ImageSwitch } from '../../ImageSwitch/ImageSwitch'
import { topHeaderImageList } from '../../imageList'
import { LatestArticles } from '../../LatestArticles/LatestArticles'
import { LatestArticlesSkeleton } from '../../LatestArticlesSkeleton/LatestArticlesSkeleton'
import { TopPageProject } from '../../TopPageProject/TopPageProject'

export const TopPresenterDesktop: FC = () => {
    return (
        <div className='relative w-full'>
            <div className='-z-50 fixed top-18 left-0 h-[calc(100svh-var(--spacing)*18)] w-full'>
                <div className='relative size-full'>
                    <ImageSwitch
                        className='size-full'
                        imageList={topHeaderImageList}
                        interval={7000}
                        transitionDuration={2000}
                    />
                    {/* 写真を見せるため白膜は薄くする。文字の可読性は各テキストの帯で確保する */}
                    <div className='absolute top-0 left-0 size-full bg-white/40' />
                </div>
            </div>
            <div className='flex h-[calc(100svh-var(--spacing)*18)] flex-col items-center justify-center gap-10 p-8 lg:p-16'>
                <div className='flex w-full items-center justify-center gap-8 lg:gap-16'>
                    <div className='flex w-full max-w-1/3 items-center justify-center'>
                        <h1 className='w-fit bg-background/85 px-6 py-3 font-bold font-title text-3xl'>
                            <span className='inline-block'>京大</span>
                            <span className='inline-block'>マーケティング</span>
                            <span className='inline-block'>研究所</span>
                        </h1>
                    </div>
                    <div className='flex flex-1 items-center justify-center'>
                        <div className='aspect-square w-full max-w-[33vh]'>
                            <Logo className='size-full' sizes='360px' />
                        </div>
                    </div>
                    <div className='flex w-full max-w-1/3 items-center justify-center'>
                        <div className='w-fit bg-background/85 px-6 py-3 font-en text-3xl tracking-wide'>
                            Kyodai Marketing Institute
                        </div>
                    </div>
                </div>
                <p className='bg-background/85 px-8 py-4 text-center font-bold font-title text-heading tracking-wider'>
                    大学生に「セカンド原体験」を与える。
                </p>
            </div>
            <div className='mb-24 grid grid-cols-2 gap-8 px-8'>
                <div className='rounded-md bg-white pb-8 shadow-md'>
                    <Suspense fallback={<LatestArticlesSkeleton />}>
                        <LatestArticles />
                    </Suspense>
                </div>
                <div className='rounded-md bg-white pb-8 shadow-md'>
                    <TopPageProject />
                </div>
            </div>
        </div>
    )
}
