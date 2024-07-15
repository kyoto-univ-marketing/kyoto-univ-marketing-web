import { mockActivities } from '@/mocks/activities'

import { ArticleCard } from './ArticleCard'

import type { Meta, StoryObj } from '@storybook/react'

const meta = {
    component: ArticleCard,
    tags: ['autodocs'],
    args: {
        ...mockActivities[0],
    },
} satisfies Meta<typeof ArticleCard>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
