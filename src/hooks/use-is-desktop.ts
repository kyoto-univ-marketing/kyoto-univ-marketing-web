'use client'

import { useEffect, useState } from 'react'

export const useIsDesktop = (): boolean | undefined => {
    const mediaQuery = '(min-width: 768px)'
    const [isDesktop, setIsDesktop] = useState<boolean | undefined>(undefined)

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const mql = window.matchMedia(mediaQuery)
            setIsDesktop(mql.matches)

            const handleMatch = (e: MediaQueryListEvent) => {
                setIsDesktop(e.matches)
            }

            mql.addEventListener('change', handleMatch)
            return () => {
                mql.removeEventListener('change', handleMatch)
            }
        }
    }, [])

    return isDesktop
}
