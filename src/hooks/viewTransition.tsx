/** 参考： https://zenn.dev/iz_pixel/articles/77dce550a7694e */

import { NavigateOptions } from 'next/dist/shared/lib/app-router-context.shared-runtime'
import { useRouter } from 'next/navigation'
import { useCallback } from 'react'

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export const useViewTransition = <S extends readonly any[], T extends (...args: S) => void>(callback: T) => {
    const startViewTransition = (...args: S) => {
        if (!document.startViewTransition) {
            callback(...args)
            return
        }
        document.startViewTransition(async () => {
            await Promise.resolve(callback(...args))
        })
    }
    return { startViewTransition }
}

export const useTransitionRouterPush = () => {
    const router = useRouter()
    const routerPush = useCallback((href: string, options?: NavigateOptions) => router.push(href, options), [router])
    const { startViewTransition: routerPushWithTransition } = useViewTransition(routerPush)

    return { routerPushWithTransition }
}
