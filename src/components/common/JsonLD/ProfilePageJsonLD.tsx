import { ProfilePage, WithContext } from 'schema-dts'

import { JsonLD } from './JsonLD'
import { organizationJson } from './OrganizationJsonLD'

const json = {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    mainEntity: organizationJson,
} as const satisfies WithContext<ProfilePage>

export const ProfilePageJsonLD = () => <JsonLD id='profile-page-json-ld' json={json} />
