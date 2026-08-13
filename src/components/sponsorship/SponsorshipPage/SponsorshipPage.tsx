import { FC, Suspense } from 'react'

import WorkshopImg from '@/../public/page-images/bands/workshop.webp'
import { CircleStats, CircleStatsSkeleton } from '@/components/about/CircleStats/CircleStats'
import { BreadCrumb } from '@/components/common/BreadCrumb/BreadCrumb'
import { MessageBand } from '@/components/common/MessageBand/MessageBand'
import { NextLink } from '@/components/common/NextLink/NextLink'
import { PageTitle } from '@/components/common/PageTitle/PageTitle'
import { Reveal } from '@/components/common/Reveal/Reveal'
import { SectionHeading } from '@/components/common/SectionHeading/SectionHeading'
import { Button } from '@/components/ui/button'
import { pageLinkObject } from '@/constants/pageLinks'

/**
 * 協賛企業に提供するもの。発信・交流・参画の3本立て（協賛提案資料 v6 に準拠）。
 *
 * ⚠️ 枠の限定（1業界1社）や金額はここに書かない。条件は個別のご提案の場で説明する。
 */
const offers = [
    {
        en: 'Presence',
        title: '発信',
        scope: '日常',
        body: '部員が毎日使うチャットへの参加・発信、活動拠点への掲示など。一年を通じて、学生の日常のなかに貴社の名前がある状態を創ります。',
    },
    {
        en: 'Connection',
        title: '交流',
        scope: 'イベント',
        body: '社員の方との座談会、事業課題を題材にしたワークショップなど。京大生が集まる場を、運営は私たちが担って開催します。年度末の成果発表会にもご参加いただけます。',
    },
    {
        en: 'Involvement',
        title: '参画',
        scope: '共創企画',
        body: '合宿のご企画や、貴社の課題をテーマにした継続プロジェクト。京大生チームが実際に動き、一年をかけて形にしていきます。',
    },
]

/** お問い合わせから契約までの流れ。条件は打ち合わせの中でご説明する */
const steps = [
    { en: 'Contact', title: 'お問い合わせ', body: 'フォームからご連絡ください。数日以内にご返信します。' },
    {
        en: 'Meeting',
        title: '打ち合わせ',
        body: '貴社のご関心をうかがいながら、複数回に分けてご提案を詰めていきます。',
    },
    { en: 'Agreement', title: '協賛のご契約', body: '内容と条件が固まりましたら、契約を締結して一年が始まります。' },
]

