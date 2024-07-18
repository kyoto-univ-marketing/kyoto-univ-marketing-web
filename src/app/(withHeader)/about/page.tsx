import { Metadata } from 'next'

import { AboutPage } from '@/components/about/AboutPage/AboutPage'
import { pageLinkObject } from '@/constants/pageLinks'

export const metadata: Metadata = {
    title: pageLinkObject.ABOUT.text,
}

export default function Page() {
    return (
        <main>
            <AboutPage />
        </main>
    )
}
