import { FC, ReactNode } from 'react'

import { cn } from '@/lib/utils'

export interface KeywordProps {
    children: ReactNode
    className?: string
}

/**
 * 見出しのなかで、覚えて帰ってほしい言葉を金の文字色にする。
 *
 * 使うのは「セカンド原体験」「マーケハウス」のような、この団体固有の名前だけ。
 * うたい文句や説明の一節には使わない（色が散ると効かなくなる）。
 *
 * 下線は使わない。PageTitle が見出しの下に金の罫を引いているので二重になる。
 * 傍点も試したが、明朝の見出しでは点が浮いて見えたため色に落ち着いた。
 */
export const Keyword: FC<KeywordProps> = ({ children, className }) => (
    <span className={cn('text-brand-accent', className)}>{children}</span>
)
