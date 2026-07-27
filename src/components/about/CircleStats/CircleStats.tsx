import { cacheLife } from 'next/cache'

import { client } from '@/api/client'
import { STATS_AS_OF } from '@/constants/about'

import { StatCounter } from '../StatCounter/StatCounter'

/** サークルの実績数値。アコーディオンの外に置き、ページを開いた時点で目に入るようにする */
export const CircleStats = async () => {
    'use cache'
    // 管理画面で数値を直したら数分で反映されるようにする
    cacheLife('minutes')
    const { data } = await client.GET('/api/about_stats/')
    const stats = data ?? []
    if (stats.length === 0) {
        return null
    }

    return (
        <div className='mx-auto w-fit space-y-2'>
            <div className='flex gap-4'>
                {[...stats]
                    .sort((a, b) => b.number - a.number)
                    .map((stat) => (
                        <StatCounter key={stat.id} label={stat.title} value={stat.number} />
                    ))}
            </div>
            <p className='text-right text-gray-700 text-xs'>※{STATS_AS_OF}現在</p>
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
