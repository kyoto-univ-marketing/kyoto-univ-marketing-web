import { Metadata } from 'next'

import { OrganizationJsonLD } from '@/components/common/JsonLD/OrganizationJsonLD'
import { TopPage } from '@/components/top/TopPage/TopPage'
import { TOP_PAGE_DESCRIPTION } from '@/constants/description'
import { Suspense } from 'react'
import { FaSpinner } from 'react-icons/fa6'

export const metadata: Metadata = {
    description: TOP_PAGE_DESCRIPTION,
}

export default function Home() {
    return (
        <>
            <main>
                <Suspense
                    fallback={
                        <div className='grid h-screen w-full items-center justify-center'>
                            <div className='flex h-24 w-full items-center justify-center p-8'>
                                <FaSpinner className='h-8 w-8 animate-spin' />
                            </div>
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
