import { FC, ReactNode } from 'react'

import { cn } from '@/lib/utils'

/**
 * 見出しを「覚えて帰ってほしい言葉」と「それに添えている部分」に分けて組む。
 *
 * 色や下線は足さない。金にすると派手すぎ、下線は PageTitle の金の罫と二重になる。
 * 代わりに、添え物を小さく淡くし、言葉のほうをひとまわり大きく字間を空けて置く。
 * 大きさの差だけで主役がはっきりするので、色を増やさずに済む。
 *
 * ⚠️ 紺地に置くときは onDark を渡すこと。既定の色（紺・グレー）は紺地では沈む。
 */

interface Props {
    children: ReactNode
    /** 紺地の上で使うとき */
    onDark?: boolean
}

/** 「活動拠点：」「とは」など、言葉に添えている部分 */
export const HeadingSub: FC<Props> = ({ children, onDark }) => (
    <span className={cn('text-[0.6em]', onDark ? 'text-primary-foreground/60' : 'text-gray-500')}>{children}</span>
)

/** 「セカンド原体験」「マーケハウス」など、覚えて帰ってほしい言葉 */
export const HeadingKeyword: FC<Props> = ({ children, onDark }) => (
    <span
        className={cn(
            'inline-block text-[1.1em] tracking-[0.04em] whitespace-nowrap',
            onDark ? 'text-primary-foreground' : 'text-primary',
        )}
    >
        {children}
    </span>
)
