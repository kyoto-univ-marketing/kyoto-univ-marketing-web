import dayjs from 'dayjs'
import { FC } from 'react'

import { client } from '@/api/client'
import { PageImage } from '@/components/common/PageImage/PageImage'

import shuugouShashin from '../../../../../public/page-images/about/36CB5A6E-5711-4641-8318-AF3C72572BBA.webp'
import { StatCounter } from '../../StatCounter/StatCounter'

export interface CircleOutlineProps {}

export const CircleOutline: FC<CircleOutlineProps> = async ({ ...props }) => {
    const aboutStatsRes = await client.GET('/api/about_stats/')
    const outlineTextRes = await client.GET('/api/text/{id}/', { params: { path: { id: 'circle_outline' } } })
    if (!outlineTextRes.data?.text) {
        console.error("Couldn't get circle outline")
    }
    const outlineText = outlineTextRes.data?.text ?? ''

    /* 最新の更新日時 */
    const latestDate = (aboutStatsRes.data ?? []).reduce((acc, cur) => {
        const date = dayjs(cur.updated_at)
        return date.isAfter(acc) ? date : acc
    }, dayjs(0))
    return (
        <div className='space-y-12'>
            <p className='px-6 text-gray-700'>{outlineText}</p>
            <div className='mx-auto w-fit space-y-2'>
                <div className='flex gap-4'>
                    {/* TODO: 順番はどこかでちゃんと実装したい */}
                    {(aboutStatsRes.data ?? [])
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
