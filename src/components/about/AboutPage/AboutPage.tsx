import { FC, Suspense } from 'react'

import { BreadCrumb } from '@/components/common/BreadCrumb/BreadCrumb'
import { PageTitle } from '@/components/common/PageTitle/PageTitle'
import { pageLinkObject } from '@/constants/pageLinks'

import { AboutSections } from '../AboutAccordion/AboutAccordion'
import { CircleOutline } from '../CircleOutline/CircleOutline'
import { CircleStats, CircleStatsSkeleton } from '../CircleStats/CircleStats'

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
            <PageTitle>京大マーケティング研究所について</PageTitle>
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
            </div>
        </>
    )
}
