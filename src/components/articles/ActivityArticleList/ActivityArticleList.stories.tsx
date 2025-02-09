import { ActivityArticleListPresenter } from './ActivityArticleListPresenter'

import type { Meta, StoryObj } from '@storybook/react'

const meta = {
    component: ActivityArticleListPresenter,
    tags: ['autodocs'],
    parameters: {
        layout: 'padded',
    },
    args: {
        page: 0,
        articleCardList: <></>,
    },
} satisfies Meta<typeof ActivityArticleListPresenter>

export default meta
type Story = StoryObj<typeof meta>

/**
 * **活動記録の記事リスト**
 *
 * 本来はページ遷移やタグによる絞り込みが可能だがstorybookでは表示のみ
 */
export const Default: Story = {}
