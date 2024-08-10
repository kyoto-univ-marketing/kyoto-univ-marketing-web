import { Metadata } from 'next'

import { OrganizationJsonLD } from '@/components/common/JsonLD/OrganizationJsonLD'
import { TopPage } from '@/components/top/TopPage/TopPage'
import { TOP_PAGE_DESCRIPTION } from '@/constants/description'

export const metadata: Metadata = {
    description: TOP_PAGE_DESCRIPTION,
}

export default function Home() {
    return (
        <>
            <main>
                <TopPage />
            </main>
            <OrganizationJsonLD />
        </>
    )
}
