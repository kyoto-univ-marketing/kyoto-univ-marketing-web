import { FC } from 'react'

import { cn } from '@/lib/utils'

export interface ScrollCueProps {
    className?: string
    /** 暗い背景の上に置く場合に白抜きにする */
    reverse?: boolean
}

/** ヒーローの下端に置く、下へ続くことを示す縦線 */
export const ScrollCue: FC<ScrollCueProps> = ({ className, reverse }) => (
    <div
        aria-hidden
        className={cn(
            '-translate-x-1/2 absolute bottom-10 left-1/2 flex flex-col items-center gap-3',
            reverse ? 'text-white/80' : 'text-foreground/60',
            className,
        )}
    >
        <span className='font-en text-[0.625rem] uppercase tracking-[0.3em]'>Scroll</span>
        <span className='relative block h-12 w-px bg-current/40'>
            <span className='absolute inset-x-0 top-0 block h-4 animate-scroll-cue bg-current' />
        </span>
    </div>
)
