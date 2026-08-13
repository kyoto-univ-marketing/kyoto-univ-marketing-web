'use client'

import { ComponentProps, FC, useEffect, useRef, useState } from 'react'

import { cn } from '@/lib/utils'

export interface RevealProps extends ComponentProps<'div'> {
    /** 表示を遅らせる時間（ミリ秒）。並んだ要素を少しずつずらして出すのに使う */
    delay?: number
    /**
     * 下からマスクが開くように出す。写真など面の大きいものに使う。
     * 文字に使うと読み始めが遅く感じるので、文章には使わないこと。
     */
    mask?: boolean
}

/**
 * 画面に入ったときに現れる演出。
 *
 * 初期状態は「見えている」にしてある。JS が動かない環境やクローラーで
 * 中身が消えたままになるのを防ぐため、隠すのは JS が動いたあとだけにする。
 */
export const Reveal: FC<RevealProps> = ({ delay = 0, mask = false, className, children, ...props }) => {
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
                mask
                    ? 'motion-safe:transition-[clip-path,opacity] motion-safe:duration-1000 motion-safe:ease-out'
                    : 'motion-safe:transition-[opacity,transform] motion-safe:duration-700 motion-safe:ease-out',
                state === 'hidden' && (mask ? '[clip-path:inset(0_0_100%_0)] opacity-0' : 'translate-y-6 opacity-0'),
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
