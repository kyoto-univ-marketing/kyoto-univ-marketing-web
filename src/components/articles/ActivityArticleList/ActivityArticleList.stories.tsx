import type { Meta, StoryObj } from '@storybook/react'
import { ActivityArticleListPresenter } from './ActivityArticleListPresenter'

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
 * **お知らせの記事リスト**
 *
 * 本来はページ遷移が可能だがstorybookでは表示のみ
 */
export const Default: Story = {}
