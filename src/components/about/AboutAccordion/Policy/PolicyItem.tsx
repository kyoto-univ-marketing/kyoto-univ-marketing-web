import { FC } from 'react'

import { cn } from '@/lib/utils'

export interface PolicyItem {
    title?: string
    subtitle?: string
    text: string
}

export interface PolicyItemProps extends PolicyItem {
    reverse?: boolean
}

/**
 * 活動方針の一項目。
 *
 * 以前はスタンプ画像を重ねていたが、一語（火・地図・てこ）を明朝で大きく組む方式に変えた。
 * 画像に頼らないので、文言を変えても崩れない。
 */
export const PolicyItem: FC<PolicyItemProps> = ({ title, subtitle, text, reverse: _reverse, ...props }) => {
    return (
        <div className='flex flex-col gap-5 border-gray-200 border-t pt-8 sm:flex-row sm:gap-10' {...props}>
            {title && (
                <div className='flex shrink-0 items-baseline gap-4 sm:w-40 sm:flex-col sm:items-start sm:gap-3'>
                    <span className='font-title text-[clamp(2.5rem,2rem+2vw,4rem)] leading-none'>{title}</span>
                    <span aria-hidden className='hidden h-px w-10 bg-brand-accent sm:block' />
                </div>
            )}
            <div className={cn('flex flex-1 flex-col gap-3', !title && 'sm:pl-0')}>
                {subtitle && <h3 className='font-title text-heading leading-snug'>{subtitle}</h3>}
                <p className='whitespace-pre-wrap text-gray-700 [word-break:auto-phrase]'>{text}</p>
            </div>
        </div>
    )
}
