import { Metadata } from 'next'

import { ProjectPage } from '@/components/projects/ProjectPage/ProjectPage'

export const metadata: Metadata = {
    title: 'プロジェクト',
}

export default function Page() {
    return (
        <>
            <ProjectPage />
        </>
    )
}
