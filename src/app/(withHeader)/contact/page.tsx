import { Metadata } from 'next'

import { ContactPage } from '@/components/ContactPage/ContactPage'

export const metadata: Metadata = {
    title: 'お問い合わせ',
    description: 'お問い合わせページです。ご自由にお問い合わせください。',
}

export default function Page() {
    return (
        <main>
            <ContactPage />
        </main>
    )
}
