import { FC } from 'react'

import { StatCounter } from '../../StatCounter/StatCounter'

export interface CircleOutlineProps {}

export const CircleOutline: FC<CircleOutlineProps> = ({ ...props }) => {
    return (
        <div className='space-y-6'>
            <p className='px-6 text-gray-700'>
                「京大マーケティング研究所」は2024年3月に創立されました。初年度の立ち上げメンバーを1期生とし、活動を本格的に開始しました。
            </p>
            <div className='mx-auto w-fit space-y-2'>
                <div className='flex gap-4'>
                    {/* TODO: データは外部に保存する */}
                    <StatCounter value={43} label='部員数' />
                    <StatCounter value={11} label='学部学科' />
                    <StatCounter value={8} label='プロジェクト' />
                </div>
                <p className='text-right text-xs text-gray-700'>※2024年6月現在</p>
            </div>
        </div>
    )
}
