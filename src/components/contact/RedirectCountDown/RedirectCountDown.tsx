'use client'

import { Loader } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { FC, useEffect, useState } from 'react'

import { pageLinkObject } from '@/constants/pageLinks'

export interface RedirectCountDownProps {
    duration: number
}

const redirectTo = pageLinkObject.TOP.href

export const RedirectCountDown: FC<RedirectCountDownProps> = ({ duration }) => {
    const [current, setCurrent] = useState(duration)
    const isCountStopped = current <= 0
    const router = useRouter()

    useEffect(() => {
        router.prefetch(redirectTo)
    }, [router])

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => {
                if (prev <= 0) {
                    clearInterval(timer)
                    return prev
                }
                return prev - 1
            })
        }, 1000)
        return () => clearInterval(timer)
    }, [duration])

    useEffect(() => {
        if (isCountStopped) {
            router.push(redirectTo)
        }
    }, [isCountStopped, router])

    return (
        <div className='flex items-center justify-center px-8'>
            {isCountStopped ? <Loader className='animate-spin' /> : <p>{current}秒後にトップページに遷移します</p>}
        </div>
    )
}
