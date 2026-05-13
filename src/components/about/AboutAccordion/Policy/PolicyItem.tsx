import { MicroCMSImage } from 'microcms-ts-sdk'
import Image from 'next/image'
import { FC } from 'react'

import { cn } from '@/lib/utils'

export interface PolicyItem {
    text: string
    stamp_image: MicroCMSImage
    stamp_top: number | string
    stamp_left: number | string
}

export interface PolicyItemProps extends PolicyItem {
    reverse?: boolean
}

export const PolicyItem: FC<PolicyItemProps> = ({ text, stamp_image, stamp_top, stamp_left, reverse = false, ...props }) => {
    const width = stamp_image.width ?? 200
    const height = stamp_image.height ?? 200
    return (
        <div {...props} className={cn('grid grid-cols-2', reverse && '')}>
            <p
                className={cn(
                    'whitespace-pre-wrap text-heading leading-[3rem] [word-break:auto-phrase]',
                    reverse ? 'pl-4' : 'pr-4',
                )}
            >
                {text}
            </p>
            <div className={cn('relative', reverse && '-order-1')}>
                <Image
                    alt={`stamp for ${text}`}
                    className='-translate-x-1/2 -translate-y-1/2 pointer-events-none absolute select-none drop-shadow-md'
                    height={Math.round(height * 0.9)}
                    src={stamp_image.url}
                    style={{ top: stamp_top, left: stamp_left }}
                    width={Math.round(width * 0.9)}
                />
            </div>
        </div>
    )
}
