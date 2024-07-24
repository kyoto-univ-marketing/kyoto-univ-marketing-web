import Script from 'next/script'

import type { Thing, WithContext } from 'schema-dts'

export interface JsonLDProps<T extends Thing> {
    id: string
    json: WithContext<T>
}

export const JsonLD = <T extends Thing>({ id, json, ...props }: JsonLDProps<T>) => {
    return <Script id={id} type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }} />
}
