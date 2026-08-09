import { getPolicies } from '@/lib/microcms'

import { PolicyItem } from './PolicyItem'

export interface PolicyProps {}

export const Policy = async ({ ...props }: PolicyProps) => {
    const policies = await getPolicies()
    return (
        <div className='space-y-10 px-2'>
            {policies.map((policy) => (
                <PolicyItem
                    key={policy.id}
                    subtitle={policy.subtitle}
                    text={policy.text}
                    title={policy.title}
                />
            ))}
        </div>
    )
}
