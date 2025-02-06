import { FC } from 'react'
import { Suspense } from 'react'
import img3767 from '../../../../../public/top-header/IMG_3767.webp'
import img3816 from '../../../../../public/top-header/IMG_3816.webp'
import img3878 from '../../../../../public/top-header/IMG_3878.webp'
import img6855 from '../../../../../public/top-header/IMG_6855.webp'
import img9802 from '../../../../../public/top-header/IMG_9802.webp'
import { Logo } from '../../../common/Logo/Logo'
import { ImageSwitch } from '../../ImageSwitch/ImageSwitch'
import { LatestArticles } from '../../LatestArticles/LatestArticles'
import { LatestArticlesSkeleton } from '../../LatestArticlesSkeleton/LatestArticlesSkeleton'
import { TopPageProject } from '../../TopPageProject/TopPageProject'

export interface TopPresenterDesktopProps {
    message: string
    subMessage: string
}

const imageList = [img3878, img3767, img3816, img6855, img9802]

export const TopPresenterDesktop: FC<TopPresenterDesktopProps> = ({ message, subMessage, ...props }) => {
    return (
        <div className='relative w-full'>
            <div className='-z-50 fixed top-18 left-0 h-[calc(100svh-var(--spacing)*18)] w-full'>
                <div className='relative size-full'>
                    <ImageSwitch
                        className='size-full'
                        imageList={imageList}
                        interval={7000}
                        transitionDuration={2000}
                    />
                    <div className='absolute top-0 left-0 size-full bg-white/75' />
                </div>
            </div>
            <div className='flex h-[calc(100svh-var(--spacing)*18)] items-center justify-center gap-8 p-8 lg:gap-16 lg:p-16'>
                <div className='flex w-full max-w-1/3 items-center justify-center'>
                    <h1 className='w-fit font-bold font-title text-3xl'>
                        <span className='inline-block'>京大</span>
                        <span className='inline-block'>マーケティング</span>
                        <span className='inline-block'>研究所</span>
                    </h1>
                </div>
                <div className='relative h-full flex-1'>
                    <div className='-translate-x-1/2 -translate-y-1/2 absolute top-1/2 left-1/2 aspect-square w-full max-w-[33vh]'>
                        <Logo className='size-full' />
                    </div>
                </div>
                <div className='flex w-full max-w-1/3 items-center justify-center'>
                    <div className='w-fit font-bold font-title text-3xl'>Kyodai Marketing Institute</div>
                </div>
            </div>
            {/* <div className='p-12'>
                <p className='whitespace-pre-wrap text-sm'>{subMessage}</p>
            </div> */}
            <div className='mb-24 grid grid-cols-2 gap-8 px-8'>
                <div className='rounded-md bg-white/75 pb-8 drop-shadow'>
                    <Suspense fallback={<LatestArticlesSkeleton />}>
                        <LatestArticles />
                    </Suspense>
                </div>
                <div className='rounded-md bg-white/75 pb-8 drop-shadow'>
                    <TopPageProject />
                </div>
            </div>
        </div>
    )
}
