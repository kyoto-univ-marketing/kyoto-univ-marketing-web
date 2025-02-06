import Image, { StaticImageData } from 'next/image'
import { FC } from 'react'

import { cn } from '@/lib/utils'

export interface PolicyItem {
    text: string
    stamp: StaticImageData
    stampTop: number | string
    stampLeft: number | string
}

export interface PolicyItemProps extends PolicyItem {
    reverse?: boolean
}

export const PolicyItem: FC<PolicyItemProps> = ({ text, stamp, stampTop, stampLeft, reverse = false, ...props }) => {
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
                    {...stamp}
                    alt={`stamp for ${text}`}
                    className='-translate-x-1/2 -translate-y-1/2 pointer-events-none absolute select-none drop-shadow-md'
                    height={stamp.height * 0.9}
                    style={{ top: stampTop, left: stampLeft }}
                    width={stamp.width * 0.9}
                />
            </div>
        </div>
    )
}
