import { Metadata } from 'next'

import { NotFoundPage } from '@/components/not-found/NotFoundPage/NotFoundPage'

export const metadata: Metadata = {
    title: 'Not Found',
}

export default function NotFound() {
    return <NotFoundPage />
}
