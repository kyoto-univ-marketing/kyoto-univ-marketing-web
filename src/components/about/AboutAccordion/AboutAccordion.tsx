import { FC, ReactNode, Suspense } from 'react'
import { FaSpinner } from 'react-icons/fa6'

import { CircleOutline } from './CircleOutline/CircleOutline'
import { Origin } from './Origin/Origin'
import { Policy } from './Policy/Policy'
import { Accordion } from '../../common/Accordion/Accordion'

export interface AboutAccordionProps {}

export const AboutAccordion: FC<AboutAccordionProps> = ({ ...props }) => {
    const titleClassName = 'text-heading px-4'
    return (
        <div>
            <Accordion
                contentClassName='pb-16'
                items={[
                    {
                        title: <h2 className={titleClassName}>サークル概要</h2>,
                        value: 'outline',
                        content: (
                            <AboutSuspense>
                                <CircleOutline />
                            </AboutSuspense>
                        ),
                    },
                    {
                        title: <h2 className={titleClassName}>活動方針</h2>,
                        value: 'policy',
                        content: <Policy />,
                    },
                    {
                        title: <h2 className={titleClassName}>創立の経緯</h2>,
                        value: 'origin',
                        content: (
                            <AboutSuspense>
                                <Origin />
                            </AboutSuspense>
                        ),
                    },
                ]}
            />
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
