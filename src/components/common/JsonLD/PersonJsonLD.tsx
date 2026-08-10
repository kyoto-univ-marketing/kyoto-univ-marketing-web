import { Person, WithContext } from 'schema-dts'

import profile from '@/constants/profile'

import { JsonLD } from './JsonLD'

const personJson = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: '迫田周大',
    alternateName: ['さこだしゅうた', 'Shuta Sakoda'],
    jobTitle: '創設者・初代代表',
    url: `${profile.homepageUrl}/about`,
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
        `${profile.homepageUrl}/about`,
        'https://twitter.com/ku__marketing/',
        'https://www.instagram.com/kyotouniv_marketing/',
    ],
} as const satisfies WithContext<Person>

export const PersonJsonLD = () => <JsonLD id='person-json-ld' json={personJson} />
