import { Metadata } from 'next'

import { SponsorshipPage } from '@/components/sponsorship/SponsorshipPage/SponsorshipPage'
import { pageLinkObject } from '@/constants/pageLinks'

export const metadata: Metadata = {
    title: pageLinkObject.SPONSORSHIP.text,
    description:
        '京大マーケティング研究所の協賛パートナーシップのご案内です。協賛枠は1業界につき1社まで。選考の外で京大生と一年をかけて関係を築く、共創型の協賛をご提案します。',
}

export default function Page() {
    return (
        <main>
            <SponsorshipPage />
        </main>
    )
}
