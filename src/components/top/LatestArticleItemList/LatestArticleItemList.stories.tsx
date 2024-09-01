import { LatestArticleItemList } from './LatestArticleItemList'

import type { Meta, StoryObj } from '@storybook/react'

const meta = {
    component: LatestArticleItemList,
    tags: ['autodocs'],
    parameters: {},
    args: {},
} satisfies Meta<typeof LatestArticleItemList>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
