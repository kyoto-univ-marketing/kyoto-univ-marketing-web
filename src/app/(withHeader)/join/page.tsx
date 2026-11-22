import { Metadata } from 'next'

import { JoinPage } from '@/components/join/JoinPage/JoinPage'
import { pageLinkObject } from '@/constants/pageLinks'

export const metadata: Metadata = {
    // 「京大 ビジネスサークル」で探す学生向けに、その言葉を題名に入れる。
    // 自分たちをサークルとは名乗らず、探している人の言葉として使う（2026-11-23 迫田さん決定）
    title: `${pageLinkObject.JOIN.text}｜京大でビジネスサークルを探している方へ`,
    // 冒頭のコピー（新歓で使っているもの）を先頭に置き、検索結果でも同じ言葉が目に入るようにする
    description:
        '「京大卒」で終わりたくない人へ。京大マーケティング研究所は、ビジネスやマーケティングを学び実践する京都大学の学生団体です。毎週複数回の勉強会、3本のゼミ、実践プロジェクト、年3回の合宿。京町家「マーケハウス」を拠点に活動しています。学年・学部は問いません。',
}

export default function Page() {
    return (
        <main>
            <JoinPage />
        </main>
    )
}
