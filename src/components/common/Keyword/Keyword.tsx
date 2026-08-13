import { FC, ReactNode } from 'react'

import { cn } from '@/lib/utils'

export interface KeywordProps {
    children: ReactNode
    className?: string
}

/**
 * 見出しのなかで、覚えて帰ってほしい言葉に金の傍点を打つ。
 *
 * 使うのは「セカンド原体験」「マーケハウス」のような、この団体固有の名前だけ。
 * うたい文句や説明の一節には打たない（点が模様になって効かなくなる）。
 *
 * 下線は使わない。PageTitle が見出しの下に金の罫を引いているので、二重になる。
 * 傍点は文字の上に出るため、使う見出しは行間に余裕を持たせること。
 */
export const Keyword: FC<KeywordProps> = ({ children, className }) => (
    <span className={cn('keyword', className)}>{children}</span>
)
