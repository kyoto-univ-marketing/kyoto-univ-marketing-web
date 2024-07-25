'use client'

import { Metadata } from 'next'

import { ErrorPage } from '@/components/error/ErrorPage/ErrorPage'

export const metadata: Metadata = {
    title: 'エラー',
}

export default function Page() {
    return <ErrorPage />
}
