'use client'

import { ComponentProps, FC, useEffect, useRef, useState } from 'react'

import { cn } from '@/lib/utils'

export interface StatCounterProps extends ComponentProps<'div'> {
    value: number
    label: string
    duration?: number
}

/**
 * 統計情報をカウントアップで表示するコンポーネント。
 *
 * 初期値は実際の数値にしてある。カウントアップはあくまで演出であり、
 * requestAnimationFrame が動かない状況（非アクティブなタブ、JS無効、クローラー）でも
 * 0 のまま表示され続けることがないようにするため。
 */
export const StatCounter: FC<StatCounterProps> = ({ value, label, duration = 700, className, ...props }) => {
    const [count, setCount] = useState(value)
    const ref = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const element = ref.current
        if (!element || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            return
        }

        let rafId = 0
        let startedAt: number | undefined
        const step = (now: number) => {
            // 0 への巻き戻しは最初のフレームの中で行う。
            // ここに来られなければ数値は実際の値のまま表示される。
            startedAt ??= now
            const progress = Math.min((now - startedAt) / duration, 1)
            setCount(progress < 1 ? Math.floor(progress * value) : value)
            if (progress < 1) {
                rafId = requestAnimationFrame(step)
            }
        }

        // スクロールで画面に入ったタイミングで再生する。
        // 読み込んだ時点で既に見えている場合は演出せず、実数を表示したままにする
        // （ページを開いた直後に 0 へ巻き戻って見えるのを防ぐ）
        let isFirstCheck = true
        const observer = new IntersectionObserver((entries) => {
            const isVisible = entries.some((entry) => entry.isIntersecting)
            if (isFirstCheck) {
                isFirstCheck = false
                if (isVisible) {
                    observer.disconnect()
                    return
                }
            }
            if (isVisible) {
                observer.disconnect()
                rafId = requestAnimationFrame(step)
            }
        })
        observer.observe(element)

        return () => {
            observer.disconnect()
            cancelAnimationFrame(rafId)
        }
    }, [duration, value])

    return (
        <div
            className={cn('flex flex-col items-center justify-center gap-3 px-2 py-8 md:py-10', className)}
            ref={ref}
            {...props}
        >
            <span className='font-title text-[clamp(2.25rem,1.5rem+2.5vw,3.5rem)] leading-none tabular-nums'>
                {count}
            </span>
            <span aria-hidden className='block h-px w-6 bg-brand-accent' />
            {/* 3列を狭い画面にも収めるため、文字間は広い画面でだけ広げる */}
            <span className='text-center text-[0.7rem] text-gray-600 tracking-normal sm:text-xs sm:tracking-[0.2em]'>
                {label}
            </span>
        </div>
    )
}
