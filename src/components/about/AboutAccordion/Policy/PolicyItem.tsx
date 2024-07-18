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
    const textElem = text.split(/(\n)/).map((line, i) => {
        if (line === '\n') return <br key={`br-${i}`} />
        return <span key={line}>{line}</span>
    })
    return (
        <div {...props} className={cn('flex', reverse && 'flex-row-reverse')}>
            <p className='w-1/2 text-heading leading-[3rem]'>{textElem}</p>
            <div className='relative w-1/2' style={{ minHeight: stamp.height, minWidth: stamp.width }}>
                <Image
                    {...stamp}
                    className='pointer-events-none absolute -translate-x-1/2 -translate-y-1/2 select-none drop-shadow-md'
                    style={{ top: stampTop, left: stampLeft }}
                    alt={`stamp for ${text}`}
                />
            </div>
        </div>
    )
}
