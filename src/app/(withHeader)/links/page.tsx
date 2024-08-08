import { Metadata } from 'next'

import { LinksPage } from '@/components/links/LinksPage/LinksPage'
import { pageLinkObject } from '@/constants/pageLinks'

export const metadata: Metadata = {
    title: pageLinkObject.LINKS.text,
    description: '当サークルの公式SNSや、プロジェクト関連のリンク集です。',
}

export default function Page() {
    return (
        <>
            <LinksPage />
        </>
    )
}
