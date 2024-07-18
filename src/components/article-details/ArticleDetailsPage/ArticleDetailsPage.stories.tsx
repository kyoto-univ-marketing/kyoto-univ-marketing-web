import { mockActivities } from '@/mocks/activities'

import { ArticleDetailsPage } from './ArticleDetailsPage'

import type { Meta, StoryObj } from '@storybook/react'

const meta = {
    component: ArticleDetailsPage,
    tags: ['autodocs'],
    parameters: {
        layout: 'padded',
    },
    args: {
        ...mockActivities[0],
    },
} satisfies Meta<typeof ArticleDetailsPage>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
