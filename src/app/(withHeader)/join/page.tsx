import { Metadata } from 'next'

import { JoinPage } from '@/components/join/JoinPage/JoinPage'
import { pageLinkObject } from '@/constants/pageLinks'

export const metadata: Metadata = {
    title: pageLinkObject.JOIN.text,
    description:
        '京大マーケティング研究所の入会案内です。週3回の勉強会、3つのゼミ、実践プロジェクト、年3回の合宿。京都大学から徒歩圏の京町家「マーケハウス」を拠点に活動しています。学年・学部は問いません。',
}

export default function Page() {
    return (
        <main>
            <JoinPage />
        </main>
    )
}
