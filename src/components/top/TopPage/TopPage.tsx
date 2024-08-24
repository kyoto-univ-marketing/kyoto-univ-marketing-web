import Link from 'next/link'
import { FC } from 'react'

import { client } from '@/api/client'
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

export const TopPage: FC<TopPageProps> = async ({ ...props }) => {
    const { data: messageData } = await client.GET('/api/text/{id}/', { params: { path: { id: 'top_message' } } })
    if (!messageData?.text) {
        console.error("Couldn't get top message")
    }
    const { data: subMessageData } = await client.GET('/api/text/{id}/', {
        params: { path: { id: 'top_sub_message' } },
    })
    if (!subMessageData?.text) {
        console.error("Couldn't get top sub message")
    }
    const message = messageData?.text ?? ''
    const subMessage = subMessageData?.text ?? ''
    return (
        <div className='relative w-full'>
            <ImageSwitch
                className='absolute -z-50 brightness-50'
                imageList={imageList}
                interval={7000}
                transitionDuration={2000}
            />
            <div className='flex h-svh flex-col'>
                <div className='absolute right-0 p-6 text-white'>
                    <HamburgerMenu />
                </div>
                <div className='flex w-full flex-1 select-none flex-col items-center justify-between text-white'>
                    <div className='flex flex-col items-center space-y-6 p-6 pt-16'>
                        <div>
                            <Logo reverse size='3xl' />
                        </div>
                        <h1 className='w-fit px-6 font-title text-3xl font-bold'>
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
                        <div className='w-fit max-w-[75%] bg-background px-12 py-8 text-foreground'>
                            <h2 className='ml-4 text-xl'>{message}</h2>
                            <p className='whitespace-pre-wrap pt-4 text-sm'>{subMessage}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mb-16'>
                <LatestArticles />
            </div>
            <div className='mb-16 grid gap-4'>
                <PageImage alt='勉強会の様子' containerClassName='w-3/4 aspect-[64/27]' src={img3884} />
                <PageImage alt='勉強会の教室' containerClassName='w-1/2 justify-self-end' src={img3893} />
            </div>
            <div className='mb-16'>
                <TopPageProject />
            </div>
        </div>
    )
}
