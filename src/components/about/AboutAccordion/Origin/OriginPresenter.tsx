import Image from 'next/image'
import { FC } from 'react'

import MakenekoImg from '@/../public/page-images/about/makeneko.webp'
import OriginImg from '@/../public/page-images/about/origin.webp'
import SakodaImg from '@/../public/page-images/about/sakoda.webp'
import { ImageWithCaption } from '@/components/common/ImageWithCaption/ImageWithCaption'

export interface OriginPresenterProps {
    text: string
}

export const OriginPresenter: FC<OriginPresenterProps> = ({ text, ...props }) => {
    return (
        <>
            <Image {...OriginImg} alt='集合写真' className='mb-12 aspect-video object-cover' />
            <div className='mb-12 space-y-8 p-4'>
                {text.split('\n').map((line, i) => (
                    <p key={i}>{line}</p>
                ))}
            </div>
            <div className='grid grid-cols-2 gap-4'>
                <ImageWithCaption {...SakodaImg} alt='代表 迫田周大' className='aspect-square object-cover' />
                <ImageWithCaption
                    {...MakenekoImg}
                    alt='マスコットキャラクター マケ猫'
                    className='aspect-squaee object-cover'
                />
            </div>
        </>
    )
}
