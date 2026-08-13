import { FC, Suspense } from 'react'
import { FaSpinner } from 'react-icons/fa6'

import { client } from '@/api/client'
import { BreadCrumb } from '@/components/common/BreadCrumb/BreadCrumb'
import { MakeHouseBand } from '@/components/common/MakeHouseBand/MakeHouseBand'
import { NextLink } from '@/components/common/NextLink/NextLink'
import { PageTitle } from '@/components/common/PageTitle/PageTitle'
import { Button } from '@/components/ui/button'
import { pageLinkObject } from '@/constants/pageLinks'
import { isArchivedProject, projectTagList, stripArchivedMarker } from '@/constants/project'

import { ProjectList } from '../ProjectList/ProjectList'
import { RegularActivities } from '../RegularActivities/RegularActivities'

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
            <PageTitle band en='Activities'>活動内容</PageTitle>
            <div className='section-stack pb-24'>
                <div className='mx-auto w-full max-w-(--breakpoint-lg) px-6 md:px-8'>
                    <RegularActivities />
                </div>

                <MakeHouseBand />

                <div className='mx-auto w-full max-w-(--breakpoint-lg) px-6 md:px-8'>
                    <PageTitle asChild en='Project'>
                        <h2>プロジェクト</h2>
                    </PageTitle>
                    <p className='mx-auto mb-16 max-w-(--breakpoint-sm)'>{projectDescription}</p>
                    <div className='space-y-16'>
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
                </div>
            </div>
        </>
    )
}

const Projects = async () => {
    const allProjects = (await client.GET('/api/project/')).data ?? []
    const activeProjects = allProjects.filter((pr) => !isArchivedProject(pr.name))
    const archivedProjects = allProjects
        .filter((pr) => isArchivedProject(pr.name))
        .map((pr) => ({ ...pr, name: stripArchivedMarker(pr.name) }))
    return (
        <>
            {projectTagList.map((tag) => (
                <div className='space-y-12' key={tag}>
                    <ProjectList heading={tag} projects={activeProjects.filter((pr) => pr.tag === tag)} />
                    {/* 問い合わせ導線は共同プロジェクトの直後に置く（他のタグには当てはまらないため） */}
                    {tag === '共同プロジェクト' && activeProjects.some((pr) => pr.tag === tag) && (
                        <Button
                            asChild
                            className='mx-auto flex h-fit w-fit max-w-[75%] flex-wrap items-center justify-center text-lg'
                        >
                            <NextLink href='/contact'>
                                <span className='inline-block'>共同プロジェクトに関する</span>
                                <span className='inline-block'>お問い合わせはこちら</span>
                            </NextLink>
                        </Button>
                    )}
                </div>
            ))}
            <ProjectList
                description='過去に実施したプロジェクトです。'
                heading='アーカイブ'
                projects={archivedProjects}
            />
        </>
    )
}
