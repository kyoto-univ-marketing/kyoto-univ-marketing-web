import { Metadata } from 'next'

import { ContactSuccessPage } from '@/components/contact/ContactSuccessPage/ContactSuccessPage'

export const metadata: Metadata = {
    title: 'お問い合わせ完了',
    description: 'お問い合わせ完了ページです。',
    // フォームを送った人だけが見る画面。検索結果に並んでも意味がないので載せない
    robots: { index: false, follow: true },
}

export default function Page() {
    return (
        <main>
            <ContactSuccessPage />
        </main>
    )
}
