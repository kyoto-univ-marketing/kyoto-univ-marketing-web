import { Person, ScholarlyArticle, WithContext } from 'schema-dts'

import { JsonLD } from './JsonLD'
import { FOUNDER_ID } from './PersonJsonLD'

/**
 * 発起人が筆頭著者の論文（京都大学経済学研究科のディスカッション・ペーパー）。
 *
 * 著者の先頭を発起人の識別子（FOUNDER_ID）で指し、
 * 「京大の論文の著者・迫田周大」と「このサイトの発起人」が同じ人だと読ませる。
 * 画面には出していない（2026-11-05 本人の判断。見える形で載せるかは別に決める）。
 *
 * 共著の先生方のページ（J-GLOBAL 等）は本人のページではないので、Person の sameAs には入れない。
 * 論文が増えたら papers に足す。題名・URL は京大の一覧（econ.kyoto-u.ac.jp/publications/dp/）に合わせる。
 */
const yanagi: Person = { '@type': 'Person', name: '柳淳也' }
const yamada: Person = { '@type': 'Person', name: '山田仁一郎' }
const kishi: Person = { '@type': 'Person', name: '貴志恒介' }

const publisher = {
    '@type': 'CollegeOrUniversity',
    name: '京都大学大学院経済学研究科',
    url: 'https://www.econ.kyoto-u.ac.jp/',
} as const

const papers = [
    {
        id: 'paper-j-24-001',
        json: {
            '@context': 'https://schema.org',
            '@type': 'ScholarlyArticle',
            name: '個人のウェルビーイングと組織レジリエンスを兼備する「事業のポータビリティ」：IT企業の事例分析',
            identifier: 'J-24-001',
            inLanguage: 'ja',
            datePublished: '2025-01',
            url: 'https://www.econ.kyoto-u.ac.jp/dp/papers/j-24-001.pdf',
            isPartOf: { '@type': 'Periodical', name: '京都大学経済学研究科ディスカッション・ペーパー' },
            author: [{ '@type': 'Person', '@id': FOUNDER_ID, name: '迫田周大' }, kishi, yanagi, yamada],
            publisher,
        },
    },
    {
        id: 'paper-e-25-001',
        json: {
            '@context': 'https://schema.org',
            '@type': 'ScholarlyArticle',
            name: 'An Auto-ethnography of a New Student-centered Approach to Entrepreneurship Education in Japan',
            // 経営管理大学院の業績一覧に載っている日本語の題名
            alternateName: '学生中心の新たなアプローチによるアントレプレナーシップ教育のオートエスノグラフィー',
            identifier: 'E-25-001',
            inLanguage: 'en',
            datePublished: '2025-03',
            url: 'https://www.econ.kyoto-u.ac.jp/dp/papers/e-25-001.pdf',
            isPartOf: { '@type': 'Periodical', name: 'Kyoto University, Graduate School of Economics Discussion Paper Series' },
            author: [{ '@type': 'Person', '@id': FOUNDER_ID, name: '迫田周大', alternateName: 'Shuta Sakoda' }, yanagi, yamada],
            publisher,
        },
    },
] as const satisfies { id: string; json: WithContext<ScholarlyArticle> }[]

export const ScholarlyArticleJsonLD = () => (
    <>
        {papers.map(({ id, json }) => (
            <JsonLD id={id} json={json} key={id} />
        ))}
    </>
)
