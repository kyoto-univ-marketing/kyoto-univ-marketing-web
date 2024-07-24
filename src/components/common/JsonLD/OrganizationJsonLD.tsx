import { Organization, WithContext } from 'schema-dts'

import profile from '@/constants/profile'

import { JsonLD } from './JsonLD'

const json: WithContext<Organization> = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: '京大マーケティング研究所',
    url: profile.homepageUrl,
    logo: `${profile.homepageUrl}/logo.png`,
    email: profile.mailAddress,
    sameAs: [profile.xUrl, profile.instagramUrl],
}

export const OrganizationJsonLD = () => {
    return <JsonLD id='organization-json-ld' json={json} />
}
