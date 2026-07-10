import { Metadata } from 'next'

import { AboutPage } from '@/components/about/AboutPage/AboutPage'
import { PersonJsonLD } from '@/components/common/JsonLD/PersonJsonLD'
import { ProfilePageJsonLD } from '@/components/common/JsonLD/ProfilePageJsonLD'
import { ABOUT_PAGE_DESCRIPTION } from '@/constants/description'
import { pageLinkObject } from '@/constants/pageLinks'

export const metadata: Metadata = {
    // 「迫田周大」検索での順位向上のため、名前をtitle先頭に配置（absoluteでテンプレートを上書き）
    title: { absolute: '迫田周大（さこだしゅうだい）｜京大マーケティング研究所 創設者' },
    description: ABOUT_PAGE_DESCRIPTION,
    keywords: ['迫田周大', '京大マーケティング研究所', '創設者', '京都大学', 'マーケティング'],
}

export default function Page() {
    return (
        <>
            <main>
                <AboutPage />
            </main>
            <ProfilePageJsonLD />
            <PersonJsonLD />
        </>
    )
}
