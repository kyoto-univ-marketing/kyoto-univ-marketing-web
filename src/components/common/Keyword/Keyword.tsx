import { FC, ReactNode } from 'react'

export interface KeywordProps {
    children: ReactNode
}

/**
 * 本文のなかで覚えて帰ってほしい言葉を目立たせる。
 *
 * 「セカンド原体験」「マーケハウス」のような、この団体固有の言葉にだけ使う。
 * 明朝に変えて金の細い罫を引くだけにとどめる（塗りつぶすとサイトの調子から浮く）。
 *
 * ⚠️ 一つの節につき最初の一回だけ。同じ言葉に何度も引くと、線が模様になって効かなくなる。
 */
export const Keyword: FC<KeywordProps> = ({ children }) => (
    <span className='border-brand-accent border-b pb-0.5 font-title text-primary'>{children}</span>
)
