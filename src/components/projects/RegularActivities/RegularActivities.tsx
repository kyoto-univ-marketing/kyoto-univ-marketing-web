import { FC } from 'react'

import { PageTitle } from '@/components/common/PageTitle/PageTitle'
import { Reveal } from '@/components/common/Reveal/Reveal'

/**
 * ふだんの活動。プロジェクトが「個々の実践」なのに対し、こちらは「毎週まわっている仕組み」。
 * 独立した /activities は作らず、活動内容のページにまとめている。
 */
const regulars = [
    {
        en: 'Study',
        title: '勉強会',
        body: '週に3回、同じ内容で開催しています。どの曜日が空いていても参加できます。先輩が進行役を務める、少人数の講義とワークです。',
    },
    {
        en: 'Seminar',
        title: 'ゼミ',
        body: '興味関心ごとに3つ。投資・企業分析、自己探求とキャリア設計、起業。ご飯を食べながら事業アイデアを壁打ちするものもあります。',
    },
    {
        en: 'Camp',
        title: '合宿',
        body: '年に3回。郊外に泊まってチームでワークをします。深夜まで語り合うことも多く、ここで関係が変わる人が多いです。',
    },
    {
        en: 'Mentoring',
        title: 'メンター制度',
        body: '上回生が下回生を受け持ちます。月に一度の食事と、日々の相談。単なる先輩後輩ではなく、進路や関心を一緒に言葉にしていく関係を目指しています。',
    },
]

export const RegularActivities: FC = () => (
    <section>
        <PageTitle asChild en='Weekly'>
            <h2>ふだんの活動</h2>
        </PageTitle>
        {/* PCでは2列に並べる。1列だと画面の右半分が空いたまま縦に長くなるため */}
        <div className='grid gap-10 sm:grid-cols-2 sm:gap-x-12'>
            {regulars.map(({ en, title, body }, i) => (
                <Reveal className='space-y-3 border-gray-200 border-t pt-8' delay={i * 80} key={title}>
                    <p className='font-en text-brand-accent text-xs uppercase tracking-[0.3em]'>{en}</p>
                    <h3 className='font-title text-lg leading-snug'>{title}</h3>
                    <p className='text-gray-700'>{body}</p>
                </Reveal>
            ))}
        </div>
        <p className='mt-10 text-center text-gray-600 text-sm'>
            参加はいずれも任意です。学業やほかの活動と両立している部員がほとんどです。
        </p>
    </section>
)
