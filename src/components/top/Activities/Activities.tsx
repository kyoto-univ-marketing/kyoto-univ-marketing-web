import { FC } from 'react'

import { NextLink } from '@/components/common/NextLink/NextLink'
import { PageImage } from '@/components/common/PageImage/PageImage'
import { PageTitle } from '@/components/common/PageTitle/PageTitle'
import { Reveal } from '@/components/common/Reveal/Reveal'
import { Button } from '@/components/ui/button'
import { pageLinkObject } from '@/constants/pageLinks'

import presentation from '../../../../public/page-images/top/presentation.webp'

/**
 * トップに置く活動の要約。
 *
 * 思想（セカンド原体験）より先に置く。はじめて来た人は
 * 「何をしている団体か」が分からないまま思想を読んでも受け取れないため。
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
        <div className='grid items-center gap-10 md:grid-cols-2 md:gap-14'>
            {/* 代表以外の部員が写り込まない写真だけをそのまま載せる。
                部員が写っているものは、ぼかして紺の帯の背景に使う */}
            <Reveal mask>
                <PageImage alt='成果発表会で登壇する代表' containerClassName='w-full' src={presentation} />
            </Reveal>
            <div>
                <dl className='divide-y divide-gray-200 border-gray-200 border-t border-b'>
                    {activities.map(({ name, frequency, body }, i) => (
                        <Reveal className='flex gap-5 py-5' delay={i * 60} key={name}>
                            <dt className='w-16 shrink-0 font-en text-brand-accent text-xs tracking-[0.2em]'>
                                {frequency}
                            </dt>
                            <dd className='flex-1 space-y-1'>
                                <p className='font-title text-base leading-snug'>{name}</p>
                                <p className='text-gray-700 text-sm'>{body}</p>
                            </dd>
                        </Reveal>
                    ))}
                </dl>
                <Button asChild className='mt-8 px-8 py-5' variant='outline'>
                    <NextLink href={pageLinkObject.PROJECT.href}>活動内容を見る</NextLink>
                </Button>
            </div>
        </div>
    </section>
)
