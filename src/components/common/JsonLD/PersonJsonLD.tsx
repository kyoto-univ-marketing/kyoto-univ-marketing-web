import { Person, WithContext } from 'schema-dts'

import { aboutFounderPage } from '@/constants/aboutPages'
import profile from '@/constants/profile'

import { JsonLD } from './JsonLD'

/**
 * 創設者の情報。/about/founder を本人の正規のURLとして示す。
 * ProfilePage からも参照するので @context を持たない形で切り出してある。
 */
export const founderPersonJson = {
    '@type': 'Person',
    name: '迫田周大',
    alternateName: ['さこだしゅうた', 'Shuta Sakoda'],
    jobTitle: '創設者・初代代表',
    url: `${profile.homepageUrl}${aboutFounderPage.href}`,
    worksFor: {
        '@type': 'Organization',
        name: '京大マーケティング研究所',
        url: profile.homepageUrl,
    },
    alumniOf: {
        '@type': 'EducationalOrganization',
        name: '京都大学',
    },
    sameAs: [
        `${profile.homepageUrl}${aboutFounderPage.href}`,
        'https://twitter.com/ku__marketing/',
        'https://www.instagram.com/kyotouniv_marketing/',
    ],
} as const satisfies Person

const personJson = {
    '@context': 'https://schema.org',
    ...founderPersonJson,
} as const satisfies WithContext<Person>

export const PersonJsonLD = () => <JsonLD id='person-json-ld' json={personJson} />
