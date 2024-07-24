import { OrganizationJsonLD } from '@/components/common/JsonLD/OrganizationJsonLD'
import { TopPage } from '@/components/top/TopPage/TopPage'

export default function Home() {
    return (
        <>
            <main>
                <TopPage />
            </main>
            <OrganizationJsonLD />
        </>
    )
}
