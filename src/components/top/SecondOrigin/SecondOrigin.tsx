import { FC } from 'react'

import { NextLink } from '@/components/common/NextLink/NextLink'
import { PageTitle } from '@/components/common/PageTitle/PageTitle'
import { Reveal } from '@/components/common/Reveal/Reveal'
import { Button } from '@/components/ui/button'
import { pageLinkObject } from '@/constants/pageLinks'

/**
 * トップに置く「セカンド原体験」の説明。
 *
 * 以前は /about と同じ policies（火・地図・てこ）を一語ずつ並べていたが、
 * 言葉だけでは何のことか伝わらないため、言葉の意味そのものを書く形に変えた。
 * 三つの言葉は /about の「得られるもの」に置いてある。
 */
export const SecondOrigin: FC = () => (
    <section className='mx-auto max-w-(--breakpoint-md) px-6 md:px-8'>
        <PageTitle asChild en='Second Origin Experience'>
            <h2>セカンド原体験とは</h2>
        </PageTitle>
        <Reveal className='space-y-8 text-center'>
            <p className='font-title text-heading leading-relaxed'>
                <span className='inline-block'>大学入学の熱量を、</span>
                <span className='inline-block'>最高到達点にしない。</span>
            </p>
            <div className='mx-auto max-w-2xl space-y-4 text-gray-700'>
                <p>
                    原体験とは、その人の価値観をかたちづくった出来事のことです。
                    多くの人にとって、それは大学に入るまでに起きています。
                </p>
                <p>
                    私たちは、学生時代にもうひとつの原体験——「セカンド原体験」——をつくることを目指しています。
                    合宿で深夜まで語り合った時間、自分の手が社会に届いた瞬間。
                    その一度が、卒業したあとの選び方を変えていきます。
                </p>
            </div>
            <Button asChild className='px-8 py-5' variant='outline'>
                <NextLink href={pageLinkObject.ABOUT.href}>団体概要を見る</NextLink>
            </Button>
        </Reveal>
    </section>
)
