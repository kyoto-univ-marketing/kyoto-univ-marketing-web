import { FC, Suspense } from 'react'
import { FaInstagram } from 'react-icons/fa6'

import { CircleStats, CircleStatsSkeleton } from '@/components/about/CircleStats/CircleStats'
import { BreadCrumb } from '@/components/common/BreadCrumb/BreadCrumb'
import { NextLink } from '@/components/common/NextLink/NextLink'
import { PageTitle } from '@/components/common/PageTitle/PageTitle'
import { Reveal } from '@/components/common/Reveal/Reveal'
import { Button } from '@/components/ui/button'
import { pageLinkObject } from '@/constants/pageLinks'
import { getSiteSettings } from '@/lib/microcms'

/**
 * ふだんの活動。事実だけを書く（協賛提案資料 v6 に準拠）。
 * 新歓日程や入会の可否は時期で変わるため、ここには固定で書かない。
 */
const activities = [
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
        en: 'Project',
        title: 'プロジェクト',
        body: '学園祭への出店、外部のビジネスコンテスト、商品開発、企業のマーケティング支援。実際に手を動かす場です。',
    },
    {
        en: 'Camp',
        title: '合宿',
        body: '年に3回。郊外に泊まってチームでワークをします。深夜まで語り合うことも多く、ここで関係が変わる人が多いです。',
    },
]

export interface JoinPageProps {}

export const JoinPage: FC<JoinPageProps> = async () => {
    const siteSettings = await getSiteSettings()

    return (
        <>
            <BreadCrumb
                items={[
                    { href: pageLinkObject.TOP.href, label: pageLinkObject.TOP.textEng },
                    { href: pageLinkObject.JOIN.href, label: pageLinkObject.JOIN.text },
                ]}
            />
            <PageTitle band en='Join Us'>
                入会をお考えの方へ
            </PageTitle>

            <div className='mx-auto max-w-(--breakpoint-md) px-6 pb-24'>
                <Reveal className='mb-20 space-y-6 text-center'>
                    <p className='font-title text-heading leading-relaxed'>
                        大学入学の熱量を、最高到達点にしない。
                    </p>
                    <p className='mx-auto max-w-2xl text-gray-700'>
                        京大マーケティング研究所は、学生時代にもうひとつの原体験——「セカンド原体験」をつくる場です。
                        やりたいことが決まっている人も、まだ探している人も歓迎します。
                    </p>
                </Reveal>

                <Reveal className='mb-20'>
                    <Suspense fallback={<CircleStatsSkeleton />}>
                        <CircleStats />
                    </Suspense>
                    <p className='mt-6 text-center text-gray-700 text-sm'>
                        文系・理系の垣根を越えた京大生が在籍しています。
                        活動拠点は、京都大学から徒歩圏の京町家「マーケハウス」。
                        スマートロックなので、部員は深夜・早朝を含めていつでも使えます。
                    </p>
                </Reveal>

                <section className='mb-20'>
                    <PageTitle asChild en='Activities'>
                        <h2>ふだんの活動</h2>
                    </PageTitle>
                    <div className='space-y-10'>
                        {activities.map(({ en, title, body }, i) => (
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
                    <p className='mt-8 text-center text-gray-600 text-sm'>
                        参加はいずれも任意です。学業やほかの活動と両立している部員がほとんどです。
                    </p>
                </section>

                {/* 入会の可否は時期の運営状況で変わるため、断定せずに相談してもらう形にする */}
                <Reveal className='mb-20 border border-gray-200 bg-white px-6 py-10 sm:px-10'>
                    <h2 className='font-title text-heading leading-snug'>入会について</h2>
                    <div className='mt-6 space-y-4 text-gray-700'>
                        <p>
                            学年・学部は問いません。まずはご連絡いただければ、活動の見学や新歓の予定をご案内します。
                        </p>
                        <p className='text-sm'>
                            ※ ご連絡いただいた時期の運営体制やプロジェクトの進行状況により、
                            入会をお待ちいただく場合があります。あらかじめご了承ください。
                        </p>
                    </div>
                </Reveal>

                <Reveal className='bg-primary px-6 py-14 text-center text-primary-foreground sm:px-12'>
                    <h2 className='font-title text-heading leading-relaxed'>まずは話を聞きに来てください</h2>
                    <p className='mx-auto mt-5 max-w-xl text-primary-foreground/85 text-sm leading-relaxed'>
                        お問い合わせフォームか、InstagramのDMからご連絡ください。
                    </p>
                    <div className='mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row'>
                        <Button
                            asChild
                            className='border-white/70 bg-transparent px-8 py-5 text-white hover:bg-white hover:text-primary'
                            variant='outline'
                        >
                            <NextLink href={pageLinkObject.CONTACT.href}>お問い合わせフォームへ</NextLink>
                        </Button>
                        <NextLink
                            className='inline-flex items-center gap-2 text-primary-foreground/85 text-sm underline underline-offset-4 hover:text-primary-foreground'
                            href={siteSettings.instagram_url}
                        >
                            <FaInstagram size={18} />
                            InstagramのDMで聞く
                        </NextLink>
                    </div>
                </Reveal>
            </div>
        </>
    )
}
