import { FC, Suspense } from 'react'

import { BreadCrumb } from '@/components/common/BreadCrumb/BreadCrumb'
import { PageTitle } from '@/components/common/PageTitle/PageTitle'
import { pageLinkObject } from '@/constants/pageLinks'

import { AboutSections } from '../AboutAccordion/AboutAccordion'
import { CircleOutline } from '../CircleOutline/CircleOutline'
import { CircleStats, CircleStatsSkeleton } from '../CircleStats/CircleStats'
import { CorporateInfo } from '../CorporateInfo/CorporateInfo'
import { Founder } from '../Founder/Founder'
import { Representatives } from '../Representatives/Representatives'

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
            <div className='mx-auto mb-12 max-w-(--breakpoint-sm) px-6'>
                <div className='mb-10'>
                    <Suspense fallback={<CircleStatsSkeleton />}>
                        <CircleStats />
                    </Suspense>
                </div>
                <div className='mb-16'>
                    <CircleOutline text={outlineText} />
                </div>
                <AboutSections />
                {/* 創設者 → 歴代代表 の順。創設者の節を厚く保ち、
                    このページが「迫田周大」のページであることをぶらさない */}
                <div className='mt-16'>
                    <Founder />
                </div>
                <div className='mt-16'>
                    <Representatives />
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
