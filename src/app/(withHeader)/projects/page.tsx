import { Metadata } from 'next'

import { client } from '@/api/client'
import { ProjectPage } from '@/components/projects/ProjectPage/ProjectPage'

const getDescription = (async () => {
    'use cache'
    const { data } = await client.GET('/api/text/{id}/', { params: { path: { id: 'project_description' } } })
    const projectDescription = data?.text ?? ''
    if (!projectDescription) {
        console.error("Couldn't get project description text")
    }
    return projectDescription
})

export const generateMetadata = async (): Promise<Metadata> => ({
    title: 'プロジェクト',
    description: await getDescription(),
})

export default async function Page() {
    const description = await getDescription()
    return (
        <>
            <ProjectPage projectDescription={description} />
        </>
    )
}
