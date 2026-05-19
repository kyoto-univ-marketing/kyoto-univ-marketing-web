'use client'

import { useEffect, useState } from 'react'

const DESKTOP_MEDIA_QUERY = '(min-width: 768px)'

export const useIsDesktop = (): boolean | undefined => {
    const [isDesktop, setIsDesktop] = useState<boolean | undefined>(undefined)

    useEffect(() => {
        const mql = window.matchMedia(DESKTOP_MEDIA_QUERY)
        setIsDesktop(mql.matches)
        const handleMatch = (e: MediaQueryListEvent) => setIsDesktop(e.matches)
        mql.addEventListener('change', handleMatch)
        return () => mql.removeEventListener('change', handleMatch)
    }, [])

    return isDesktop
}
