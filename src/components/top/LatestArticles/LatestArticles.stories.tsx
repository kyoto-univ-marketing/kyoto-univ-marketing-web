import { LatestArticlesPresenter } from './LatestArticlesPresenter'

import type { Meta, StoryObj } from '@storybook/react'

const meta = {
    component: LatestArticlesPresenter,
    tags: ['autodocs'],
    args: {
        articleList: [
            {
                title: '記事タイトル1',
                date: '2024/01/01',
                slug: 'sample1',
            },
            {
                title: '記事タイトル2',
                date: '2024/01/02',
                slug: 'sample2',
            },
            {
                title: '記事タイトル3記事タイトル3記事タイトル3',
                date: '2024/01/03',
                slug: 'sample3',
            },
        ],
    },
} satisfies Meta<typeof LatestArticlesPresenter>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
