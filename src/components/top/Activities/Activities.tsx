import Image from 'next/image'
import { FC } from 'react'

import StudyImg from '@/../public/page-images/top/study.webp'
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
 * 写真は勉強会の一枚だけ。代表以外の部員の顔はそのまま載せない方針のため、
 * 後ろ姿とスクリーンだけが入るように切り出してある（元写真には
 * 左右に他の部員の顔が写っている。切り出す位置を変えるときは要確認）。
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
        <p className='mx-auto mb-10 max-w-2xl text-justify text-gray-700'>
            京大マーケティング研究所は、企業様や大学関係者の皆様のご協力を得て、学生主体で運営・活動している学生団体です。
        </p>
        <Reveal className='mb-12 space-y-3'>
            <Image
                {...StudyImg}
                alt='マーケハウスでの勉強会。スクリーンに映した資料を見ながら進める'
                className='aspect-video w-full object-cover'
                sizes='(max-width: 1024px) 100vw, 1024px'
            />
            <p className='text-gray-500 text-xs'>週に複数回ひらいている勉強会。担当を決めて、部員が持ち回りで話す。</p>
        </Reveal>
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
            <Button asChild className='px-8 py-5'>
                <NextLink href={pageLinkObject.PROJECT.href}>活動内容を見る</NextLink>
            </Button>
        </div>
    </section>
)
