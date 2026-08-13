import Image from 'next/image'
import { FC } from 'react'

import StudyImg from '@/../public/page-images/projects/study.webp'
import { PageTitle } from '@/components/common/PageTitle/PageTitle'
import { Reveal } from '@/components/common/Reveal/Reveal'

/**
 * ふだんの活動。プロジェクトが「個々の実践」なのに対し、こちらは「毎週まわっている仕組み」。
 * 独立した /activities は作らず、活動内容のページにまとめている。
 *
 * 頻度と説明はトップの「活動概要」と同じ事実で書くこと。
 * 二か所に別々に書くと、片方だけ古くなる。
 *
 * 勉強会の写真は、代表以外の部員の顔が入らない範囲に切り出してある
 * （元写真には左右に他の部員の顔が写っている。切り出す位置を変えるときは要確認）。
 */
const regulars = [
    {
        en: 'Study',
        title: '勉強会',
        frequency: '定期',
        body: '毎週複数回、同じ内容で開催しています。参加しやすい曜日に参加できます。大学から徒歩圏内のマーケハウスで、先輩が進行役を務める少人数の講義とワークです。',
    },
    {
        en: 'Seminar',
        title: 'ゼミ',
        frequency: '3本',
        body: '興味関心ごとに3本。自己探求とキャリア設計／起業・事業創出／投資・企業分析。ご飯を食べながら事業アイデアを壁打ちするものもあります。',
    },
    {
        en: 'Camp',
        title: '合宿',
        frequency: '年3回',
        body: '協賛企業様とゼロから企画することもあります。郊外に泊まり、複数日に渡ってチームでワークをします。深夜まで語り合うことも多く、ここで関係が変わる人が多いです。',
    },
    {
        en: 'Mentoring',
        title: 'メンター制度',
        frequency: '月1回',
        body: '上回生が下回生を受け持ちます。月に一度の食事と、日々の相談。単なる先輩後輩ではなく、進路や関心を一緒に言葉にしていく関係を目指しています。',
    },
]

export const RegularActivities: FC = () => (
    <section>
        <PageTitle asChild en='Regularly'>
            <h2>ふだんの活動</h2>
        </PageTitle>
        <Reveal className='mb-14 space-y-3'>
            <Image
                {...StudyImg}
                alt='マーケハウスでの勉強会。スクリーンに映した資料を見ながら進める'
                className='aspect-video w-full object-cover'
                sizes='(max-width: 1024px) 100vw, 1024px'
            />
            <p className='text-gray-500 text-xs'>週に複数回ひらいている勉強会。担当を決めて、部員が持ち回りで話す。</p>
        </Reveal>
        {/* PCでは2列に並べる。1列だと画面の右半分が空いたまま縦に長くなるため */}
        <div className='grid gap-10 sm:grid-cols-2 sm:gap-x-12'>
            {regulars.map(({ en, title, frequency, body }, i) => (
                <Reveal className='space-y-3 border-gray-200 border-t pt-8' delay={i * 80} key={title}>
                    <p className='font-en text-brand-accent text-xs uppercase tracking-[0.3em]'>{en}</p>
                    <h3 className='font-title text-lg leading-snug'>
                        {title}
                        <span className='ml-3 align-middle text-gray-600 text-sm'>{frequency}</span>
                    </h3>
                    <p className='text-gray-700'>{body}</p>
                </Reveal>
            ))}
        </div>
        <p className='mt-10 text-center text-gray-600 text-sm'>
            参加はいずれも任意です。学業やほかの活動と両立している部員がほとんどです。
        </p>
    </section>
)
