import { FC } from 'react'

export interface PageTitleProps {
    children: string
}

/** 各ページのタイトル */
export const PageTitle: FC<PageTitleProps> = ({ ...props }) => {
    return <h1 className='my-12 px-12 text-title' {...props} />
}
