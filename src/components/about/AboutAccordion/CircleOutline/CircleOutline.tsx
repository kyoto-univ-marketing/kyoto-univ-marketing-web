import dayjs from 'dayjs'
import { FC } from 'react'

import { client } from '@/api/client'
import { PageImage } from '@/components/common/PageImage/PageImage'
import { getTextById } from '@/lib/api'

import shuugouShashin from '../../../../../public/page-images/about/36CB5A6E-5711-4641-8318-AF3C72572BBA.webp'
import { StatCounter } from '../../StatCounter/StatCounter'

export interface CircleOutlineProps {}

export const CircleOutline: FC<CircleOutlineProps> = async () => {
    'use cache'
    const [aboutStatsRes, outlineText] = await Promise.all([
        client.GET('/api/about_stats/'),
        getTextById('circle_outline'),
    ])

    const latestDate = (aboutStatsRes.data ?? []).reduce((acc, cur) => {
        const date = dayjs(cur.updated_at)
        return date.isAfter(acc) ? date : acc
    }, dayjs(0))

    return (
        <div className='space-y-12'>
            <p className='px-6 text-gray-700'>{outlineText}</p>
            <div className='mx-auto w-fit space-y-2'>
                <div className='flex gap-4'>
                    {(aboutStatsRes.data ?? [])
                        .sort((a, b) => b.number - a.number)
                        .map((stat) => (
                            <StatCounter key={stat.id} label={stat.title} value={stat.number} />
                        ))}
                </div>
                <p className='text-right text-gray-700 text-xs'>{latestDate.format('※YYYY年MM月現在')}</p>
            </div>
            <PageImage alt='集合写真' src={shuugouShashin} />
        </div>
    )
}
