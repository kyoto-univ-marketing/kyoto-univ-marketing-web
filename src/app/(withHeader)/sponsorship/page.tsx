import { Metadata } from 'next'

import { SponsorshipPage } from '@/components/sponsorship/SponsorshipPage/SponsorshipPage'
import { pageLinkObject } from '@/constants/pageLinks'

export const metadata: Metadata = {
    title: pageLinkObject.SPONSORSHIP.text,
    // 枠の限定や金額はここにも書かない。条件は個別のご提案の場で説明する
    description:
        '京大マーケティング研究所の協賛パートナーシップのご案内です。一年をかけて、志のある京大生と価値ある何かを一緒に創り出す共創型の協賛をご提案します。',
}

export default function Page() {
    return (
        <main>
            <SponsorshipPage />
        </main>
    )
}
