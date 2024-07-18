import { FC } from 'react'

export interface PageTitleProps {
    children: string
}

/** 各ページのタイトル */
export const PageTitle: FC<PageTitleProps> = ({ children, ...props }) => {
    return (
        <div className='my-12 w-full px-12 text-title' {...props}>
            <h1 className='mx-auto w-fit'>{children}</h1>
        </div>
    )
}
