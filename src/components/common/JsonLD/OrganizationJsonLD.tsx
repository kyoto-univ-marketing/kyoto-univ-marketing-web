import { Organization, WithContext } from 'schema-dts'

import { buildTopPageDescription } from '@/constants/description'
import profile from '@/constants/profile'
import { getMemberCount } from '@/lib/api'
import { getSiteSettings, SiteSettings } from '@/lib/microcms'

import { JsonLD } from './JsonLD'

export const buildOrganizationJson = (siteSettings: SiteSettings, memberCount?: number) =>
    ({
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: '京大マーケティング研究所',
        url: profile.homepageUrl,
        logo: `${profile.homepageUrl}/logo.png`,
        image: `${profile.homepageUrl}/opengraph-image`,
        email: siteSettings.mail_address,
        sameAs: [siteSettings.instagram_url],
        description: buildTopPageDescription(memberCount),
        address: {
            '@type': 'PostalAddress',
            addressCountry: 'JP',
            addressRegion: '京都府',
            addressLocality: '京都市左京区',
            streetAddress: '田中大堰町13',
        },
        contactPoint: {
            '@type': 'ContactPoint',
            email: siteSettings.mail_address,
        },
        foundingDate: '2024-03',
    }) as const satisfies WithContext<Organization>

export const OrganizationJsonLD = async () => {
    const [siteSettings, memberCount] = await Promise.all([getSiteSettings(), getMemberCount()])
    return <JsonLD id='organization-json-ld' json={buildOrganizationJson(siteSettings, memberCount)} />
}
