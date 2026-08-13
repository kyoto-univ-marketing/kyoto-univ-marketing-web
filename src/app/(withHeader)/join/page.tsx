import { Metadata } from 'next'

import { JoinPage } from '@/components/join/JoinPage/JoinPage'
import { pageLinkObject } from '@/constants/pageLinks'

export const metadata: Metadata = {
    title: pageLinkObject.JOIN.text,
    // 冒頭のコピー（新歓で使っているもの）を先頭に置き、検索結果でも同じ言葉が目に入るようにする
    description:
        '京大卒で終わりたくない人へ。京大マーケティング研究所の入会案内です。毎週複数回の勉強会、3本のゼミ、実践プロジェクト、年3回の合宿。京都大学から徒歩圏の京町家「マーケハウス」を拠点に活動しています。学年・学部は問いません。',
}

export default function Page() {
    return (
        <main>
            <JoinPage />
        </main>
    )
}
