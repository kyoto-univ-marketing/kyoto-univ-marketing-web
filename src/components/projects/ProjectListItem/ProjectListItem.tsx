import Image from 'next/image'
import { FC } from 'react'

import { components } from '@/api/schema'
import { cn } from '@/lib/utils'

export interface ProjectListItemProps
    extends Pick<components['schemas']['Project'], 'name' | 'description' | 'thumbnail'> {
    reverse?: boolean
}

export const ProjectListItem: FC<ProjectListItemProps> = ({ name, thumbnail, description, reverse, ...props }) => {
    return (
        <div>
            <h3 className={cn('mb-6 px-12 text-heading', reverse && 'text-right')}>{name}</h3>
            <div className={cn('flex', reverse && 'flex-row-reverse')}>
                <div className='relative aspect-video w-1/2'>
                    <Image sizes='50%' className='object-contain' src={thumbnail} fill alt={`${name}の画像`} />
                </div>
                <p className='flex-1 px-6 py-2'>
                    {description.split(/(\n)/).map((line, i) => (line === '\n' ? <br key={i} /> : line))}
                </p>
            </div>
        </div>
    )
}
