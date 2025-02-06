import { FC } from 'react'

import { NextLink } from '@/components/common/NextLink/NextLink'
import { PageTitle } from '@/components/common/PageTitle/PageTitle'
import { Button } from '@/components/ui/button'
import { projectTagList } from '@/constants/project'

export interface TopPageProjectProps {}

export const TopPageProject: FC<TopPageProjectProps> = ({ ...props }) => {
    return (
        <div className='flex size-full flex-col'>
            <PageTitle asChild>
                <div className='flex items-center gap-4'>
                    <h2>プロジェクト</h2>
                    <span className='text-primary text-sm'>Project</span>
                </div>
            </PageTitle>
            <ol className='mb-12 list-inside list-[cjk-ideographic] space-y-2 px-16'>
                {projectTagList.map((tag) => (
                    <li className='marker:inline-block marker:pr-4' key={tag}>
                        <NextLink className='pl-6' href={`/projects#${tag}`}>
                            {tag}
                        </NextLink>
                    </li>
                ))}
            </ol>
            <Button asChild className='mx-auto mt-auto flex w-fit items-center justify-center px-12 py-6'>
                <NextLink href='/projects'>プロジェクトの詳細</NextLink>
            </Button>
        </div>
    )
}
