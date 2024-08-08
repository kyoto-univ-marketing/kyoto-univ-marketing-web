'use client'

import Image from 'next/image'
import { ComponentProps, FC, useEffect, useState } from 'react'

import { cn } from '@/lib/utils'

export interface ImageSwitchProps {
    /** 画像データのリスト */
    imageList: { src: string; alt?: string }[]
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
            {imageList.map(({ src, alt }, index) => (
                <Img
                    alt={alt ?? ''}
                    isShow={current === index}
                    key={index}
                    loading={index === 0 ? 'eager' : 'lazy'}
                    priority={index === 0}
                    src={src}
                    transitionDuration={transitionDuration}
                />
            ))}
        </div>
    )
}

interface ImgProps extends ComponentProps<typeof Image> {
    isShow: boolean
    transitionDuration: number
}

const Img: FC<ImgProps> = ({ src, alt, isShow, transitionDuration, style, ...props }) => {
    return (
        <Image
            {...props}
            alt={alt}
            className={cn(
                'h-full w-full object-cover transition-opacity ease-in-out',
                isShow ? 'opacity-100' : 'opacity-0',
            )}
            fill
            src={src}
            style={{ transitionDuration: `${transitionDuration}ms`, ...style }}
        ></Image>
    )
}
