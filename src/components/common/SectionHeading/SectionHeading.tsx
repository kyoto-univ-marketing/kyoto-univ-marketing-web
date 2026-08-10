import { FC, ReactNode } from 'react'

export interface SectionHeadingProps {
    /** 見出しの上に小さく置く欧文ラベル */
    en: string
    /** 章番号。1から順に渡す。ページ内での現在地が分かるようにするための装飾 */
    index?: number
    children: ReactNode
}

/**
 * ページ内の章見出し。
 *
 * ページ全体の見出し（PageTitle）は中央揃えの紺帯、章見出しは左揃えの罫線、と役割を分ける。
 * 章ごとに見出しの様式が違うと、どこまでが一つの話なのかが読み手に伝わらないため、
 * 章の頭では必ずこれを使う。
 *
 * 章番号は欧文セリフで大きく薄く置く。読ませるためではなく、
 * 見出しの位置を目立たせて、流し読みでも章の切れ目が分かるようにするため。
 */
export const SectionHeading: FC<SectionHeadingProps> = ({ en, index, children }) => (
    <div className='mb-10 flex items-baseline gap-5 border-gray-200 border-b pb-5 md:gap-7'>
        {index !== undefined && (
            <span
                aria-hidden
                className='shrink-0 font-en text-[clamp(2rem,1.4rem+1.6vw,3rem)] text-brand-accent/35 leading-none'
            >
                {String(index).padStart(2, '0')}
            </span>
        )}
        <div className='space-y-3'>
            <p className='font-en text-brand-accent text-xs uppercase tracking-[0.35em]'>{en}</p>
            <h2 className='font-title text-heading leading-snug'>{children}</h2>
        </div>
    </div>
)
