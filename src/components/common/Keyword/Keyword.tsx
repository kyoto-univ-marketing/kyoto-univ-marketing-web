import { FC, ReactNode } from 'react'

import { cn } from '@/lib/utils'

export interface KeywordProps {
    children: ReactNode
    className?: string
}

/**
 * 見出しのなかで、覚えて帰ってほしい言葉に金の罫を引く。
 *
 * 使うのは「セカンド原体験」「マーケハウス」のような、この団体固有の名前だけ。
 * うたい文句や説明の一節には引かない（線が模様になって効かなくなる）。
 *
 * 文字の大きさや書体は見出し側に任せ、ここでは罫だけを足す。
 */
export const Keyword: FC<KeywordProps> = ({ children, className }) => (
    <span className={cn('border-brand-accent border-b-2 pb-1', className)}>{children}</span>
)
