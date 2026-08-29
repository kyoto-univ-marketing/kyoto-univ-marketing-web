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
    /*
     * 終了したものを別の節にまとめない。分類ごとの中で、進行中を先に、実績を後ろに並べる。
     * 分けると「この分野で今なにをしていて、これまで何をしてきたか」が
     * 二か所に散り、企業の方が実績を探しに行かないと見つけられなくなるため。
     *
     * 終了の目印はプロジェクト名の【終了】。管理画面で名前に付け外しするだけで切り替わる
     * （バックエンドに項目を足せないので、この方式にしている）。
     */
    const projects = allProjects
        .map((pr) => ({ ...pr, name: stripArchivedMarker(pr.name), archived: isArchivedProject(pr.name) }))
        .sort((a, b) => Number(a.archived) - Number(b.archived))
    return (
        <>
            {projectTagList.map((tag) => (
                <div className='space-y-12' key={tag}>
                    <ProjectList heading={tag} projects={projects.filter((pr) => pr.tag === tag)} />
                    {/* 問い合わせ導線は共同プロジェクトの直後に置く（他のタグには当てはまらないため） */}
                    {tag === '共同プロジェクト' && projects.some((pr) => pr.tag === tag && !pr.archived) && (
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
        </>
    )
}
