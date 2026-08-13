import { FC } from 'react'

import { NextLink } from '@/components/common/NextLink/NextLink'
import { PageTitle } from '@/components/common/PageTitle/PageTitle'
import { Reveal } from '@/components/common/Reveal/Reveal'
import { Button } from '@/components/ui/button'
import { pageLinkObject } from '@/constants/pageLinks'

/**
 * トップに置く活動の要約。
 *
 * セカンド原体験の説明の直後に置く。「何を目指しているか」を読んだ人が
 * 次に知りたいのは「では実際に何をしているのか」であるため。
 *
 * 写真は置いていない。代表以外の部員が写ったものはそのまま載せない方針で、
 * 条件を満たす手持ちの写真がないため。無理に一枚だけ足すより、
 * 4項目を横に並べて幅を使うほうが収まりがよい。
 *
 * 回数は変わりにくいものだけを載せる。プロジェクト数のように増減するものは
 * 数を書かない（古い数字が残るほうが害が大きい）。
 */
const activities = [
    {
        name: '勉強会',
        frequency: '定期',
        body: '毎週複数回実施。参加しやすい曜日に参加できます。大学から徒歩圏内のマーケハウスで実施。',
    },
    {
        name: 'ゼミ',
        frequency: '3本',
        body: '自己探求とキャリア設計／起業・事業創出／投資・企業分析',
    },
    {
        name: '合宿',
        frequency: '年3回',
        body: '協賛企業様とゼロから企画。郊外に泊まり、複数日に渡ってチームでワークをします。',
    },
    {
        name: 'プロジェクト',
        frequency: '通年',
        body: '学生だけで行うオリジナルのプロジェクトや企業様との共創プロジェクト。手を挙げたら参加できる環境です。',
    },
]

export const Activities: FC = () => (
    <section className='mx-auto max-w-(--breakpoint-lg) px-6 md:px-8'>
        <PageTitle asChild en='What We Do'>
            <h2>活動概要</h2>
        </PageTitle>
        {/* 「サークル」とは名乗らない。法人であり、企業や大学と組んで動いている実態に合わないため */}
        <p className='mx-auto mb-12 max-w-2xl text-center text-gray-700'>
            京大マーケティング研究所は、企業様や大学関係者との協力を得て、学生主体で運営・活動している学生団体です。
        </p>
        <dl className='grid gap-10 sm:grid-cols-2 sm:gap-x-12 lg:grid-cols-4 lg:gap-x-8'>
            {activities.map(({ name, frequency, body }, i) => (
                <Reveal className='space-y-3 border-gray-200 border-t pt-8' delay={i * 60} key={name}>
                    <dt className='font-en text-brand-accent text-xs tracking-[0.25em]'>{frequency}</dt>
                    <dd className='space-y-3'>
                        <p className='font-title text-xl leading-snug'>{name}</p>
                        <p className='text-gray-700 text-sm leading-relaxed'>{body}</p>
                    </dd>
                </Reveal>
            ))}
        </dl>
        <div className='mt-12 flex justify-center'>
            <Button asChild className='px-8 py-5' variant='outline'>
                <NextLink href={pageLinkObject.PROJECT.href}>活動内容を見る</NextLink>
            </Button>
        </div>
    </section>
)
