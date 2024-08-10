import { Organization, WithContext } from 'schema-dts'

import { TOP_PAGE_DESCRIPTION } from '@/constants/description'
import profile from '@/constants/profile'

import { JsonLD } from './JsonLD'

export const organizationJson = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: '京大マーケティング研究所',
    url: profile.homepageUrl,
    logo: `${profile.homepageUrl}/logo.png`,
    image: `${profile.homepageUrl}/opengraph-image`,
    email: profile.mailAddress,
    sameAs: [profile.xUrl, profile.instagramUrl],
    description: TOP_PAGE_DESCRIPTION,
    address: [], // TOOD: オフィスができたら住所を追加する
    contactPoint: {
        '@type': 'ContactPoint',
        email: profile.mailAddress,
    },
    foundingDate: undefined, // TODO: 創立日を追加する
} as const satisfies WithContext<Organization>

export const OrganizationJsonLD = () => {
    return <JsonLD id='organization-json-ld' json={organizationJson} />
}
