import { PageImage } from '@/components/common/PageImage/PageImage'
import Link from 'next/link'
import { FC } from 'react'
import { Suspense } from 'react'

import img3884 from '../../../../../public/page-images/top/IMG_3884.webp'
import img3893 from '../../../../../public/page-images/top/IMG_3893.webp'
import img3767 from '../../../../../public/top-header/IMG_3767.webp'
import img3816 from '../../../../../public/top-header/IMG_3816.webp'
import img3878 from '../../../../../public/top-header/IMG_3878.webp'
import img6855 from '../../../../../public/top-header/IMG_6855.webp'
import img9802 from '../../../../../public/top-header/IMG_9802.webp'
import { Logo } from '../../../common/Logo/Logo'
import { Button } from '../../../ui/button'
import { ImageSwitch } from '../../ImageSwitch/ImageSwitch'
import { LatestArticles } from '../../LatestArticles/LatestArticles'
import { LatestArticlesSkeleton } from '../../LatestArticlesSkeleton/LatestArticlesSkeleton'
import { TopPageProject } from '../../TopPageProject/TopPageProject'

export interface TopPresenterMobileProps {
    message: string
    subMessage: string
}

const imageList = [img3878, img3767, img3816, img6855, img9802]

export const TopPresenterMobile: FC<TopPresenterMobileProps> = ({ message, subMessage, ...props }) => {
    return (
        <div className='relative w-full'>
            <ImageSwitch
                className='-z-50 absolute h-[calc(100svh-var(--spacing)*18)] brightness-50'
                imageList={imageList}
                interval={7000}
                transitionDuration={2000}
            />
            <div className='flex h-[calc(100svh-var(--spacing)*18)] flex-col'>
                <div className='flex w-full flex-1 select-none flex-col items-center justify-between text-white'>
                    <div className='flex flex-col items-center space-y-6 p-6 pt-16'>
                        <div>
                            <Logo reverse size='3xl' />
                        </div>
                        <h1 className='w-fit px-6 font-bold font-title text-3xl'>
                            <span className='inline-block'>京大</span>
                            <span className='inline-block'>マーケティング研究所</span>
                        </h1>
                    </div>
                    <div className='flex w-full flex-col space-y-8'>
                        <Button
                            asChild
                            className='w-fit min-w-[66.7%] self-center rounded-none p-6 text-primary'
                            variant='outline'
                        >
                            <Link href='/about'>サークルについて</Link>
                        </Button>
                        <div className='mb-8! w-fit max-w-[75%] bg-primary px-12 py-8 text-primary-foreground'>
                            <h2 className='ml-4 text-xl'>{message}</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className='p-12'>
                <p className='whitespace-pre-wrap text-sm'>{subMessage}</p>
            </div>
            <div className='mb-16'>
                <Suspense fallback={<LatestArticlesSkeleton />}>
                    <LatestArticles />
                </Suspense>
            </div>
            <div className='mb-16 grid gap-4'>
                <PageImage alt='勉強会の様子' containerClassName='w-3/4 aspect-64/27' src={img3884} />
                <PageImage alt='勉強会の教室' containerClassName='w-1/2 justify-self-end' src={img3893} />
            </div>
            <div className='mb-16'>
                <TopPageProject />
            </div>
        </div>
    )
}
