import Image, { StaticImageData } from 'next/image'
import { FC } from 'react'

import { cn } from '@/lib/utils'

export interface PageImageProps {
    src: string | StaticImageData
    alt: string
    containerClassName?: string
}

/** ページ内に配置される画像のコンポーネント */
export const PageImage: FC<PageImageProps> = ({ src, alt, containerClassName, ...props }) => {
    return (
        <div className={cn('relative aspect-video w-full drop-shadow-md', containerClassName)}>
            <div className='absolute z-10 size-full'></div>
            <Image src={src} className='object-cover' fill alt={alt} />
        </div>
    )
}
