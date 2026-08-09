import { PageTitle } from '@/components/common/PageTitle/PageTitle'
import { Reveal } from '@/components/common/Reveal/Reveal'
import { getPolicies } from '@/lib/microcms'

/**
 * トップに置く「セカンド原体験」の要約。
 *
 * 中身は /about の「部員が得るもの」と同じ microCMS の policies を使う。
 * 同じ言葉を二か所で書き分けると必ず食い違うため、出所を一つにしている。
 * トップは一語と見出しだけの簡潔版、詳しい説明は /about に置く。
 */
export const SecondOrigin = async () => {
    const policies = await getPolicies()
    if (policies.length === 0) {
        return null
    }

    return (
        <section className='mx-auto max-w-(--breakpoint-md) px-6'>
            <PageTitle asChild en='Second Origin Experience'>
                <h2>大学生に「セカンド原体験」を</h2>
            </PageTitle>
            <div className='grid gap-8 sm:grid-cols-3'>
                {policies.map((policy, i) => (
                    <Reveal className='flex flex-col items-center gap-4 text-center' delay={i * 100} key={policy.id}>
                        <span className='font-title text-[clamp(2.5rem,2rem+2vw,3.5rem)] leading-none'>
                            {policy.title ?? policy.text}
                        </span>
                        <span aria-hidden className='block h-px w-8 bg-brand-accent' />
                        {policy.subtitle && <p className='font-title text-base'>{policy.subtitle}</p>}
                    </Reveal>
                ))}
            </div>
        </section>
    )
}
