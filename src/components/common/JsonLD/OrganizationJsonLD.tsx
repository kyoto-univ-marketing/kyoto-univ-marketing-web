import { Organization, WithContext } from 'schema-dts'

import { TOP_PAGE_DESCRIPTION } from '@/constants/description'
import profile from '@/constants/profile'
import { getSiteSettings, SiteSettings } from '@/lib/microcms'

import { JsonLD } from './JsonLD'

export const buildOrganizationJson = (siteSettings: SiteSettings) =>
    ({
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: '京大マーケティング研究所',
        url: profile.homepageUrl,
        logo: `${profile.homepageUrl}/logo.png`,
        image: `${profile.homepageUrl}/opengraph-image`,
        email: siteSettings.mail_address,
        sameAs: [siteSettings.x_url, siteSettings.instagram_url],
        description: TOP_PAGE_DESCRIPTION,
        address: [], // TOOD: オフィスができたら住所を追加する
        contactPoint: {
            '@type': 'ContactPoint',
            email: siteSettings.mail_address,
        },
        foundingDate: '2024-03',
    }) as const satisfies WithContext<Organization>

export const OrganizationJsonLD = async () => {
    const siteSettings = await getSiteSettings()
    return <JsonLD id='organization-json-ld' json={buildOrganizationJson(siteSettings)} />
}
