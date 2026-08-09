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

                <Reveal className='mb-20 space-y-6 text-center'>
                    <p className='text-gray-700'>
                        週3回の勉強会、3つのゼミ、実践のプロジェクト、年3回の合宿。
                        参加はいずれも任意で、学業やほかの活動と両立している部員がほとんどです。
                    </p>
                    <Button asChild className='px-8 py-5' variant='outline'>
                        <NextLink href={pageLinkObject.PROJECT.href}>活動内容をくわしく見る</NextLink>
                    </Button>
                </Reveal>

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
