import { FC } from 'react'

import { HeadingKeyword, HeadingSub } from '@/components/common/HeadingParts/HeadingParts'
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
 *
 * ここでは「狂気」の語は出さない（2026-10-27 本人）。初めて読む人には強いので、
 * 「周りが決めた基準から離れて、人生観・キャリア観を再構築する」までにとどめ、
 * 狂気の説明は /about に任せる。
 * 研究所が用意できるのは「経験に出会える機会」まで。経験そのものを用意するとは書かない。
 */
export const SecondOrigin: FC = () => (
    <section className='mx-auto max-w-(--breakpoint-md) px-6 md:px-8'>
        <PageTitle asChild en='Concept'>
            <h2>
                <HeadingKeyword>セカンド原体験</HeadingKeyword>
                <HeadingSub>とは</HeadingSub>
            </h2>
        </PageTitle>
        <Reveal className='space-y-8 text-center'>
            {/* 説明の段落は左揃え。中央揃えは行頭が毎行ずれるので、数行を超えると読みにくい */}
            <div className='mx-auto max-w-2xl space-y-4 text-justify text-gray-700'>
                <p>
                    原体験とは、その人の価値観をかたちづくった出来事のことです。
                    多くの人にとって、それは大学に入るまでに起きています。
                </p>
                <p>
                    私たちは、学生時代にもうひとつの原体験——「セカンド原体験」——を創ることを目指しています。
                    自分の手が社会に届いた瞬間、想像もしなかったキャリアを歩んでいる人との出会い、
                    仲間と激しく議論をかわした時間。
                    そうした刺激に心をつかまれ、気づけばそのことばかり考えている。
                    そういった経験に出会える機会を数多く用意することで、
                    周りが決めた基準から離れて、人生観・キャリア観を再構築できる場所をつくります。
                </p>
            </div>
            <Button asChild className='px-8 py-5'>
                <NextLink href={pageLinkObject.ABOUT.href}>団体概要を見る</NextLink>
            </Button>
        </Reveal>
    </section>
)
