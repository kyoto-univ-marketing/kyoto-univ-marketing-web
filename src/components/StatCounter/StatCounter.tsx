import { ComponentProps, FC, useEffect, useState } from 'react'

import { cn } from '@/lib/utils'

export interface StatCounterProps extends ComponentProps<'div'> {
    value: number
    label: string
    duration?: number
}

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

/** 統計情報をカウントアップで表示するコンポーネント */
export const StatCounter: FC<StatCounterProps> = ({ value, label, duration = 1000, className, ...props }) => {
    const [count, setCount] = useState(0)
    useEffect(() => {
        ;(async () => {
            setCount(0)
            for (let i = 1; i <= value; i++) {
                await sleep(duration / value)
                setCount(i)
            }
        })()
    }, [duration, value])
    return (
        <div className={cn('flex size-32 flex-col items-center justify-center gap-2 bg-slate-50 p-4', className)}>
            <span className='text-4xl font-bold'>{count}</span>
            <span className='text-sm'>{label}</span>
        </div>
    )
}
