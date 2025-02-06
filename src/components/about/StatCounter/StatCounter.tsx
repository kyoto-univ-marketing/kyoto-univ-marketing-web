'use client'

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
        <div
            className={cn(
                'flex size-24 flex-col items-center justify-center gap-2 bg-primary p-4 text-primary-foreground md:size-32',
                className,
            )}
        >
            <span className='text-3xl font-bold md:text-4xl'>{count}</span>
            <span className='text-xs md:text-sm'>{label}</span>
        </div>
    )
}
