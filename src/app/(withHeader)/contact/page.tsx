import { Metadata } from 'next'

import { ContactPage } from '@/components/ContactPage/ContactPage'

export const metadata: Metadata = {
    title: 'お問い合わせ',
}

export default function Page() {
    return (
        <main>
            <ContactPage />
        </main>
    )
}
