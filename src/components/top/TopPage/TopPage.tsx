import Link from 'next/link'
import { Suspense } from 'react'

import { Reveal } from '@/components/common/Reveal/Reveal'

import { Logo } from '../../common/Logo/Logo'
import { Button } from '../../ui/button'
import { Activities } from '../Activities/Activities'
import { ImageSwitch } from '../ImageSwitch/ImageSwitch'
import { topHeaderImageList } from '../imageList'
import { LatestArticles } from '../LatestArticles/LatestArticles'
import { LatestArticlesSkeleton } from '../LatestArticlesSkeleton/LatestArticlesSkeleton'
import { MakeHouse } from '../MakeHouse/MakeHouse'
import { ScrollCue } from '../ScrollCue/ScrollCue'
import { SecondOrigin } from '../SecondOrigin/SecondOrigin'
import { TopCta } from '../TopCta/TopCta'

/**
 * トップページ。
 *
 * PC とスマホの出し分けは、画面幅（md = 768px）を見て CSS だけで行う。
 * 以前はブラウザ側で PC かスマホかを判定してから描いていたため、
 * 最初に届く HTML が読み込み中の印だけになり、検索エンジンや AI からは
 * 空のページに見えていた（2026-11-10 に直した）。
 *
 * microCMS の top_message / top_sub_message は使っていない。
 * 「ようこそマーケティングの世界へ」の節を外したため（2026-08-11）。
 */
export const TopPage = async () => {
    return (
        <div className='w-full'>
            {/*
             * 写真には一切手を加えず（白膜をかけない）、文字は紺のパネルに分けて置く。
             * 写真の上に文字を重ねると、どちらも中途半端になるため。
             * PC は「パネル｜写真」の横並び、スマホは「写真／パネル」の縦並び。
             * 写真の切り替えは1つを共有し、パネルだけを幅で出し分ける。
             * 見出し（h1）は両方のパネルにあるが、隠れている側は読み上げにも出ない。
             */}
            <section className='flex h-[calc(100svh-var(--spacing)*18)] flex-col md:flex-row'>
                {/* PC のパネル。写真を全幅に敷いてパネルを重ねると被写体がパネルの裏に隠れ、
                    写真の枠の中で中央に来ないため、横に並べている */}
                {/* 下に pb を取ってあるのは、画面が低いときに中央寄せの中身が
                    スクロールの合図まで下りてこないようにするため */}
                <div className='relative hidden w-[46%] max-w-[34rem] shrink-0 flex-col justify-center gap-12 bg-primary px-10 pb-28 text-primary-foreground md:flex lg:px-16'>
                    <Reveal className='flex flex-col gap-10'>
                        <Logo className='size-16' reverse sizes='128px' />
                        <div className='flex flex-col gap-6'>
                            {/* 語の途中（研／究所）で折り返さないよう、意味の切れ目で区切る */}
                            <h1 className='font-title text-[clamp(2rem,1rem+2.4vw,3.5rem)] leading-[1.15]'>
                                <span className='inline-block whitespace-nowrap'>京大</span>
                                <span className='inline-block whitespace-nowrap'>マーケティング</span>
                                <span className='inline-block whitespace-nowrap'>研究所</span>
                            </h1>
                            <span aria-hidden className='block h-px w-16 bg-brand-accent' />
                            {/*
                             * 「セカンド原体験」だけを白のまま残し、周りを少し落として浮かせる。
                             * 紺地では金がくすむので、色は足さずに明るさの差で目立たせている。
                             */}
                            <p className='font-title text-heading text-primary-foreground/65 leading-relaxed'>
                                大学生に
                                <span className='text-primary-foreground'>「セカンド原体験」</span>
                                を与える。
                            </p>
                        </div>
                    </Reveal>
                    {/*
                     * 欧文名は縦組みにしてパネルの右端に沿わせる。本を立てたときの背に近い扱いで、
                     * 明朝と紺の面に「和」の軸を一本入れるための装飾。読ませる要素ではない。
                     */}
                    <p className='-translate-y-1/2 absolute top-1/2 right-5 hidden font-en text-primary-foreground/60 text-xs uppercase tracking-[0.5em] [writing-mode:vertical-rl] lg:block'>
                        Kyodai Marketing Institute
                    </p>
                    <ScrollCue className='left-10 lg:left-16' reverse />
                </div>

                {/* 写真。スマホではパネルより上に出す */}
                <div className='relative flex-1 overflow-hidden max-md:order-first'>
                    <ImageSwitch
                        className='absolute inset-0 h-full'
                        imageList={topHeaderImageList}
                        interval={7000}
                        transitionDuration={2000}
                    />
                </div>

                {/* スマホのパネル。写真の下の紺の帯に文字を置く（PCと同じ考え方） */}
                <div className='flex flex-col gap-5 bg-primary px-8 py-8 text-primary-foreground md:hidden'>
                    <div className='flex items-center gap-4'>
                        <Logo reverse size='xl' />
                        <h1 className='font-title text-2xl leading-tight'>
                            <span className='inline-block whitespace-nowrap'>京大</span>
                            <span className='inline-block whitespace-nowrap'>マーケティング</span>
                            <span className='inline-block whitespace-nowrap'>研究所</span>
                        </h1>
                    </div>
                    <div className='flex flex-col gap-3'>
                        <span aria-hidden className='block h-px w-12 bg-brand-accent' />
                        <p className='font-en text-xs uppercase tracking-[0.3em]'>Kyodai Marketing Institute</p>
                    </div>
                    {/* PCと同じ考え方。「セカンド原体験」だけ白のまま残す */}
                    <p className='font-title text-lg text-primary-foreground/65'>
                        大学生に
                        <span className='text-primary-foreground'>「セカンド原体験」</span>
                        を与える。
                    </p>
                    <Button
                        asChild
                        className='mt-1 w-fit border-white/70 bg-transparent px-8 py-5 text-white hover:bg-white hover:text-primary'
                        variant='outline'
                    >
                        <Link href='/about'>団体概要</Link>
                    </Button>
                </div>
            </section>

            {/*
             * 並び順は「考え方 → 活動概要 → 拠点 → お知らせ」。
             * ヒーローで「セカンド原体験を与える。」と言い切っているので、
             * その説明を続けてから、では何をしているのかへ進む。
             */}
            <div className='section-stack py-16 md:py-24'>
                <Suspense fallback={null}>
                    <SecondOrigin />
                </Suspense>

                <Activities />

                <MakeHouse />

                {/* お知らせは PC だけ幅を絞る（スマホは以前どおり全幅） */}
                <div className='md:mx-auto md:w-full md:max-w-(--breakpoint-md) md:px-8'>
                    <Reveal>
                        <Suspense fallback={<LatestArticlesSkeleton />}>
                            <LatestArticles />
                        </Suspense>
                    </Reveal>
                </div>
            </div>

            <TopCta />
        </div>
    )
}
