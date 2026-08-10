import { FC, Suspense } from 'react'

import { BreadCrumb } from '@/components/common/BreadCrumb/BreadCrumb'
import { MessageBand } from '@/components/common/MessageBand/MessageBand'
import { PageTitle } from '@/components/common/PageTitle/PageTitle'
import { SectionHeading } from '@/components/common/SectionHeading/SectionHeading'
import { pageLinkObject } from '@/constants/pageLinks'

import { AboutSections } from '../AboutAccordion/AboutAccordion'
import { FounderSection, MembersSection } from '../AboutNav/AboutNav'
import { CircleStats, CircleStatsSkeleton } from '../CircleStats/CircleStats'
import { CorporateInfo } from '../CorporateInfo/CorporateInfo'
import { FacultyChart } from '../FacultyChart/FacultyChart'

export interface AboutPageProps {}

/**
 * 団体概要。
 *
 * 章を並べる順は「数字 → 得られるもの → 人 → 法人」。
 * 数字を先に置くのは、規模が分からないまま読み進めても判断ができないため。
 * 人の紹介そのものは下層ページに置き、ここは導線だけにする
 * （団体概要が特定の個人のページに見えないようにするため）。
 */
export const AboutPage: FC<AboutPageProps> = () => {
    return (
        <>
            <BreadCrumb
                items={[
                    { href: pageLinkObject.TOP.href, label: pageLinkObject.TOP.textEng },
                    { href: pageLinkObject.ABOUT.href, label: pageLinkObject.ABOUT.text },
                ]}
            />
            <PageTitle band en='About'>団体概要</PageTitle>
            <div className='section-stack pb-24'>
                <div className='section-stack mx-auto w-full max-w-(--breakpoint-md) px-6 md:px-8'>
                    <section className='space-y-12'>
                        <SectionHeading en='Numbers' index={1}>
                            数字で見る京大マーケティング研究所
                        </SectionHeading>
                        <Suspense fallback={<CircleStatsSkeleton />}>
                            <CircleStats />
                        </Suspense>
                        <div className='space-y-6'>
                            <h3 className='font-title text-lg'>所属学部の内訳</h3>
                            <FacultyChart />
                        </div>
                    </section>

                    <AboutSections />
                </div>

                {/* 長い白の連なりを一度切る。中身はこの団体の一番の主張に絞る */}
                <MessageBand en='Second Origin Experience'>大学生に「セカンド原体験」を与える。</MessageBand>

                <div className='section-stack mx-auto w-full max-w-(--breakpoint-md) px-6 md:px-8'>
                    <FounderSection />

                    <MembersSection />

                    <Suspense fallback={null}>
                        <CorporateInfo />
                    </Suspense>
                </div>
            </div>
        </>
    )
}
