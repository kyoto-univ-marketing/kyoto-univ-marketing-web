import { FC } from 'react'

import { cn } from '@/lib/utils'

export interface ScrollCueProps {
    className?: string
    /** 暗い背景の上に置く場合に白抜きにする */
    reverse?: boolean
}

/**
 * ヒーローの下端に置く、下へ続くことを示す縦線。
 *
 * 位置は置き場所ごとに className で指定する。
 * 以前は左右中央に置いていたが、画面の高さが足りないとき見出しの真上に重なった。
 * 本文の左端に沿わせておけば、縦に詰まっても文字とぶつからない。
 */
export const ScrollCue: FC<ScrollCueProps> = ({ className, reverse }) => (
    <div
        aria-hidden
        className={cn(
            'absolute bottom-10 flex flex-col items-start gap-3',
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
