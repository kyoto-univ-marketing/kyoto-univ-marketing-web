import Script from 'next/script'
import { FC } from 'react'

export interface JsonLDProps {
    id: string
    json: Record<string, unknown>
}

export const JsonLD: FC<JsonLDProps> = ({ id, json, ...props }) => {
    return <Script id={id} type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }} />
}
