import { ActivityArticleList } from './ActivityArticleList'

import type { Meta, StoryObj } from '@storybook/react'

const meta = {
    title: 'ActivityArticleList',
    component: ActivityArticleList,
    tags: ['autodocs'],
    parameters: {
        layout: 'padded',
    },
} satisfies Meta<typeof ActivityArticleList>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