/** 年間の主な行事。協賛企業がどこで学生と会えるかを示す */
const calendar = [
    { month: '4月', label: '新歓' },
    { month: '6月', label: 'キックオフ合宿' },
    { month: '9月', label: '夏合宿' },
    { month: '11月', label: '学祭（NF）に出店' },
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

            <div className='section-stack pb-24'>
                <div className='mx-auto w-full max-w-(--breakpoint-lg) px-6 md:px-8'>
                    <Reveal className='space-y-6 text-center'>
                        <p className='text-balance font-title text-heading leading-relaxed'>
                            <span className='inline-block'>一年をかけて、</span>
                            <span className='inline-block'>価値ある何かを</span>
                            <span className='inline-block'>一緒に創り出す関係に。</span>
                        </p>
                        {/* 「広告ではない」とは言い切らない。発信の機会も実際にご提供しているため。
                            「ただの広告枠ではない」であれば事実と食い違わない */}
                        <p className='mx-auto max-w-2xl text-gray-700'>
                            弊団体の協賛は、ただの広告枠ではありません。
                            京大マーケティング研究所は、次の時代を創ろうとする学生が集まる場です。
                            一年を通じて学生の日常や非日常のイベントに関わっていただきながら、
                            貴社と学生とで何かを一緒に形にしていく——
                            そんな協賛パートナーシップをご提案しております。
                        </p>
                    </Reveal>
                </div>

                {/* 枠の限定や金額はHPに出さない。個別のご提案の場で説明する。
                    冒頭の一文と同じ言葉を帯にも置くと繰り返しになるので、
                    ここには取り組みの形（企業が自社に置き換えて考えられるもの）を出す */}
                <MessageBand
                    backgroundImage={WorkshopImg}
                    en='Ways to Work Together'
                    note='ほかにもさまざまな形でのお取り組みをご検討いただけます。お気軽にご連絡ください。'
                >
                    <span className='inline-block'>事業創出、起業支援、</span>
                    <span className='inline-block'>産学連携、地方創生。</span>
                </MessageBand>

                {/* 枠はPCの横幅を使えるように広く取り、読ませる文章だけ幅を絞る */}
                <div className='section-stack mx-auto w-full max-w-(--breakpoint-lg) px-6 md:px-8'>
                    <Reveal className='space-y-6'>
                        <Suspense fallback={<CircleStatsSkeleton />}>
                            <CircleStats />
                        </Suspense>
                        <p className='mx-auto max-w-2xl text-center text-gray-700 text-sm'>
                            文系・理系の垣根を越えた学生が、京都大学から徒歩圏の京町家「マーケハウス」に集まっています。
                            勉強会やゼミ、実践のプロジェクト、年3回の合宿を通じて、一年をかけて力をつけていきます。
                        </p>
                    </Reveal>

                    <section>
                        <SectionHeading en='What We Offer' index={1}>
                            ご提供するもの
                        </SectionHeading>
                        {/* 日常 → イベント → 共創企画 の順。関わりが深くなる順に並べる */}
                        <div className='grid gap-10 md:grid-cols-3 md:gap-x-10'>
                            {offers.map(({ en, title, scope, body }, i) => (
                                <Reveal className='space-y-4 border-gray-200 border-t pt-8' delay={i * 80} key={title}>
                                    <p className='font-en text-brand-accent text-xs uppercase tracking-[0.3em]'>{en}</p>
                                    <h3 className='font-title text-[clamp(1.75rem,1.4rem+1vw,2.25rem)] leading-none'>
                                        {title}
                                    </h3>
                                    <span aria-hidden className='block h-px w-8 bg-brand-accent' />
                                    <p className='text-gray-600 text-sm tracking-[0.15em]'>{scope}</p>
                                    <p className='text-gray-700 text-sm leading-relaxed'>{body}</p>
                                </Reveal>
                            ))}
                        </div>
                    </section>

                    <section>
                        <SectionHeading en='Calendar' index={2}>
                            年間の流れ
                        </SectionHeading>
                        {/* PCは2列。6項目を縦に並べると空白が目立つ */}
                        <dl className='grid border-gray-200 border-t sm:grid-cols-2 sm:gap-x-12'>
                            {calendar.map(({ month, label }) => (
                                <div className='flex gap-6 border-gray-200 border-b px-2 py-4' key={month}>
                                    <dt className='w-16 shrink-0 font-en text-gray-600 text-sm tracking-widest'>
                                        {month}
                                    </dt>
                                    <dd className='flex-1'>{label}</dd>
                                </div>
                            ))}
                        </dl>
                    </section>

                    {/* 金額を出さない代わりに、問い合わせたあと何が起きるかを示しておく。
                        次の展開が見えないと、条件不明のまま連絡するのは踏み出しにくい */}
                    <section>
                        <SectionHeading en='Process' index={3}>
                            ご提案までの流れ
                        </SectionHeading>
                        <ol className='grid gap-8 md:grid-cols-3 md:gap-x-10'>
                            {steps.map(({ en, title, body }, i) => (
                                <Reveal
                                    className='space-y-3 border-gray-200 border-t pt-8'
                                    delay={i * 80}
                                    key={title}
                                >
                                    <div className='flex items-baseline gap-4'>
                                        <span aria-hidden className='font-en text-2xl text-brand-accent/50 leading-none'>
                                            {String(i + 1).padStart(2, '0')}
                                        </span>
                                        <span className='font-en text-brand-accent text-xs uppercase tracking-[0.3em]'>
                                            {en}
                                        </span>
                                    </div>
                                    <h3 className='font-title text-lg leading-snug'>{title}</h3>
                                    <p className='text-gray-700 text-sm leading-relaxed'>{body}</p>
                                </Reveal>
                            ))}
                        </ol>
                        <p className='mt-8 text-gray-600 text-sm'>
                            ご費用を含む条件は、貴社のご関心にあわせて打ち合わせの中でご説明いたします。
                        </p>
                    </section>
                </div>

                {/* 導線は問い合わせフォームに一本化する */}
                <Reveal className='bg-primary px-6 py-16 text-center text-primary-foreground md:py-20'>
                    <h2 className='text-balance font-title text-heading leading-relaxed'>まずはお気軽にご相談ください</h2>
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
