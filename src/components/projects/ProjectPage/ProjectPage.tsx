import { FC } from 'react'

import { NextLink } from '@/components/common/NextLink/NextLink'
import { PageTitle } from '@/components/common/PageTitle/PageTitle'
import { Button } from '@/components/ui/button'
import { getAllProjects } from '@/lib/microcms'

import { ProjectList } from '../ProjectList/ProjectList'

export interface ProjectPageProps {}

export const ProjectPage: FC<ProjectPageProps> = async ({ ...props }) => {
    const projects = await getAllProjects()
    return (
        <>
            <PageTitle>プロジェクト</PageTitle>
            <p className='mb-16 px-12'>
                {
                    '私たちは、マーケティングの「実践」に重きを置いています。サークル内で進めているプロジェクトに加え、外部と連携したマーケティング支援や共同プロジェクトの事例をいくつかご紹介いたします。'
                }
            </p>
            <div className='mb-16 space-y-16'>
                <div className='bg-backgroundSecondary pb-12'>
                    <ProjectList
                        tag='マーケティング支援'
                        projects={projects.contents.filter((pr) => pr.tag[0] === 'マーケティング支援')}
                    />
                </div>
                <div className='pb-12'>
                    <ProjectList
                        tag='共同プロジェクト'
                        projects={projects.contents.filter((pr) => pr.tag[0] === '共同プロジェクト')}
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
                        projects={projects.contents.filter((pr) => pr.tag[0] === 'オリジナルプロジェクト')}
                    />
                </div>
            </div>
        </>
    )
}