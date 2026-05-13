import { getPolicies } from '@/lib/microcms'

import { PolicyItem } from './PolicyItem'

export interface PolicyProps {}

export const Policy = async ({ ...props }: PolicyProps) => {
    const policies = await getPolicies()
    return (
        <div className='space-y-16 p-4'>
            {policies.map((policy, i) => (
                <PolicyItem
                    key={policy.id}
                    reverse={i % 2 === 1}
                    stamp_image={policy.stamp_image}
                    stamp_left={policy.stamp_left}
                    stamp_top={policy.stamp_top}
                    text={policy.text}
                />
            ))}
        </div>
    )
}
