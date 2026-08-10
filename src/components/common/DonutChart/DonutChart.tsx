import { FC } from 'react'

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
 */
export const DonutChart: FC<DonutChartProps> = ({ data, centerLabel, centerNote, label }) => {
    let acc = 0
    const slices = data.map((slice) => {
        const offset = 25 - acc
        acc += slice.percent
        return { ...slice, offset }
    })

    return (
        <div className='flex flex-col items-center gap-8 sm:flex-row sm:gap-10'>
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
            <ul className='grid flex-1 grid-cols-2 gap-x-6 gap-y-2 sm:grid-cols-1 sm:gap-y-1.5'>
                {data.map(({ name, percent, color }) => (
                    <li className='flex items-center gap-3 text-sm' key={name}>
                        <span aria-hidden className='size-2.5 shrink-0' style={{ backgroundColor: color }} />
                        <span className='flex-1 text-gray-700'>{name}</span>
                        <span className='font-en text-gray-600 tabular-nums'>{percent}%</span>
                    </li>
                ))}
            </ul>
        </div>
    )
}
