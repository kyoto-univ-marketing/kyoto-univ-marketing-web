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
        <div className='mx-auto w-full max-w-xl space-y-2'>
            {/* 紺の箱を並べるのをやめ、罫線で仕切って数字を明朝で大きく見せる */}
            <div className='grid grid-cols-3 divide-x divide-gray-200 border-gray-200 border-y'>
                {[...stats]
                    .sort((a, b) => b.number - a.number)
                    .map((stat) => (
                        <StatCounter key={stat.id} label={stat.title} value={stat.number} />
                    ))}
            </div>
            <p className='text-right text-gray-600 text-xs'>※{STATS_AS_OF}現在</p>
        </div>
    )
}

/** CircleStats の読み込み中に表示する、同じ大きさのプレースホルダー */
export const CircleStatsSkeleton = () => (
    <div className='mx-auto w-full max-w-xl space-y-2'>
        <div className='grid grid-cols-3 divide-x divide-gray-200 border-gray-200 border-y'>
            {[0, 1, 2].map((i) => (
                <div className='flex flex-col items-center gap-3 px-2 py-8 md:py-10' key={i}>
                    <div className='h-10 w-12 animate-pulse bg-muted md:h-14' />
                    <div className='h-px w-6 bg-brand-accent' />
                    <div className='h-4 w-12 animate-pulse bg-muted' />
                </div>
            ))}
        </div>
        <p className='text-right text-transparent text-xs'>-</p>
    </div>
)
