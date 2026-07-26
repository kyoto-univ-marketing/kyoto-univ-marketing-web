import type { Meta, StoryObj } from '@storybook/react'
import { ArticleCardSkeleton } from './ArticleCardSkeleton'

const meta = {
    component: ArticleCardSkeleton,
    tags: ['autodocs'],
    parameters: {},
    args: {},
} satisfies Meta<typeof ArticleCardSkeleton>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
