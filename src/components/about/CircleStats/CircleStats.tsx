import dayjs from 'dayjs'

import { client } from '@/api/client'

import { StatCounter } from '../StatCounter/StatCounter'

/** サークルの実績数値。アコーディオンの外に置き、ページを開いた時点で目に入るようにする */
export const CircleStats = async () => {
    'use cache'
    const { data } = await client.GET('/api/about_stats/')
    const stats = data ?? []
    if (stats.length === 0) {
        return null
    }

    /** 最新の更新日時 */
    const latestDate = stats.reduce((acc, cur) => {
        const date = dayjs(cur.updated_at)
        return date.isAfter(acc) ? date : acc
    }, dayjs(0))

    return (
        <div className='mx-auto w-fit space-y-2'>
            <div className='flex gap-4'>
                {[...stats]
                    .sort((a, b) => b.number - a.number)
                    .map((stat) => (
                        <StatCounter key={stat.id} label={stat.title} value={stat.number} />
                    ))}
            </div>
            <p className='text-right text-gray-700 text-xs'>{latestDate.format('※YYYY年MM月現在')}</p>
        </div>
    )
}

/** CircleStats の読み込み中に表示する、同じ大きさのプレースホルダー */
export const CircleStatsSkeleton = () => (
    <div className='mx-auto w-fit space-y-2'>
        <div className='flex gap-4'>
            {[0, 1, 2].map((i) => (
                <div className='size-24 animate-pulse bg-muted md:size-32' key={i} />
            ))}
        </div>
        <p className='text-right text-transparent text-xs'>-</p>
    </div>
)
