import { FC } from 'react'

import { client } from '@/api/client'
import { NextLink } from '@/components/common/NextLink/NextLink'
import { PageTitle } from '@/components/common/PageTitle/PageTitle'
import { Button } from '@/components/ui/button'

import { ProjectList } from '../ProjectList/ProjectList'

export interface ProjectPageProps {}

export const ProjectPage: FC<ProjectPageProps> = async ({ ...props }) => {
    const { data } = await client.GET('/api/text/{id}/', { params: { path: { id: 'project_description' } } })
    const projectDescription = data?.text ?? ''
    if (!projectDescription) {
        console.error("Couldn't get project description text")
    }
    const projects = (await client.GET('/api/project/')).data ?? []
    return (
        <>
            <PageTitle>プロジェクト</PageTitle>
            <p className='mb-16 px-12'>{projectDescription}</p>
            <div className='mb-16 space-y-16'>
                <div className='bg-backgroundSecondary pb-12'>
                    <ProjectList
                        tag='マーケティング支援'
                        projects={projects.filter((pr) => pr.tag === 'マーケティング支援')}
                    />
                </div>
                <div className='pb-12'>
                    <ProjectList
                        tag='共同プロジェクト'
                        projects={projects.filter((pr) => pr.tag === '共同プロジェクト')}
                    />
                    <Button
                        asChild
                        className='mx-auto mt-12 flex h-fit w-fit max-w-[75%] flex-wrap items-center justify-center text-lg'
                    >
                        <NextLink href='/contact'>
                            <span className='inline-block'>共同プロジェクトに関する</span>
                            <span className='inline-block'>お問い合わせはこちら</span>
                        </NextLink>
                    </Button>
                </div>
                <div className='bg-backgroundSecondary pb-12'>
                    <ProjectList
                        tag='オリジナルプロジェクト'
                        projects={projects.filter((pr) => pr.tag === 'オリジナルプロジェクト')}
                    />
                </div>
            </div>
        </>
    )
}
