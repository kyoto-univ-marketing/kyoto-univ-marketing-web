import dayjs from 'dayjs'

import { activityTagList } from '@/constants/activity'
import { Activity } from '@/lib/microcms'

const mock = (i: number) =>
    ({
        id: `test${i}`,
        createdAt: '2024-07-13T03:57:05.965Z',
        updatedAt: '2024-07-13T03:57:30.079Z',
        title: `テスト記事${i}`,
        description: 'これはテスト記事です。\nテスト記事の概要欄です。\n概要を書いています。',
        thumbnail: {
            url: '/logo.png',
            height: 868,
            width: 868,
        },
        content:
            '<h1 id="h9fb33de257">テスト記事</h1><h2 id="h1c1c9233e6">見出し</h2><p>こんな感じで記事を書くことが出来ます。</p><p></p><table><tbody><tr><th colspan="1" rowspan="1"><p>名前</p></th><th colspan="1" rowspan="1"><p>大学</p></th><th colspan="1" rowspan="1"><p>学部</p></th></tr><tr><td colspan="1" rowspan="1"><p>苗字 名前</p></td><td colspan="1" rowspan="1"><p>京都大学</p></td><td colspan="1" rowspan="1"><p>経済学部</p></td></tr><tr><td colspan="1" rowspan="1"><p>散布 留男</p></td><td colspan="1" rowspan="1"><p>京都大学</p></td><td colspan="1" rowspan="1"><p>工学部</p></td></tr></tbody></table><ul><li>リスト<ul><li>子要素</li></ul></li><li>リスト</li></ul>',
        tag: [activityTagList[Math.floor(Math.random() * activityTagList.length)]],
        publishedAt: dayjs().format('YYYY-MM-DDTHH:mm:ss.SSSZ'),
        revisedAt: dayjs().format('YYYY-MM-DDTHH:mm:ss.SSSZ'),
    }) as const satisfies Activity

export const mockActivities = [...new Array(100)].map((_, i) => mock(i))
