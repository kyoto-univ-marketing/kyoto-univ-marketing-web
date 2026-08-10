import { FC } from 'react'

import { NextLink } from '@/components/common/NextLink/NextLink'
import { Reveal } from '@/components/common/Reveal/Reveal'
import { Button } from '@/components/ui/button'
import { pageLinkObject } from '@/constants/pageLinks'

/**
 * トップの末尾に置く二つの入口。
 *
 * トップページの仕事は「読み手を振り分けること」なので、最後に必ずここへ着地させる。
 * 入会希望者と企業では知りたいことが違うため、一つずつ分けて置く。
 */
export const TopCta: FC = () => {
    const entries = [
        {
            en: 'Join Us',
            title: '入会をお考えの方へ',
            body: '学年・学部は問いません。まずは活動を見に来てください。',
            href: pageLinkObject.JOIN.href,
            label: '入会について見る',
        },
        {
            en: 'Sponsorship',
            title: '企業・協賛をご検討の方へ',
            body: '選考の外で京大生と出会う、1業界1社限定の協賛パートナーシップ。',
            href: pageLinkObject.SPONSORSHIP.href,
            label: '協賛について見る',
        },
    ]

    return (
        <section className='bg-primary px-6 py-20 text-primary-foreground'>
            <div className='mx-auto grid max-w-(--breakpoint-md) gap-12 sm:grid-cols-2 sm:gap-16'>
                {entries.map(({ en, title, body, href, label }, i) => (
                    <Reveal className='flex flex-col items-center gap-5 text-center' delay={i * 100} key={title}>
                        <p className='font-en text-brand-accent text-xs uppercase tracking-[0.35em]'>{en}</p>
                        <h2 className='font-title text-heading leading-snug'>{title}</h2>
                        <p className='text-primary-foreground/85 text-sm leading-relaxed'>{body}</p>
                        <Button
                            asChild
                            className='mt-2 border-white/70 bg-transparent px-8 py-5 text-white hover:bg-white hover:text-primary'
                            variant='outline'
                        >
                            <NextLink href={href}>{label}</NextLink>
                        </Button>
                    </Reveal>
                ))}
            </div>
        </section>
    )
}
