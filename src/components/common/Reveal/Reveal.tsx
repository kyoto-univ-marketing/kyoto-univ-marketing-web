'use client'

import { ComponentProps, FC, useEffect, useRef, useState } from 'react'

import { cn } from '@/lib/utils'

export interface RevealProps extends ComponentProps<'div'> {
    /** 表示を遅らせる時間（ミリ秒）。並んだ要素を少しずつずらして出すのに使う */
    delay?: number
}

/**
 * 画面に入ったときに、下からふわりと現れる演出。
 *
 * 初期状態は「見えている」にしてある。JS が動かない環境やクローラーで
 * 中身が消えたままになるのを防ぐため、隠すのは JS が動いたあとだけにする。
 */
export const Reveal: FC<RevealProps> = ({ delay = 0, className, children, ...props }) => {
    const ref = useRef<HTMLDivElement>(null)
    const [state, setState] = useState<'static' | 'hidden' | 'shown'>('static')

    useEffect(() => {
        const element = ref.current
        if (!element || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            return
        }
        setState('hidden')

        const observer = new IntersectionObserver(
            (entries) => {
                if (entries.some((entry) => entry.isIntersecting)) {
                    observer.disconnect()
                    setState('shown')
                }
            },
            { rootMargin: '0px 0px -10% 0px' },
        )
        observer.observe(element)
        return () => observer.disconnect()
    }, [])

    return (
        <div
            className={cn(
                'motion-safe:transition-[opacity,transform] motion-safe:duration-700 motion-safe:ease-out',
                state === 'hidden' && 'translate-y-6 opacity-0',
                className,
            )}
            ref={ref}
            style={{ transitionDelay: `${delay}ms` }}
            {...props}
        >
            {children}
        </div>
    )
}
