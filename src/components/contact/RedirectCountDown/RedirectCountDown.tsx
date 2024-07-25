'use client'

import { Loader } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { FC, useEffect, useMemo, useState } from 'react'

import { pageLinkObject } from '@/constants/pageLinks'

export interface RedirectCountDownProps {
    /* カウントの長さ（秒） */
    duration: number
}

/* リダイレクト先のリンク */
const redirectTo = pageLinkObject.TOP.href

export const RedirectCountDown: FC<RedirectCountDownProps> = ({ duration, ...props }) => {
    const [current, setCurrent] = useState(duration)
    const isCountStopped = useMemo(() => current <= 0, [current])
    const router = useRouter()

    useEffect(() => {
        // 遷移先のページをプリフェッチ
        router.prefetch(redirectTo)

        // タイマーを設定
        const timer = setInterval(() => {
            setCurrent((prev) => {
                if (prev <= 0) {
                    // 0以下になったらカウントを停止
                    clearInterval(timer)
                    return prev
                }
                return prev - 1
            })
        }, 1000)
        return () => clearInterval(timer)
    }, [duration, router])

    if (isCountStopped) {
        // カウントが終了したらトップページに遷移
        router.push(redirectTo)
    }

    return (
        <div className='flex items-center justify-center px-8'>
            {isCountStopped ? <Loader className='animate-spin' /> : <p>{current}秒後にトップページに遷移します</p>}
        </div>
    )
}
