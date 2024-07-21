import Image from 'next/image'
import { FC } from 'react'

import { Project } from '@/lib/microcms'
import { cn } from '@/lib/utils'

export interface ProjectListItemProps extends Pick<Project, 'name' | 'thumbnail' | 'description'> {
    reverse?: boolean
}

export const ProjectListItem: FC<ProjectListItemProps> = ({ name, thumbnail, description, reverse, ...props }) => {
    return (
        <div>
            <h3 className='mb-6 text-heading'>{name}</h3>
            <div className={cn('flex', reverse && 'flex-row-reverse')}>
                <Image
                    className='aspect-video w-1/2 object-cover'
                    src={thumbnail.url}
                    width={thumbnail.width}
                    height={thumbnail.height}
                    alt={name}
                />
                <p className='flex-1 px-6 py-2'>
                    {description.split(/(\n)/).map((line, i) => (line === '\n' ? <br key={i} /> : line))}
                </p>
            </div>
        </div>
    )
}
