import { FC, Suspense } from 'react'

import { CircleStats, CircleStatsSkeleton } from '@/components/about/CircleStats/CircleStats'
import { BreadCrumb } from '@/components/common/BreadCrumb/BreadCrumb'
import { NextLink } from '@/components/common/NextLink/NextLink'
import { PageTitle } from '@/components/common/PageTitle/PageTitle'
import { Reveal } from '@/components/common/Reveal/Reveal'
import { Button } from '@/components/ui/button'
import { pageLinkObject } from '@/constants/pageLinks'

/** 協賛企業に提供するもの。発信・交流・参画の3本立て（協賛提案資料 v6 に準拠） */
const offers = [
    {
        en: 'Exclusive',
        title: '業界で唯一のパートナーという立場',
        body: '協賛枠は1業界につき1社までとさせていただいています。貴社は「京大マーケと共創している、その業界で唯一の企業」になります。',
    },
    {
        en: 'Presence',
        title: '一年を通じた、日常のなかの接点',
        body: '部員が毎日使うチャットへの参加・発信、活動拠点への掲示など。就職活動の時期にだけ現れる企業ではなく、学生の日常に名前がある企業になります。',
    },
    {
        en: 'Collaboration',
        title: '共創イベントの開催',
        body: '合宿のご企画、社員の方との座談会、事業課題を題材にしたワークショップなど。選考ではない場で学生と深く関わる機会を、運営は私たちが担って共同開催します。',
    },
]

/** 年間の主な行事。協賛企業がどこで学生と会えるかを示す */
const calendar = [
    { month: '4月', label: '新歓' },
    { month: '6月', label: 'キックオフ合宿' },
    { month: '9月', label: '夏合宿' },
    { month: '11月', label: '学園祭に出店' },
    { month: '12月', label: '成果発表会（ご観覧いただけます）' },
    { month: '2月', label: '春合宿' },
]

export interface SponsorshipPageProps {}

export const SponsorshipPage: FC<SponsorshipPageProps> = () => {
    return (
        <>
            <BreadCrumb
                items={[
                    { href: pageLinkObject.TOP.href, label: pageLinkObject.TOP.textEng },
                    { href: pageLinkObject.SPONSORSHIP.href, label: pageLinkObject.SPONSORSHIP.text },
                ]}
            />
            <PageTitle band en='Sponsorship'>
                企業・協賛をご検討の方へ
            </PageTitle>

            <div className='mx-auto max-w-(--breakpoint-md) px-6 pb-24'>
                <Reveal className='mb-20 space-y-6 text-center'>
                    <p className='font-title text-heading leading-relaxed'>
                        就職活動が始まる前に、素の京大生と出会う。
                    </p>
                    <p className='mx-auto max-w-2xl text-gray-700'>
                        京大マーケティング研究所は、企業と学生が「選考の外」で出会う場をつくっています。
                        広告枠のご提供ではなく、一年をかけて貴社と一緒に何かを作る協賛パートナーシップです。
                    </p>
                </Reveal>

                {/* 1業界1社限定は最初に伝える。これが協賛の価値の中心にあるため */}
                <Reveal className='mb-20 border border-brand-accent/40 bg-white px-6 py-10 text-center sm:px-12'>
                    <p className='font-en text-brand-accent text-xs uppercase tracking-[0.35em]'>One Company Per Industry</p>
                    <p className='mt-4 font-title text-heading leading-relaxed'>協賛枠は、1業界につき1社まで</p>
                    <p className='mt-5 text-gray-700 text-sm leading-relaxed'>
                        学生との関係の質を守るため、また協賛企業さまが同業他社と接点を奪い合う場にならないようにするためです。
                        枠が埋まっている業界については、次年度以降のご案内となります。
                    </p>
                </Reveal>

                <Reveal className='mb-20'>
                    <Suspense fallback={<CircleStatsSkeleton />}>
                        <CircleStats />
                    </Suspense>
                    <p className='mt-6 text-center text-gray-700 text-sm'>
                        文系・理系の垣根を越えた学生が、京都大学から徒歩圏の京町家「マーケハウス」に集まっています。
                        就職活動が本格化する前の学年から在籍しているため、早い段階から関係を築けます。
                    </p>
                </Reveal>

                <section className='mb-20'>
                    <PageTitle asChild en='What We Offer'>
                        <h2>ご提供するもの</h2>
                    </PageTitle>
                    <div className='space-y-10'>
                        {offers.map(({ en, title, body }, i) => (
                            <Reveal
                                className='flex flex-col gap-4 border-gray-200 border-t pt-8 sm:flex-row sm:gap-10'
                                delay={i * 80}
                                key={title}
                            >
                                <p className='shrink-0 font-en text-brand-accent text-xs uppercase tracking-[0.3em] sm:w-40 sm:pt-1'>
                                    {en}
                                </p>
                                <div className='flex-1 space-y-3'>
                                    <h3 className='font-title text-lg leading-snug'>{title}</h3>
                                    <p className='text-gray-700'>{body}</p>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </section>

                <section className='mb-20'>
                    <PageTitle asChild en='Social Value'>
                        <h2>協賛による社会的価値</h2>
                    </PageTitle>
                    <div className='space-y-6 text-gray-700'>
                        <p>
                            この一年間の関係は、採用の枠を超えた意味も持ちます。
                            「次代を担う人材の育成」への投資として、人的資本経営やCSRの文脈で発信していただけます。
                        </p>
                        <p>
                            いただいた協賛金は、活動拠点の維持費・合宿費・活動支援費に使われ、
                            使途は年次レポートですべてご報告します。
                        </p>
                    </div>
                </section>

                <section className='mb-20'>
                    <PageTitle asChild en='Calendar'>
                        <h2>年間の流れ</h2>
                    </PageTitle>
                    <dl className='divide-y divide-gray-200 border-gray-200 border-t border-b'>
                        {calendar.map(({ month, label }) => (
                            <div className='flex gap-6 px-2 py-4' key={month}>
                                <dt className='w-16 shrink-0 font-en text-gray-600 text-sm tracking-widest'>{month}</dt>
                                <dd className='flex-1'>{label}</dd>
                            </div>
                        ))}
                    </dl>
                </section>

                {/* 導線は問い合わせフォームに一本化する */}
                <Reveal className='bg-primary px-6 py-14 text-center text-primary-foreground sm:px-12'>
                    <h2 className='font-title text-heading leading-relaxed'>まずはお気軽にご相談ください</h2>
                    <p className='mx-auto mt-5 max-w-xl text-primary-foreground/85 text-sm leading-relaxed'>
                        協賛プランの詳細資料をご用意しています。ご費用を含む条件は、
                        貴社のご関心に合わせてご説明いたします。
                        12月の成果発表会のご見学からでも歓迎です。
                    </p>
                    <Button
                        asChild
                        className='mt-8 border-white/70 bg-transparent px-10 py-6 text-white hover:bg-white hover:text-primary'
                        variant='outline'
                    >
                        <NextLink href={pageLinkObject.CONTACT.href}>お問い合わせフォームへ</NextLink>
                    </Button>
                </Reveal>
            </div>
        </>
    )
}
