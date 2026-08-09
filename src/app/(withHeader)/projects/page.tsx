import { Metadata } from 'next'

import { ProjectPage } from '@/components/projects/ProjectPage/ProjectPage'
import { getTextById } from '@/lib/api'

export const generateMetadata = async (): Promise<Metadata> => ({
    title: '活動内容',
    description: `京大マーケティング研究所の活動内容です。週3回の勉強会、3つのゼミ、年3回の合宿、メンター制度、そして京町家の拠点「マーケハウス」。実践のプロジェクトもご紹介します。`,
})

export default async function Page() {
    const description = await getTextById('project_description')
    return <ProjectPage projectDescription={description} />
}
