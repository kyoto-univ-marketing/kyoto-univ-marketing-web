import { FC, ReactNode, Suspense } from 'react'
import { FaSpinner } from 'react-icons/fa6'

import { SectionHeading } from '@/components/common/SectionHeading/SectionHeading'

import { Policy } from './Policy/Policy'

export interface AboutSectionsProps {}

/**
 * 「京大マーケティング研究所で得られるもの」の節。
 * 以前はアコーディオンで畳んでいたが、畳むと読まれないため常時展開に変更した。
 */
export const AboutSections: FC<AboutSectionsProps> = ({ ...props }) => {
    return (
        <section>
            <SectionHeading en='What You Get'>京大マーケティング研究所で得られるもの</SectionHeading>
            <p className='text-gray-700'>
                大学入学までの熱量を「最高到達点」にせず「通過点」にするために、
                私たちは学生時代にもうひとつの原体験——「セカンド原体験」をつくることを目指しています。
                その活動を通じて部員が得るものを、三つの言葉で表しています。
            </p>
            <div className='pt-8'>
                <AboutSuspense>
                    <Policy />
                </AboutSuspense>
            </div>
        </section>
    )
}

const AboutSuspense = ({ children }: { children: ReactNode }) => {
    return (
        <Suspense
            fallback={
                <div className='flex h-24 w-full items-center justify-center'>
                    <FaSpinner className='h-8 w-8 animate-spin' />
                </div>
            }
        >
            {children}
        </Suspense>
    )
}
