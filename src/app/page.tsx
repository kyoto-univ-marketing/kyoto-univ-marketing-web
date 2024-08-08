import { Metadata } from 'next'

import { OrganizationJsonLD } from '@/components/common/JsonLD/OrganizationJsonLD'
import { TopPage } from '@/components/top/TopPage/TopPage'

export const metadata: Metadata = {
    description: [
        '2024年3月創立「京大一のマーケター集団」🔥',
        '「マーケティングの力で京都の伝統を継承する」',
        '京大生46名所属。マーケティングを学び、複数のプロジェクトで実践しています！',
    ].join('\n'),
}

export default function Home() {
    return (
        <>
            <main>
                <TopPage />
            </main>
            <OrganizationJsonLD />
        </>
    )
}
