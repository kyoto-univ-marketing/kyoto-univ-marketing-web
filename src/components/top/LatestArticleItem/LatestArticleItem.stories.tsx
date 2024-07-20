import { mockActivities } from '@/mocks/activities'

import { LatestArticleItem } from './LatestArticleItem'

import type { Meta, StoryObj } from '@storybook/react'

const meta = {
    component: LatestArticleItem,
    tags: ['autodocs'],
    parameters: {},
    args: {
        ...mockActivities[0],
    },
} satisfies Meta<typeof LatestArticleItem>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
