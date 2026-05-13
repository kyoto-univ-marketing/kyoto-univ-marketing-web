import { ProfilePage, WithContext } from 'schema-dts'

import { getSiteSettings } from '@/lib/microcms'

import { JsonLD } from './JsonLD'
import { buildOrganizationJson } from './OrganizationJsonLD'

export const ProfilePageJsonLD = async () => {
    const siteSettings = await getSiteSettings()
    const json = {
        '@context': 'https://schema.org',
        '@type': 'ProfilePage',
        mainEntity: buildOrganizationJson(siteSettings),
    } as const satisfies WithContext<ProfilePage>
    return <JsonLD id='profile-page-json-ld' json={json} />
}
