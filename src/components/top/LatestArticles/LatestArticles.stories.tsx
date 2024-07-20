import { LatestArticlesPresenter } from './LatestArticlesPresenter'

import type { Meta, StoryObj } from '@storybook/react'

const meta = {
    component: LatestArticlesPresenter,
    tags: ['autodocs'],
    args: {
        articleList: [
            {
                title: '記事タイトル1',
                publishedAt: '2024/01/01',
                id: 'sample1',
            },
            {
                title: '記事タイトル2',
                publishedAt: '2024/01/02',
                id: 'sample2',
            },
            {
                title: '記事タイトル3記事タイトル3記事タイトル3',
                publishedAt: '2024/01/03',
                id: 'sample3',
            },
        ],
    },
} satisfies Meta<typeof LatestArticlesPresenter>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
