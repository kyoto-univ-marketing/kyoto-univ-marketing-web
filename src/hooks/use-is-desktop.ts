import { useEffect, useState } from 'react'

export const useIsDesktop = (): boolean => {
    const [isDesktop, setIsDesktop] = useState<boolean>(false)

    useEffect(() => {
        const mediaQuery = '(640px <= width)'
        const mql = matchMedia(mediaQuery)

        const handleMatch = (e: MediaQueryListEvent) => {
            setIsDesktop(e.matches)
        }

        setIsDesktop(mql.matches)
        mql.addEventListener('change', handleMatch)

        return () => {
            mql.removeEventListener('change', handleMatch)
        }
    }, [])

    return isDesktop
}
