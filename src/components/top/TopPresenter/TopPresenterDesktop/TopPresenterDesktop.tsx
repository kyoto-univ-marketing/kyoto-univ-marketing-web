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
            <div className='fixed w-full top-18 left-0 -z-50 h-[calc(100svh-var(--spacing)*18)]'>
                <div className='relative size-full'>
                    <ImageSwitch
                        className='size-full'
                        imageList={imageList}
                        interval={7000}
                        transitionDuration={2000}
                    />
                    <div className='bg-white/75 size-full absolute top-0 left-0'></div>
                </div>
            </div>
            <div className='flex h-[calc(100svh-var(--spacing)*18)] justify-center items-center lg:p-16 lg:gap-16 p-8 gap-8'>
                <div className='flex justify-center items-center w-full max-w-1/3'>
                    <h1 className='font-title text-3xl font-bold w-fit'>
                        <span className='inline-block'>京大</span>
                        <span className='inline-block'>マーケティング</span>
                        <span className='inline-block'>研究所</span>
                    </h1>
                </div>
                <div className='flex-1 h-full relative'>
                    <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 aspect-square w-full max-w-[33vh]'>
                        <Logo className='size-full' />
                    </div>
                </div>
                <div className='flex justify-center items-center w-full max-w-1/3'>
                    <div className='font-title text-3xl font-bold w-fit'>Kyodai Marketing Institute</div>
                </div>
            </div>
            {/* <div className='p-12'>
                <p className='whitespace-pre-wrap text-sm'>{subMessage}</p>
            </div> */}
            <div className='grid grid-cols-2 mb-24 px-8 gap-8'>
                <div className='bg-white/75 rounded-md pb-8 drop-shadow'>
                    <Suspense fallback={<LatestArticlesSkeleton />}>
                        <LatestArticles />
                    </Suspense>
                </div>
                <div className='bg-white/75 rounded-md pb-8 drop-shadow'>
                    <TopPageProject />
                </div>
            </div>
        </div>
    )
}
