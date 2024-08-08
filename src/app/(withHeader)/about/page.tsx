import { Metadata } from 'next'

import { AboutPage } from '@/components/about/AboutPage/AboutPage'
import { pageLinkObject } from '@/constants/pageLinks'

export const metadata: Metadata = {
    title: pageLinkObject.ABOUT.text,
    description: '京大マーケティング研究所の「サークル概要」、「活動方針」、「創立の経緯」についてご紹介します。',
}

export default function Page() {
    return (
        <main>
            <AboutPage />
        </main>
    )
}
