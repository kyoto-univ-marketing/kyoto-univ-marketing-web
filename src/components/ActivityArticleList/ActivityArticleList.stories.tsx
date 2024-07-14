import { mockActivities } from '@/mocks/activities'

import { ActivityArticleList } from './ActivityArticleList'

import type { Meta, StoryObj } from '@storybook/react'

const meta = {
    title: 'ActivityArticleList',
    component: ActivityArticleList,
    tags: ['autodocs'],
    parameters: {
        layout: 'padded',
    },
    args: {
        page: 0,
        totalPage: 10,
        activityArticleList: mockActivities.slice(0, 10).map((item) => ({
            slug: item.id,
            title: item.title,
            description: item.description,
            image: item.thumbnail.url,
            tag: item.tag[0],
            date: new Date(item.publishedAt),
        })),
    },
} satisfies Meta<typeof ActivityArticleList>

export default meta
type Story = StoryObj<typeof meta>

/**
 * **活動記録の記事リスト**
 *
 * 本来はページ遷移やタグによる絞り込みが可能だがstorybookでは表示のみ
 */
export const Default: Story = {}
