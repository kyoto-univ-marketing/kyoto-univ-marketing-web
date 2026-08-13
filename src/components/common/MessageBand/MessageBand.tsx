import { FC, ReactNode } from 'react'

export interface MessageBandProps {
    /** 見出しの上に小さく置く欧文ラベル */
    en?: string
    /** 大きく見せる一文 */
    children: ReactNode
    /** 一文の下に添える補足 */
    note?: ReactNode
}

/**
 * ページの途中に置く、全幅の紺の帯。
 *
 * 長いページは白が続いて単調になるため、章の切れ目に一度だけ置いて区切りをつくる。
 * 中身は必ず「そのページで一番言いたい一文」に絞ること。
 * 説明を詰め込むと帯が読み物になってしまい、区切りとして働かなくなる。
 */
export const MessageBand: FC<MessageBandProps> = ({ en, children, note }) => (
    <section className='bg-primary px-6 py-16 text-center text-primary-foreground md:py-20'>
        <div className='mx-auto max-w-2xl space-y-5'>
            {en && <p className='font-en text-brand-accent text-xs uppercase tracking-[0.35em]'>{en}</p>}
            {/* 中央揃えの一文は text-balance で行の長さを揃える。
                そうしないと最後の行に「を。」だけが残ることがある */}
            <p className='text-balance font-title text-title leading-relaxed'>{children}</p>
            {note && <p className='text-primary-foreground/85 text-sm leading-relaxed'>{note}</p>}
        </div>
    </section>
)
