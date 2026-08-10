import { FC, Suspense } from 'react'

import { BreadCrumb } from '@/components/common/BreadCrumb/BreadCrumb'
import { PageTitle } from '@/components/common/PageTitle/PageTitle'
import { SectionHeading } from '@/components/common/SectionHeading/SectionHeading'
import { pageLinkObject } from '@/constants/pageLinks'

import { AboutSections } from '../AboutAccordion/AboutAccordion'
import { FounderSection, MembersSection } from '../AboutNav/AboutNav'
import { CircleOutline } from '../CircleOutline/CircleOutline'
import { CircleStats, CircleStatsSkeleton } from '../CircleStats/CircleStats'
import { CorporateInfo } from '../CorporateInfo/CorporateInfo'

export interface AboutPageProps {
    /** サークル概要の本文 */
    outlineText: string
}

/**
 * 団体概要。
 *
 * 章を並べる順は「数字 → 団体の話 → 得られるもの → 人 → 法人」。
 * 数字を先に置くのは、規模が分からないまま読み進めても判断ができないため。
 * 人の紹介そのものは下層ページに置き、ここは導線だけにする
 * （団体概要が特定の個人のページに見えないようにするため）。
 */
export const AboutPage: FC<AboutPageProps> = ({ outlineText }) => {
    return (
        <>
            <BreadCrumb
                items={[
                    { href: pageLinkObject.TOP.href, label: pageLinkObject.TOP.textEng },
                    { href: pageLinkObject.ABOUT.href, label: pageLinkObject.ABOUT.text },
                ]}
            />
            <PageTitle band en='About'>団体概要</PageTitle>
            <div className='mx-auto max-w-(--breakpoint-md) space-y-20 px-6 pb-24 md:px-8'>
                <section>
                    <SectionHeading en='Numbers'>数字で見る京大マーケティング研究所</SectionHeading>
                    <Suspense fallback={<CircleStatsSkeleton />}>
                        <CircleStats />
                    </Suspense>
                </section>

                <section>
                    <SectionHeading en='Outline'>京大マーケティング研究所について</SectionHeading>
                    <CircleOutline text={outlineText} />
                </section>

                <AboutSections />

                <FounderSection />

                <MembersSection />

                <Suspense fallback={null}>
                    <CorporateInfo />
                </Suspense>
            </div>
        </>
    )
}
