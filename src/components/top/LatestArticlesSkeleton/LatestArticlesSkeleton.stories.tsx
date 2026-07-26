import type { Meta, StoryObj } from '@storybook/react'
import { LatestArticlesSkeleton } from './LatestArticlesSkeleton'

const meta = {
    component: LatestArticlesSkeleton,
    tags: ['autodocs'],
    parameters: {},
    args: {},
} satisfies Meta<typeof LatestArticlesSkeleton>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
