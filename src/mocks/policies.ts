import { Policy } from '@/lib/microcms'

const base = {
    createdAt: '2024-07-13T03:57:05.965Z',
    updatedAt: '2024-07-13T03:57:05.965Z',
    publishedAt: '2024-07-13T03:57:05.965Z',
    revisedAt: '2024-07-13T03:57:05.965Z',
}

export const mockPolicies: Policy[] = [
    {
        ...base,
        id: 'policy1',
        title: '火',
        subtitle: '内発的駆動力の理解',
        text: 'どのような活動に対して自分のエネルギーが向くのかを言語化する能力。誰に言われなくても動き続けるエンジン。',
    },
    {
        ...base,
        id: 'policy2',
        title: '地図',
        subtitle: '世界の構造理解力',
        text: '視野を広げた上で、世界がどのように動いているのか、その論理と構造を見抜く能力。',
    },
    {
        ...base,
        id: 'policy3',
        title: 'てこ',
        subtitle: '非権力型の巻き込み・交渉力',
        text: '権力や資本に頼らない状態で人を巻き込む能力。決断力や、責任を取る力なども含まれる。',
    },
]
