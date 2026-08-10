import { FC, ReactNode, Suspense } from 'react'
import { FaSpinner } from 'react-icons/fa6'

import { Origin } from './Origin/Origin'
import { Policy } from './Policy/Policy'

export interface AboutSectionsProps {}

/**
 * 活動方針・設立の経緯のセクション。
 * 以前はアコーディオンで畳んでいたが、畳むと読まれないため常時展開に変更した。
 */
export const AboutSections: FC<AboutSectionsProps> = ({ ...props }) => {
    return (
        <div className='space-y-16'>
            <section>
                <h2 className='border-b px-4 pb-4 text-heading'>京大マーケティング研究所で得られるもの</h2>
                <p className='px-4 pt-6 text-gray-700'>
                    大学入学までの熱量を「最高到達点」にせず「通過点」にするために、
                    私たちは学生時代にもうひとつの原体験——「セカンド原体験」をつくることを目指しています。
                    その活動を通じて部員が得るものを、三つの言葉で表しています。
                </p>
                <div className='py-8'>
                    <AboutSuspense>
                        <Policy />
                    </AboutSuspense>
                </div>
            </section>
            <section>
                <h2 className='border-b px-4 pb-4 text-heading'>設立の経緯</h2>
                <div className='py-8'>
                    <AboutSuspense>
                        <Origin />
                    </AboutSuspense>
                </div>
            </section>
        </div>
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
