import { FC, Suspense } from 'react'

import { BreadCrumb } from '@/components/common/BreadCrumb/BreadCrumb'
import { PageTitle } from '@/components/common/PageTitle/PageTitle'
import { pageLinkObject } from '@/constants/pageLinks'

import { AboutAccordion } from '../AboutAccordion/AboutAccordion'
import { CircleOutline, CircleOutlineSkeleton } from '../CircleOutline/CircleOutline'
import { CircleStats, CircleStatsSkeleton } from '../CircleStats/CircleStats'

export interface AboutPageProps {}

export const AboutPage: FC<AboutPageProps> = ({ ...props }) => {
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
                    <Suspense fallback={<CircleOutlineSkeleton />}>
                        <CircleOutline />
                    </Suspense>
                </div>
                <AboutAccordion />
            </div>
        </>
    )
}
