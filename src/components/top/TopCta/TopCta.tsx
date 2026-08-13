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
    // 見出しは意味の切れ目で区切る。放っておくと「…ご検討の方／へ」のように
    // 助詞だけが次の行に落ちる
    const entries = [
        {
            en: 'Join Us',
            title: ['入会を', 'お考えの方へ'],
            body: '学年・学部は問いません。まずは活動を見に来てください。',
            href: pageLinkObject.JOIN.href,
            label: '入会について見る',
        },
        {
            en: 'Sponsorship',
            title: ['企業・協賛を', 'ご検討の方へ'],
            body: '様々な協賛パートナーシップのプランをご用意しております。',
            href: pageLinkObject.SPONSORSHIP.href,
            label: '協賛について見る',
        },
    ]

    return (
        <section className='bg-primary px-6 py-20 text-primary-foreground'>
            <div className='mx-auto grid max-w-(--breakpoint-md) gap-12 sm:grid-cols-2 sm:gap-16'>
                {entries.map(({ en, title, body, href, label }, i) => (
                    <Reveal className='flex flex-col items-center gap-5 text-center' delay={i * 100} key={en}>
                        <p className='font-en text-brand-accent text-xs uppercase tracking-[0.35em]'>{en}</p>
                        <h2 className='text-balance font-title text-heading leading-snug'>
                            {title.map((part) => (
                                <span className='inline-block whitespace-nowrap' key={part}>
                                    {part}
                                </span>
                            ))}
                        </h2>
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
