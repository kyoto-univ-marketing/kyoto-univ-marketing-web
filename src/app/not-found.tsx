import { Metadata } from 'next'

import { NotFoundPage } from '@/components/not-found/NotFoundPage/NotFoundPage'

/**
 * どのページにも当てはまらないURLの受け皿。
 *
 * これがないと、Next.js の素の404（黒い文字で 404 とだけ出るもの）が表示される。
 * (withHeader) 側の not-found はそのグループの中でしか効かないため、
 * ルートにも同じものを置いておく必要がある。
 */
export const metadata: Metadata = {
    title: 'ページが見つかりません',
}

export default function NotFound() {
    return (
        <main>
            <NotFoundPage />
        </main>
    )
}
