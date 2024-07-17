/** 参考： https://zenn.dev/iz_pixel/articles/77dce550a7694e */

import { NavigateOptions } from 'next/dist/shared/lib/app-router-context.shared-runtime'
import { useRouter } from 'next/navigation'
import { useCallback } from 'react'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const useViewTransition = <T extends (...args: any[]) => void>(callback: T) => {
    const startViewTransition = (...args: Parameters<T>) => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        if (!(document as any).startViewTransition) {
            callback(...args)
            return
        }

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        ;(document as any).startViewTransition(async () => {
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
