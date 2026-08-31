import { Metadata } from 'next'

import { AboutPage } from '@/components/about/AboutPage/AboutPage'
import { ABOUT_PAGE_DESCRIPTION } from '@/constants/description'

/**
 * 以前はこのページのタイトルに発起人の氏名を入れて「迫田周大」検索を受けていたが、
 * 団体概要が個人のページに見えてしまうため、/about/founder に移した。
 * このページからは氏名つきのリンク（AboutNav）でつないでいる。
 */
export const metadata: Metadata = {
    title: '団体概要',
    description: ABOUT_PAGE_DESCRIPTION,
    keywords: ['京大マーケティング研究所', '団体概要', '法人概要', '京都大学', 'マーケティング'],
}

export default function Page() {
    return (
        <main>
            <AboutPage />
        </main>
    )
}
