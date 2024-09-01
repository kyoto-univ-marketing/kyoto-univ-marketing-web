import { LatestArticlesSkeleton } from './LatestArticlesSkeleton'

import type { Meta, StoryObj } from '@storybook/react'

const meta = {
    component: LatestArticlesSkeleton,
    tags: ['autodocs'],
    parameters: {},
    args: {},
} satisfies Meta<typeof LatestArticlesSkeleton>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
