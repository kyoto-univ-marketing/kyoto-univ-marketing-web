import Image from 'next/image'
import { FC } from 'react'

import OriginImg from '@/../public/page-images/about/origin.webp'

export interface OriginPresenterProps {
    text: string
}

export const OriginPresenter: FC<OriginPresenterProps> = ({ text, ...props }) => {
    return (
        <>
            <Image
                {...OriginImg}
                alt='集合写真'
                className='mb-12 aspect-video object-cover'
                sizes='(max-width: 768px) 100vw, 640px'
            />
            <div className='mb-12 space-y-8 p-4'>
                {text.split('\n').map((line, i) => (
                    <p key={i}>{line}</p>
                ))}
            </div>

        </>
    )
}
