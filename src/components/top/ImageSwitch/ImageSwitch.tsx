'use client'

import Image from 'next/image'
import { FC, useEffect, useState } from 'react'

import { cn } from '@/lib/utils'

export interface HeroImage {
    src: string
    alt?: string
    /** 切り抜きで消えては困るもの（看板など）がある写真にだけ指定する */
    objectPosition?: string
}

export interface HeroSlide extends HeroImage {
    /**
     * 右に並べて見せる2枚目。
     * 横長の枠に縦長の写真を1枚だけ入れると上下が大きく切れてしまうため、
     * 2枚並べて枠を縦長に分割し、それぞれを切らずに見せたいときに使う。
     */
    secondary?: HeroImage
}

export interface ImageSwitchProps {
    /** 画像データのリスト */
    imageList: HeroSlide[]
    /** 画像切替の間隔（ms） */
    interval: number
    /** 切り替えアニメーションの長さ（ms） */
    transitionDuration: number
    className?: string
}

export const ImageSwitch: FC<ImageSwitchProps> = ({ imageList, interval, transitionDuration, className, ...props }) => {
    const [current, setCurrent] = useState(0)
    const imageLen = imageList.length

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrent((prev) => (prev + 1) % imageLen)
        }, interval)
        return () => clearInterval(intervalId)
    }, [imageLen, interval])

    return (
        <div className={cn('h-svh w-full', className)}>
            {imageList.map((slide, index) => (
                <div
                    className={cn(
                        'absolute inset-0 flex transition-opacity ease-in-out',
                        current === index ? 'opacity-100' : 'opacity-0',
                    )}
                    key={slide.src}
                    style={{ transitionDuration: `${transitionDuration}ms` }}
                >
                    <Img
                        {...slide}
                        className='flex-1'
                        eager={index === 0}
                        sizes={slide.secondary ? '62vw' : '100vw'}
                    />
                    {slide.secondary && (
                        <Img {...slide.secondary} className='w-[38%]' eager={index === 0} sizes='38vw' />
                    )}
                </div>
            ))}
        </div>
    )
}

const Img: FC<HeroImage & { className: string; eager: boolean; sizes: string }> = ({
    src,
    alt,
    objectPosition,
    className,
    eager,
    sizes,
}) => (
    <div className={cn('relative h-full overflow-hidden', className)}>
        <Image
            alt={alt ?? ''}
            className='object-cover'
            fill
            loading={eager ? 'eager' : 'lazy'}
            priority={eager}
            sizes={sizes}
            src={src}
            style={objectPosition ? { objectPosition } : undefined}
        />
    </div>
)
