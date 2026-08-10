import { FC, Suspense } from 'react'

import { BreadCrumb } from '@/components/common/BreadCrumb/BreadCrumb'
import { PageTitle } from '@/components/common/PageTitle/PageTitle'
import { pageLinkObject } from '@/constants/pageLinks'

import { AboutSections } from '../AboutAccordion/AboutAccordion'
import { AboutNav } from '../AboutNav/AboutNav'
import { CircleOutline } from '../CircleOutline/CircleOutline'
import { CircleStats, CircleStatsSkeleton } from '../CircleStats/CircleStats'
import { CorporateInfo } from '../CorporateInfo/CorporateInfo'

export interface AboutPageProps {
    /** サークル概要の本文 */
    outlineText: string
}

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
            <div className='mx-auto mb-12 max-w-(--breakpoint-md) px-6 md:px-8'>
                <div className='mb-10'>
                    <Suspense fallback={<CircleStatsSkeleton />}>
                        <CircleStats />
                    </Suspense>
                </div>
                <div className='mb-16'>
                    <CircleOutline text={outlineText} />
                </div>
                <AboutSections />
                {/* 人の紹介そのものは下層ページに置き、ここは導線だけにしている。
                    団体概要が特定の個人のページに見えないようにするため */}
                <div className='mt-16'>
                    <AboutNav />
                </div>
                {/* 法人概要は企業が実在性を確認する場所。人の紹介の後に置く */}
                <div className='mt-16'>
                    <Suspense fallback={null}>
                        <CorporateInfo />
                    </Suspense>
                </div>
            </div>
        </>
    )
}
