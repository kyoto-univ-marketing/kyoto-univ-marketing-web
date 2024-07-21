import { Slot } from '@radix-ui/react-slot'
import { FC, ReactNode } from 'react'

export type PageTitleProps =
    | {
          children: string
          asChild?: false
      }
    | {
          asChild: true
          children: ReactNode
      }

/** 各ページのタイトル */
export const PageTitle: FC<PageTitleProps> = ({ asChild, children, ...props }) => {
    const Component = asChild ? Slot : 'h1'
    return (
        <div className='my-12 w-full px-12 text-title' {...props}>
            <Component className='mx-auto w-fit'>{children}</Component>
        </div>
    )
}
