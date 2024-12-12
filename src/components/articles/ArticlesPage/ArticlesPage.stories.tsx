import { ArticlesPage } from './ArticlesPage'

import type { Meta, StoryObj } from '@storybook/react'

const meta = {
    component: ArticlesPage,
    tags: ['autodocs'],
    parameters: {},
    args: {
        searchParams: Promise.resolve({ page: '1', tag: undefined }),
        activityDescription: '活動内容の説明が入る場所\n活動内容の説明が入る場所',
    },
} satisfies Meta<typeof ArticlesPage>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
