import { FC } from 'react'

import { CircleOutline } from './CircleOutline/CircleOutline'
import { Origin } from './Origin/Origin'
import { Policy } from './Policy/Policy'
import { Accordion } from '../../common/Accordion/Accordion'

export interface AboutAccordionProps {}

export const AboutAccordion: FC<AboutAccordionProps> = ({ ...props }) => {
    return (
        <div>
            <Accordion
                items={[
                    {
                        title: 'サークル概要',
                        value: 'outline',
                        content: <CircleOutline />,
                    },
                    {
                        title: '活動方針',
                        value: 'policy',
                        content: <Policy />,
                    },
                    {
                        title: '創立の経緯',
                        value: 'origin',
                        content: <Origin />,
                    },
                ]}
            />
        </div>
    )
}
