import { Metadata } from 'next'

import { MembersPage } from '@/components/about/MembersPage/MembersPage'
import { MEMBERS_PAGE_DESCRIPTION } from '@/constants/description'

export const metadata: Metadata = {
    title: '歴代代表',
    description: MEMBERS_PAGE_DESCRIPTION,
}

export default function Page() {
    return (
        <main>
            <MembersPage />
        </main>
    )
}
