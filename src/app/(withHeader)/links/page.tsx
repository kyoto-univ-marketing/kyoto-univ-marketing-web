import { Metadata } from 'next'

import { LinksPage } from '@/components/links/LinksPage/LinksPage'
import { pageLinkObject } from '@/constants/pageLinks'

export const metadata: Metadata = {
    title: pageLinkObject.LINKS.text,
}

export default function Page() {
    return (
        <>
            <LinksPage />
        </>
    )
}
