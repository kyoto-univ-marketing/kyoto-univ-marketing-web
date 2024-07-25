import Link from 'next/link'
import { FC } from 'react'

import { PageImage } from '@/components/common/PageImage/PageImage'

import img3884 from '../../../../public/page-images/top/IMG_3884.webp'
import img3893 from '../../../../public/page-images/top/IMG_3893.webp'
import img3767 from '../../../../public/top-header/IMG_3767.webp'
import img3816 from '../../../../public/top-header/IMG_3816.webp'
import img3878 from '../../../../public/top-header/IMG_3878.webp'
import img6855 from '../../../../public/top-header/IMG_6855.webp'
import img9802 from '../../../../public/top-header/IMG_9802.webp'
import { HamburgerMenu } from '../../common/HamburgerMenu/HamburgerMenu'
import { Logo } from '../../common/Logo/Logo'
import { Button } from '../../ui/button'
import { ImageSwitch } from '../ImageSwitch/ImageSwitch'
import { LatestArticles } from '../LatestArticles/LatestArticles'
import { TopPageProject } from '../TopPageProject/TopPageProject'

export interface TopPageProps {}

const imageList = [img3878, img3767, img3816, img6855, img9802]

export const TopPage: FC<TopPageProps> = ({ ...props }) => {
    return (
        <div className='relative w-full'>
            <ImageSwitch
                className='absolute -z-50 brightness-50'
                imageList={imageList}
                interval={7000}
                transitionDuration={2000}
            />
            <div className='flex h-svh w-full flex-col items-center justify-between p-6 text-white'>
                <div className='h-6 self-end'>
                    <HamburgerMenu />
                </div>
                <div>
                    <Logo className='size-32 outline outline-4 outline-white' />
                </div>
                <h1 className='font-title text-5xl font-bold leading-[1.2]'>
                    <span className='inline-block'>京大</span>
                    <span className='inline-block'>マーケティング</span>
                    <span className='inline-block'>研究所</span>
                </h1>
                <div className='w-full'>
                    <p>メッセージメッセージメッセージメッセージ</p>
                    <p>メッセージメッセージメッセージ</p>
                    <p>メッセージメッセージメッセージメッセージメッセージ</p>
                </div>
                <Button variant='outline' className='bg-transparent' asChild>
                    <Link href='/about'>サークルについて知る →</Link>
                </Button>
            </div>
            <div className='mb-16'>
                <LatestArticles />
            </div>
            <div className='mb-16 grid gap-4'>
                <PageImage src={img3884} alt='勉強会の様子' containerClassName='w-3/4 aspect-[64/27]' />
                <PageImage src={img3893} alt='勉強会の教室' containerClassName='w-1/2 justify-self-end' />
            </div>
            <div className='mb-16'>
                <TopPageProject />
            </div>
        </div>
    )
}
