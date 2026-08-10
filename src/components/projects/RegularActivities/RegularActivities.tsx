import Image from 'next/image'
import { FC } from 'react'

import KakejikuImg from '@/../public/page-images/kakejiku.webp'
import MakeHouseImg from '@/../public/page-images/makehouse.webp'

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
    <>
        <section className='mb-20'>
            <PageTitle asChild en='Weekly'>
                <h2>ふだんの活動</h2>
            </PageTitle>
            <div className='space-y-10 px-2'>
                {regulars.map(({ en, title, body }, i) => (
                    <Reveal
                        className='flex flex-col gap-4 border-gray-200 border-t pt-8 sm:flex-row sm:gap-10'
                        delay={i * 80}
                        key={title}
                    >
                        <p className='shrink-0 font-en text-brand-accent text-xs uppercase tracking-[0.3em] sm:w-32 sm:pt-1'>
                            {en}
                        </p>
                        <div className='flex-1 space-y-3'>
                            <h3 className='font-title text-lg leading-snug'>{title}</h3>
                            <p className='text-gray-700'>{body}</p>
                        </div>
                    </Reveal>
                ))}
            </div>
            <p className='mt-8 px-2 text-center text-gray-600 text-sm'>
                参加はいずれも任意です。学業やほかの活動と両立している部員がほとんどです。
            </p>
        </section>

        {/* 拠点は他大の学生団体にない差別化要素なので、独立した節として置く */}
        <Reveal className='mb-20 border border-gray-200 bg-white px-6 py-10 sm:px-10'>
            <p className='font-en text-brand-accent text-xs uppercase tracking-[0.35em]'>Our Base</p>
            <h2 className='mt-4 font-title text-heading leading-snug'>マーケハウス</h2>
            <div className='mt-6 flex gap-3'>
                <Image
                    {...MakeHouseImg}
                    alt='活動拠点マーケハウスの外観。京都大学から徒歩圏の京町家'
                    className='w-[62%] object-cover'
                    sizes='(max-width: 768px) 62vw, 400px'
                />
                <div className='relative flex-1 overflow-hidden'>
                    <Image
                        {...KakejikuImg}
                        alt='マーケハウスに掛かる掛け軸'
                        className='absolute inset-0 size-full object-cover'
                        sizes='(max-width: 768px) 38vw, 240px'
                    />
                </div>
            </div>
            <div className='mt-6 space-y-4 text-gray-700'>
                <p>
                    京都大学から徒歩圏にある、2階建ての京町家を借りています。
                    スマートロックなので鍵の受け渡しが要らず、部員は深夜・早朝を含めていつでも使えます。
                </p>
                <p>
                    OBや経営者、他団体の方が訪ねてくることもあり、日常の延長線上に社会があります。
                    「行けば誰かがいる」場所があることが、関係の深さを決めています。
                </p>
            </div>
        </Reveal>
    </>
)
