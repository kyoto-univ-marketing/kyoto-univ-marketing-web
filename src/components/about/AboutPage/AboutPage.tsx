import { FC } from 'react'

import { BreadCrumb } from '@/components/common/BreadCrumb/BreadCrumb'
import { pageLinkObject } from '@/constants/pageLinks'

import { AboutAccordion } from '../AboutAccordion/AboutAccordion'

export interface AboutPageProps {}

export const AboutPage: FC<AboutPageProps> = ({ ...props }) => {
    return (
        <>
            <BreadCrumb
                items={[
                    { href: pageLinkObject.TOP.href, label: pageLinkObject.TOP.textEng },
                    { label: pageLinkObject.ABOUT.text },
                ]}
            />
            <h1 className='my-12 px-12 text-title'>京大マーケティング研究所について</h1>
            <div className='mb-12 px-6'>
                <AboutAccordion />
            </div>
        </>
    )
}
