import { FC } from 'react'

export interface OriginProps {}

export const Origin: FC<OriginProps> = ({ ...props }) => {
    return (
        <div className='space-y-8 p-4'>
            <p>
                テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
                テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト
            </p>
            <p>
                テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
                テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト
            </p>
        </div>
    )
}
