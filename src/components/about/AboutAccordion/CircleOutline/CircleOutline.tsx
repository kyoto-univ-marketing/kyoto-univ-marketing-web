import dayjs from 'dayjs'
import { FC } from 'react'

import { client } from '@/api/client'
import { PageImage } from '@/components/common/PageImage/PageImage'

import shuugouShashin from '../../../../../public/page-images/about/36CB5A6E-5711-4641-8318-AF3C72572BBA.webp'
import { StatCounter } from '../../StatCounter/StatCounter'

export interface CircleOutlineProps {}

export const CircleOutline: FC<CircleOutlineProps> = async ({ ...props }) => {
    const { data } = await client.GET('/api/about_stats/')

    /* 最新の更新日時 */
    const latestDate = (data ?? []).reduce((acc, cur) => {
        const date = dayjs(cur.updated_at)
        return date.isAfter(acc) ? date : acc
    }, dayjs(0))
    return (
        <div className='space-y-12'>
            <p className='px-6 text-gray-700'>
                「京大マーケティング研究所」は2024年3月に創立されました。初年度の立ち上げメンバーを1期生とし、活動を本格的に開始しました。
            </p>
            <div className='mx-auto w-fit space-y-2'>
                <div className='flex gap-4'>
                    {/* TODO: 順番はどこかでちゃんと実装したい */}
                    {(data ?? [])
                        .sort((a, b) => b.number - a.number)
                        .map((stat) => (
                            <StatCounter key={stat.id} value={stat.number} label={stat.title} />
                        ))}
                </div>
                <p className='text-right text-xs text-gray-700'>{latestDate.format('※YYYY年MM月現在')}</p>
            </div>
            <PageImage src={shuugouShashin} alt='集合写真' />
        </div>
    )
}
