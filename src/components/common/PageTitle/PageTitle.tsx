import { Slot } from '@radix-ui/react-slot'
import { FC, ReactNode } from 'react'

export type PageTitleProps = {
    /**
     * 見出しの上に小さく置く欧文ラベル。
     * 欧文・金の罫と組み合わせることで、明朝の見出しに様式を与える。
     */
    en?: string
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
export const PageTitle: FC<PageTitleProps> = ({ asChild, children, en, ...props }) => {
    const Component = asChild ? Slot : 'h1'
    return (
        <div className='my-12 w-full px-6 md:my-16' {...props}>
            <div className='mx-auto flex w-fit flex-col items-center gap-4'>
                {en && <span className='font-en text-brand-accent text-xs uppercase tracking-[0.35em]'>{en}</span>}
                <Component className='w-fit text-center font-title text-title'>{children}</Component>
                <span aria-hidden className='block h-px w-10 bg-brand-accent' />
            </div>
        </div>
    )
}
