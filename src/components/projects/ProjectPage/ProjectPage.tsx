import { FC, Suspense } from 'react'
import { FaSpinner } from 'react-icons/fa6'

import { client } from '@/api/client'
import { BreadCrumb } from '@/components/common/BreadCrumb/BreadCrumb'
import { NextLink } from '@/components/common/NextLink/NextLink'
import { PageTitle } from '@/components/common/PageTitle/PageTitle'
import { Button } from '@/components/ui/button'
import { pageLinkObject } from '@/constants/pageLinks'

import { ProjectList } from '../ProjectList/ProjectList'

export interface ProjectPageProps {
    projectDescription: string
}

export const ProjectPage: FC<ProjectPageProps> = async ({ projectDescription, ...props }) => {
    return (
        <>
            <BreadCrumb
                items={[
                    { label: pageLinkObject.TOP.textEng, href: pageLinkObject.TOP.href },
                    { label: pageLinkObject.PROJECT.text, href: pageLinkObject.PROJECT.href },
                ]}
            />
            <PageTitle>プロジェクト</PageTitle>
            <p className='mb-16 px-12'>{projectDescription}</p>
            <div className='mb-16 space-y-16'>
                <Suspense
                    fallback={
                        <div className='flex h-24 w-full items-center justify-center p-8'>
                            <FaSpinner className='h-8 w-8 animate-spin' />
                        </div>
                    }
                >
                    <Projects />
                </Suspense>
            </div>
        </>
    )
}

const Projects = async () => {
    const projects = (await client.GET('/api/project/')).data ?? []
    return (
        <>
            <div className='bg-backgroundSecondary pb-12'>
                <ProjectList
                    projects={projects.filter((pr) => pr.tag === 'マーケティング支援')}
                    tag='マーケティング支援'
                />
            </div>
            <div className='pb-12'>
                <ProjectList projects={projects.filter((pr) => pr.tag === '共同プロジェクト')} tag='共同プロジェクト' />
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
                    projects={projects.filter((pr) => pr.tag === 'オリジナルプロジェクト')}
                    tag='オリジナルプロジェクト'
                />
            </div>
        </>
    )
}
