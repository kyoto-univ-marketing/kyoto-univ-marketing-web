import type { Meta, StoryObj } from '@storybook/react'
import { LatestArticleItemListPresenter } from './LatestArticleItemList'

// 本体はサーバー側で microCMS を読むため、Storybook では見た目の部分だけを表示する
const meta = {
    component: LatestArticleItemListPresenter,
    tags: ['autodocs'],
    parameters: {},
    args: {
        articleList: [
            { id: 'sample-1', title: 'お知らせのサンプル（1件目）', date: '2026-11-01T00:00:00.000Z' },
            { id: 'sample-2', title: 'お知らせのサンプル（2件目）', date: '2026-10-15T00:00:00.000Z' },
        ],
    },
} satisfies Meta<typeof LatestArticleItemListPresenter>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
