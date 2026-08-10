import { FC, ReactNode } from 'react'

export interface SectionHeadingProps {
    /** 見出しの上に小さく置く欧文ラベル */
    en: string
    children: ReactNode
}

/**
 * ページ内の章見出し。
 *
 * ページ全体の見出し（PageTitle）は中央揃えの紺帯、章見出しは左揃えの罫線、と役割を分ける。
 * 章ごとに見出しの様式が違うと、どこまでが一つの話なのかが読み手に伝わらないため、
 * 章の頭では必ずこれを使う。
 */
export const SectionHeading: FC<SectionHeadingProps> = ({ en, children }) => (
    <div className='mb-8 space-y-3 border-gray-200 border-b pb-4'>
        <p className='font-en text-brand-accent text-xs uppercase tracking-[0.35em]'>{en}</p>
        <h2 className='font-title text-heading leading-snug'>{children}</h2>
    </div>
)
