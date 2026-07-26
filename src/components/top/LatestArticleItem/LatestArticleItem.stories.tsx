import type { Meta, StoryObj } from '@storybook/react'
import { mockActivities } from '@/mocks/activities'
import { LatestArticleItem } from './LatestArticleItem'

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
