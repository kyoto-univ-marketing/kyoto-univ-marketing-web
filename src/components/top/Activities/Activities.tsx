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
    { name: '勉強会', frequency: '週3回', body: '同じ内容を週3回。どの曜日が空いていても参加できます。' },
    { name: 'ゼミ', frequency: '3本', body: '投資・企業分析／自己探求とキャリア設計／起業。' },
    { name: '合宿', frequency: '年3回', body: '郊外に泊まり、チームでワークをします。' },
    { name: 'プロジェクト', frequency: '通年', body: '企業や地域と組んで、実際に手を動かします。' },
]

export const Activities: FC = () => (
    <section className='mx-auto max-w-(--breakpoint-lg) px-6 md:px-8'>
        <PageTitle asChild en='What We Do'>
            <h2>活動概要</h2>
        </PageTitle>
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
