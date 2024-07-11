'use client'

import Image from 'next/image'
import { FC, useEffect, useState } from 'react'

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
                    key={index}
                    src={src}
                    alt={alt}
                    isShow={current === index}
                    transitionDuration={transitionDuration}
                />
            ))}
        </div>
    )
}

interface ImgProps {
    src: string
    alt?: string
    isShow: boolean
    transitionDuration: number
}

const Img: FC<ImgProps> = ({ src, alt = '', isShow, transitionDuration }) => {
    return (
        <Image
            className={cn(
                'h-full w-full object-cover transition-opacity ease-in-out',
                isShow ? 'opacity-100' : 'opacity-0',
            )}
            style={{ transitionDuration: `${transitionDuration}ms` }}
            fill
            src={src}
            alt={alt}
        ></Image>
    )
}
