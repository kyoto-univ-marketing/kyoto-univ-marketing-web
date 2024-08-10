import { Metadata } from 'next'

import { AboutPage } from '@/components/about/AboutPage/AboutPage'
import { ProfilePageJsonLD } from '@/components/common/JsonLD/ProfilePageJsonLD'
import { ABOUT_PAGE_DESCRIPTION } from '@/constants/description'
import { pageLinkObject } from '@/constants/pageLinks'

export const metadata: Metadata = {
    title: pageLinkObject.ABOUT.text,
    description: ABOUT_PAGE_DESCRIPTION,
}

export default function Page() {
    return (
        <>
            <main>
                <AboutPage />
            </main>
            <ProfilePageJsonLD />
        </>
    )
}
