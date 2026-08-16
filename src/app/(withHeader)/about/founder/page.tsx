import { Metadata } from 'next'

import { FounderPage } from '@/components/about/FounderPage/FounderPage'
import { PersonJsonLD } from '@/components/common/JsonLD/PersonJsonLD'
import { ProfilePageJsonLD } from '@/components/common/JsonLD/ProfilePageJsonLD'
import { aboutFounderPage } from '@/constants/aboutPages'
import { FOUNDER_PAGE_DESCRIPTION } from '@/constants/description'

/**
 * 「迫田周大」検索の受け皿。
 * 以前は団体概要ページのタイトルに氏名を入れていたが、
 * 団体概要が個人のページに見えてしまうため、主題が本人であるこのページに移した。
 */
export const metadata: Metadata = {
    // 題に氏名は入れていないので、title には必ず氏名とふりがなを入れる。
    // 「創設者」は題に含まれているため肩書きは重ねない
    title: { absolute: '創設者の言葉｜迫田周大（さこだしゅうた）｜京大マーケティング研究所' },
    description: FOUNDER_PAGE_DESCRIPTION,
    keywords: ['迫田周大', 'さこだしゅうた', '京大マーケティング研究所', '創設者', '京都大学', 'マーケティング'],
    // 氏名の検索でどのURLを出すかを一本に定める。
    // 団体概要から中身を移した経緯があるので、ここを正として明示しておく
    alternates: { canonical: aboutFounderPage.href },
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
