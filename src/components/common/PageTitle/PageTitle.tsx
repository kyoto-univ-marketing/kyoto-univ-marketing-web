import { Slot } from '@radix-ui/react-slot'
import { FC, ReactNode } from 'react'

import { cn } from '@/lib/utils'

export type PageTitleProps = {
    /**
     * 見出しの上に小さく置く欧文ラベル。
     * 欧文・金の罫と組み合わせることで、明朝の見出しに様式を与える。
     */
    en?: string
    /**
     * 全幅の紺の帯にする。各ページの先頭で使う。
     *
     * 本文まで紺地・白字にはしない。明朝は線が細く、白抜きの長文は読みづらいため、
     * 「紺＝枠（ヘッダー・フッター・ヒーロー・ページ見出し）／白＝読ませる中身」で切り分ける。
     */
    band?: boolean
} & (
    | {
          children: string
          asChild?: false
      }
    | {
          asChild: true
          children: ReactNode
      }
)

/** 各ページ・各セクションの見出し */
export const PageTitle: FC<PageTitleProps> = ({ asChild, children, en, band, ...props }) => {
    const Component = asChild ? Slot : 'h1'
    return (
        <div
            className={cn(
                'w-full px-6',
                band ? 'mb-12 bg-primary py-14 text-primary-foreground md:mb-16 md:py-20' : 'my-12 md:my-16',
            )}
            {...props}
        >
            <div className='mx-auto flex w-fit flex-col items-center gap-4'>
                {en && <span className='font-en text-brand-accent text-xs uppercase tracking-[0.35em]'>{en}</span>}
                <Component className='w-fit text-balance text-center font-title text-title'>{children}</Component>
                <span aria-hidden className='block h-px w-10 bg-brand-accent' />
            </div>
        </div>
    )
}
