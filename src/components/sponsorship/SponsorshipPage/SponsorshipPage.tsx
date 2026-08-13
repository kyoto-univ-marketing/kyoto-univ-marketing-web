import { FC, Suspense } from 'react'

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
        title: '一年を通じた、日常のなかの接点',
        body: '部員が毎日使うチャットへの参加・発信、活動拠点への掲示など。一年を通じて、学生の日常のなかに貴社の名前がある状態をつくります。',
    },
    {
        en: 'Collaboration',
        title: '共創イベントの開催',
        body: '合宿のご企画、社員の方との座談会、事業課題を題材にしたワークショップなど。学生と深く関わる機会を、運営は私たちが担って共同開催します。',
    },
    {
        en: 'Involvement',
        title: '貴社起点の企画とその実行',
        body: '学生を知るだけでなく、貴社のテーマを持ち込めます。京大生チームが実際に動き、一年をかけて形にしていきます。',
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

            <div className='section-stack pb-24'>
                <div className='mx-auto w-full max-w-(--breakpoint-lg) px-6 md:px-8'>
                    <Reveal className='space-y-6 text-center'>
                        <p className='font-title text-heading leading-relaxed'>
                            志のある学生を、近くで応援するという関わり方。
                        </p>
                        {/* 「広告ではない」とは書かない。発信の機会も実際にご提供しているため、
                            言い切ると事実と食い違う */}
                        <p className='mx-auto max-w-2xl text-gray-700'>
                            京大マーケティング研究所は、次の時代をつくろうとする学生が集まる場です。
                            一年を通じて学生の日常に関わっていただきながら、貴社と学生とで何かを一緒に形にしていく——
                            そんな協賛パートナーシップをご提案しています。
                        </p>
                    </Reveal>
                </div>

                {/* 枠の限定や金額はHPに出さない。個別のご提案の場で説明する */}
                <MessageBand en='Our Proposal'>
                    <span className='inline-block'>一年をかけて、</span>
                    <span className='inline-block'>価値ある何かを</span>
                    <span className='inline-block'>一緒に創り出す関係に。</span>
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
                        <div className='grid gap-10 md:grid-cols-3 md:gap-x-10'>
                            {offers.map(({ en, title, body }, i) => (
                                <Reveal className='space-y-3 border-gray-200 border-t pt-8' delay={i * 80} key={title}>
                                    <p className='font-en text-brand-accent text-xs uppercase tracking-[0.3em]'>{en}</p>
                                    <h3 className='font-title text-lg leading-snug'>{title}</h3>
                                    <p className='text-gray-700 text-sm leading-relaxed'>{body}</p>
                                </Reveal>
                            ))}
                        </div>
                    </section>

                    <section>
                        <SectionHeading en='Social Value' index={2}>
                            協賛による社会的価値
                        </SectionHeading>
                        <div className='mx-auto max-w-2xl space-y-6 text-gray-700'>
                            <p>
                                「次代を担う人材の育成に投資している」という事実は、
                                人的資本経営やCSRの文脈で発信していただける物語になります。
                                その発信のお手伝いをすることも可能です。
                            </p>
                            <p>
                                いただいた協賛金は、活動拠点の維持費・合宿費・活動支援費に使われ、
                                使途は年次レポートですべてご報告します。
                            </p>
                        </div>
                    </section>

                    <section>
                        <SectionHeading en='Calendar' index={3}>
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
                        <SectionHeading en='Process' index={4}>
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
