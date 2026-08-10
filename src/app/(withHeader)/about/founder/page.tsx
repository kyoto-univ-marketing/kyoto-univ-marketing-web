import { Metadata } from 'next'

import { FounderPage } from '@/components/about/FounderPage/FounderPage'
import { PersonJsonLD } from '@/components/common/JsonLD/PersonJsonLD'
import { ProfilePageJsonLD } from '@/components/common/JsonLD/ProfilePageJsonLD'
import { FOUNDER_PAGE_DESCRIPTION } from '@/constants/description'

/**
 * 「迫田周大」検索の受け皿。
 * 以前は団体概要ページのタイトルに氏名を入れていたが、
 * 団体概要が個人のページに見えてしまうため、主題が本人であるこのページに移した。
 */
export const metadata: Metadata = {
    title: { absolute: '迫田周大（さこだしゅうた）｜京大マーケティング研究所 創設者・初代代表' },
    description: FOUNDER_PAGE_DESCRIPTION,
    keywords: ['迫田周大', 'さこだしゅうた', '京大マーケティング研究所', '創設者', '京都大学', 'マーケティング'],
}

export default function Page() {
    return (
        <>
            <main>
                <FounderPage />
            </main>
            <ProfilePageJsonLD />
            <PersonJsonLD />
        </>
    )
}
