import { ProfilePage, WithContext } from 'schema-dts'

import { getMemberCount } from '@/lib/api'
import { getSiteSettings } from '@/lib/microcms'

import { JsonLD } from './JsonLD'
import { buildOrganizationJson } from './OrganizationJsonLD'

export const ProfilePageJsonLD = async () => {
    const [siteSettings, memberCount] = await Promise.all([getSiteSettings(), getMemberCount()])
    const json = {
        '@context': 'https://schema.org',
        '@type': 'ProfilePage',
        mainEntity: buildOrganizationJson(siteSettings, memberCount),
    } as const satisfies WithContext<ProfilePage>
    return <JsonLD id='profile-page-json-ld' json={json} />
}
