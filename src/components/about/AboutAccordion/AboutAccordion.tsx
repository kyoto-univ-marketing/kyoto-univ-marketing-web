import { FC } from 'react'

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
                items={[
                    {
                        title: <h2 className={titleClassName}>サークル概要</h2>,
                        value: 'outline',
                        content: <CircleOutline />,
                    },
                    {
                        title: <h2 className={titleClassName}>活動方針</h2>,
                        value: 'policy',
                        content: <Policy />,
                    },
                    {
                        title: <h2 className={titleClassName}>創立の経緯</h2>,
                        value: 'origin',
                        content: <Origin />,
                    },
                ]}
            />
        </div>
    )
}
