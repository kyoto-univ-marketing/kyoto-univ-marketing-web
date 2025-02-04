import pick from '@/lib/pick'
import { mockActivities } from '@/mocks/activities'

import Logo from '../../../../public/logo.png'
import { ArticleCard } from './ArticleCard'

import type { Meta, StoryObj } from '@storybook/react'

const meta = {
    component: ArticleCard,
    tags: ['autodocs'],
    args: {
        ...pick(mockActivities[0], 'title', 'id', 'thumbnail', 'publishedAt', 'description', 'tag'),
        thumbnail: {
            url: Logo.src,
        },
    },
    parameters: {
        layout: 'fullscreen',
    },
    render: (props) => (
        <div className='flex h-dvh w-dvw items-center justify-center p-8'>
            <div className='w-full max-w-96'>
                <ArticleCard {...props} />
            </div>
        </div>
    ),
} satisfies Meta<typeof ArticleCard>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
