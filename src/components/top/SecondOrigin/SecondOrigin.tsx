import { FC } from 'react'

import { Keyword } from '@/components/common/Keyword/Keyword'
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
            <p className='text-balance font-title text-heading leading-relaxed'>
                <span className='inline-block'>大学合格・入学を、</span>
                <span className='inline-block'>最高到達点にしない。</span>
            </p>
            <div className='mx-auto max-w-2xl space-y-4 text-gray-700'>
                <p>
                    原体験とは、その人の価値観をかたちづくった出来事のことです。
                    多くの人にとって、それは大学に入るまでに起きています。
                </p>
                <p>
                    私たちは、学生時代にもうひとつの原体験——<Keyword>「セカンド原体験」</Keyword>
                    ——を創ることを目指しています。
                    自分の手が社会に届いた瞬間、想像もしなかったキャリアを歩んでいる人との出会い、
                    仲間と激しく議論をかわした時間。
                    卒業した後の生き方を大きく変える「セカンド原体験」を、
                    一人でも多くの大学生に提供していきたいと考えています。
                </p>
            </div>
            <Button asChild className='px-8 py-5' variant='outline'>
                <NextLink href={pageLinkObject.ABOUT.href}>団体概要を見る</NextLink>
            </Button>
        </Reveal>
    </section>
)
