import { Metadata } from 'next'

import { ContactSuccessPage } from '@/components/ContactSuccessPage/ContactSuccessPage'

export const metadata: Metadata = {
    title: 'お問い合わせ完了',
    description: 'お問い合わせ完了ページです。',
}

export default function Page() {
    return (
        <main>
            <ContactSuccessPage />
        </main>
    )
}
