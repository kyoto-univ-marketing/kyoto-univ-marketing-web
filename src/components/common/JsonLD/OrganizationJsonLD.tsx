import { Organization, WithContext } from 'schema-dts'

import { aboutFounderPage } from '@/constants/aboutPages'
import { buildTopPageDescription } from '@/constants/description'
import profile from '@/constants/profile'
import { getMemberCount } from '@/lib/api'
import { getSiteSettings, SiteSettings } from '@/lib/microcms'

import { JsonLD } from './JsonLD'
import { FOUNDER_ID } from './PersonJsonLD'

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
        /*
         * 団体から発起人を指す。
         * 「京大マーケティング研究所の発起人は誰か」「迫田周大は何者か」を
         * 一つのつながりとして読ませるための線で、
         * 詳細は /about/founder 側の Person（同じ @id）に書いてある。
         */
        founder: {
            '@type': 'Person',
            '@id': FOUNDER_ID,
            name: '迫田周大',
            url: `${profile.homepageUrl}${aboutFounderPage.href}`,
        },
    }) as const satisfies WithContext<Organization>

export const OrganizationJsonLD = async () => {
    const [siteSettings, memberCount] = await Promise.all([getSiteSettings(), getMemberCount()])
    return <JsonLD id='organization-json-ld' json={buildOrganizationJson(siteSettings, memberCount)} />
}
