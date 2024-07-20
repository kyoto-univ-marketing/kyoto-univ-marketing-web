import Link from 'next/link'
import { FC } from 'react'

import { HamburgerMenu } from '../../common/HamburgerMenu/HamburgerMenu'
import { Logo } from '../../common/Logo/Logo'
import { Button } from '../../ui/button'
import { ImageSwitch } from '../ImageSwitch/ImageSwitch'
import { LatestArticles } from '../LatestArticles/LatestArticles'

export interface TopPageProps {}

const imageList = [
    'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Kyoto_University_Clock_Tower.jpg/1200px-Kyoto_University_Clock_Tower.jpg',
    'https://www.keihanhotels-resorts.co.jp/the-thousand-kyoto/sight/asset/b5bcabab0fcde4e3b4969d388a4923f30fc7e549.png',
    'https://www.shokoku-ji.jp/wp-content/themes/shokokuji/assets/img/kinkakuji/about/imgSlide01@2x.jpg',
].map((src) => ({ src })) // TODO 本番の画像を設定

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
        </div>
    )
}
