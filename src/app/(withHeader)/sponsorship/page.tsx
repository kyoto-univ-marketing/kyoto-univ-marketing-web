import { Metadata } from 'next'

import { SponsorshipPage } from '@/components/sponsorship/SponsorshipPage/SponsorshipPage'
import { pageLinkObject } from '@/constants/pageLinks'

export const metadata: Metadata = {
    title: pageLinkObject.SPONSORSHIP.text,
    // 枠の限定や金額はここにも書かない。条件は個別のご提案の場で説明する
    description:
        '京大マーケティング研究所の協賛パートナーシップのご案内です。広告枠のご提供ではなく、志のある京大生の育ちの過程に一年をかけて伴走していただく、共創型の協賛をご提案します。',
}

export default function Page() {
    return (
        <main>
            <SponsorshipPage />
        </main>
    )
}
