import { FC, ReactNode } from 'react'

/**
 * 見出しを「覚えて帰ってほしい言葉」と「それに添えている部分」に分けて組む。
 *
 * 色や下線は足さない。金にすると派手すぎ、下線は PageTitle の金の罫と二重になる。
 * 代わりに、添え物を小さく淡くし、言葉のほうをひとまわり大きく字間を空けて置く。
 * 大きさの差だけで主役がはっきりするので、色を増やさずに済む。
 */

/** 「活動拠点：」「とは」など、言葉に添えている部分 */
export const HeadingSub: FC<{ children: ReactNode }> = ({ children }) => (
    <span className='text-[0.6em] text-gray-500'>{children}</span>
)

/**
 * 「セカンド原体験」「マーケハウス」など、覚えて帰ってほしい言葉。
 *
 * 色は紺（本文は濃いグレー）。金ほど目立たないが、ヒーローや帯と同じ色なので
 * 「この団体の言葉だ」という手がかりになる。
 */
export const HeadingKeyword: FC<{ children: ReactNode }> = ({ children }) => (
    <span className='inline-block text-[1.1em] text-primary tracking-[0.04em] whitespace-nowrap'>{children}</span>
)
