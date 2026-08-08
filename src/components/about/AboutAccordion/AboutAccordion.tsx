import { FC, ReactNode, Suspense } from 'react'
import { FaSpinner } from 'react-icons/fa6'

import { Origin } from './Origin/Origin'
import { Policy } from './Policy/Policy'

export interface AboutSectionsProps {}

/**
 * 活動方針・創立の経緯のセクション。
 * 以前はアコーディオンで畳んでいたが、畳むと読まれないため常時展開に変更した。
 */
export const AboutSections: FC<AboutSectionsProps> = ({ ...props }) => {
    return (
        <div className='space-y-16'>
            <section>
                <h2 className='border-b px-4 pb-4 text-heading'>活動方針</h2>
                <div className='py-8'>
                    <AboutSuspense>
                        <Policy />
                    </AboutSuspense>
                </div>
            </section>
            <section>
                <h2 className='border-b px-4 pb-4 text-heading'>創立の経緯</h2>
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
