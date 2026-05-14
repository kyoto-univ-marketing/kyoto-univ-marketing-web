'use client'

import { ComponentProps, FC, useEffect, useState } from 'react'

import { cn } from '@/lib/utils'

export interface StatCounterProps extends ComponentProps<'div'> {
    value: number
    label: string
    duration?: number
}

/** 統計情報をカウントアップで表示するコンポーネント */
export const StatCounter: FC<StatCounterProps> = ({ value, label, duration = 1000, className, ...props }) => {
    const [count, setCount] = useState(0)
    useEffect(() => {
        setCount(0)
        const start = performance.now()
        const update = (now: number) => {
            const progress = Math.min((now - start) / duration, 1)
            setCount(Math.floor(progress * value))
            if (progress < 1) {
                requestAnimationFrame(update)
            } else {
                setCount(value)
            }
        }
        const id = requestAnimationFrame(update)
        return () => cancelAnimationFrame(id)
    }, [duration, value])
    return (
        <div
            className={cn(
                'flex size-24 flex-col items-center justify-center gap-2 bg-primary p-4 text-primary-foreground md:size-32',
                className,
            )}
        >
            <span className='font-bold text-3xl md:text-4xl'>{count}</span>
            <span className='text-xs md:text-sm'>{label}</span>
        </div>
    )
}
