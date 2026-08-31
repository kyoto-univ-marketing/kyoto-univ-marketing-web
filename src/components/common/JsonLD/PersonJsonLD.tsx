import { Person, WithContext } from 'schema-dts'

import { aboutFounderPage } from '@/constants/aboutPages'
import { FOUNDER_PAGE_DESCRIPTION } from '@/constants/description'
import { founder } from '@/constants/members'
import profile from '@/constants/profile'

import { JsonLD } from './JsonLD'

/**
 * 発起人を指す識別子。
 * 同じページに Person と ProfilePage の二つが出るので、同じ @id を付けて
 * 「同じ人の話をしている」と読ませる。付けないと別人が二人いるように見える。
 * トップページの Organization からも、この識別子で発起人を指している。
 */
export const FOUNDER_ID = `${profile.homepageUrl}${aboutFounderPage.href}#person`

/**
 * 発起人の情報。/about/founder を本人の正規のURLとして示す。
 * ProfilePage からも参照するので @context を持たない形で切り出してある。
 *
 * sameAs は置いていない。あそこは「同じ人物を紹介している、よそのページ」を挙げる欄で、
 * 以前は自分自身のURLと団体のSNSが入っていた。
 * 前者は何も足しておらず、後者は本人と団体を同じものとして読ませる恐れがある。
 * 本人名義の LinkedIn・note・X などができたら、そのときここに足す。
 */
export const founderPersonJson = {
    '@type': 'Person',
    '@id': FOUNDER_ID,
    name: '迫田周大',
    alternateName: ['さこだしゅうた', 'Shuta Sakoda'],
    jobTitle: '発起人',
    description: FOUNDER_PAGE_DESCRIPTION,
    url: `${profile.homepageUrl}${aboutFounderPage.href}`,
    image: `${profile.homepageUrl}${founder.image.src}`,
    worksFor: {
        '@type': 'Organization',
        name: '京大マーケティング研究所',
        url: profile.homepageUrl,
    },
    alumniOf: {
        '@type': 'EducationalOrganization',
        name: '京都大学',
    },
} as const satisfies Person

const personJson = {
    '@context': 'https://schema.org',
    ...founderPersonJson,
} as const satisfies WithContext<Person>

export const PersonJsonLD = () => <JsonLD id='person-json-ld' json={personJson} />
