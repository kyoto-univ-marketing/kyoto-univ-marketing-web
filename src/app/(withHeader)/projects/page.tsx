import { Metadata } from 'next'

import { ProjectPage } from '@/components/projects/ProjectPage/ProjectPage'
import { getTextById } from '@/lib/api'

export const generateMetadata = async (): Promise<Metadata> => ({
    title: 'プロジェクト',
    description: await getTextById('project_description'),
})

export default async function Page() {
    const description = await getTextById('project_description')
    return <ProjectPage projectDescription={description} />
}
