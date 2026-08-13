import { FC } from 'react'

import { cn } from '@/lib/utils'

export interface DonutSlice {
    name: string
    percent: number
    color: string
}

export interface DonutChartProps {
    data: DonutSlice[]
    /** 円の中央に置く文字。総数など、グラフ全体が何の話かを示すものだけを入れる */
    centerLabel?: string
    centerNote?: string
    /** 読み上げ用の説明 */
    label: string
}

/**
 * ドーナツグラフ。
 *
 * 半径 15.915 の円は周長がちょうど 100 になるので、
 * 割合をそのまま stroke-dasharray に渡せる（面倒な角度計算が要らない）。
 * dashoffset の 25 は、12時の位置から始めるための補正。
 *
 * 図の中に文字を置くと小さい区分が読めなくなるため、名前と割合は必ず凡例側に出す。
 * 凡例の名前は whitespace-nowrap を外さないこと。外すと幅が足りないときに
 * 「経／済／学／部」と一文字ずつ折り返してしまう。
 */
export const DonutChart: FC<DonutChartProps> = ({ data, centerLabel, centerNote, label }) => {
    let acc = 0
    const slices = data.map((slice) => {
        const offset = 25 - acc
        acc += slice.percent
        return { ...slice, offset }
    })

    return (
        <div className='flex flex-col items-center gap-8 sm:flex-row sm:items-center sm:gap-12'>
            <div className='relative w-40 shrink-0 sm:w-48'>
                <svg aria-label={label} className='w-full' role='img' viewBox='0 0 42 42'>
                    {slices.map(({ name, percent, color, offset }) => (
                        <circle
                            cx='21'
                            cy='21'
                            fill='transparent'
                            key={name}
                            r='15.915'
                            stroke={color}
                            strokeDasharray={`${percent} ${100 - percent}`}
                            strokeDashoffset={offset}
                            strokeWidth='7'
                        />
                    ))}
                </svg>
                {centerLabel && (
                    <div className='absolute inset-0 flex flex-col items-center justify-center gap-1'>
                        <span className='font-title text-2xl leading-none'>{centerLabel}</span>
                        {centerNote && <span className='text-gray-600 text-xs'>{centerNote}</span>}
                    </div>
                )}
            </div>
            {/* 区分が多いときは2列にする。1列だと縦に長くなり、図と高さが合わない */}
            <ul className={cn('grid flex-1 gap-x-10 gap-y-2.5', data.length > 4 && 'sm:grid-cols-2')}>
                {data.map(({ name, percent, color }) => (
                    <li className='grid grid-cols-[auto_1fr_auto] items-center gap-3 text-sm' key={name}>
                        <span aria-hidden className='size-2.5 shrink-0' style={{ backgroundColor: color }} />
                        <span className='whitespace-nowrap text-gray-700'>{name}</span>
                        <span className='font-en text-gray-600 tabular-nums'>{percent}%</span>
                    </li>
                ))}
            </ul>
        </div>
    )
}
