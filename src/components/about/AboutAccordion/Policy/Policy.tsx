import { FC } from 'react'

import { PolicyItem } from './PolicyItem'
import policyList from './policyList'

export interface PolicyProps {}

export const Policy: FC<PolicyProps> = ({ ...props }) => {
    return (
        <div className='space-y-16 p-4'>
            {policyList.map((policy, i) => (
                <PolicyItem key={i} reverse={i % 2 === 1} {...policy} />
            ))}
        </div>
    )
}
