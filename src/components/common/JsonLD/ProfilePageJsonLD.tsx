import { ProfilePage, WithContext } from 'schema-dts'

import { JsonLD } from './JsonLD'
import { founderPersonJson } from './PersonJsonLD'

/**
 * 創設者ページが「人物のプロフィールページ」であることを示す。
 * 団体そのものの情報（Organization）はトップページ側に置いてある。
 */
const json = {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    mainEntity: founderPersonJson,
} as const satisfies WithContext<ProfilePage>

export const ProfilePageJsonLD = () => <JsonLD id='profile-page-json-ld' json={json} />
