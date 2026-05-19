import { Loader } from 'lucide-react'
import { Metadata } from 'next'
import { Suspense } from 'react'

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
                <Suspense
                    fallback={
                        <div className='grid h-screen w-full place-items-center'>
                            <Loader className='h-8 w-8 animate-spin' />
                        </div>
                    }
                >
                    <TopPage />
                </Suspense>
            </main>
            <OrganizationJsonLD />
        </>
    )
}
