import { Pagination } from './Pagination'

import type { Meta, StoryObj } from '@storybook/react'

const meta = {
    title: 'Pagination',
    component: Pagination,
    tags: ['autodocs'],
    args: {
        activePage: 4,
        showPrevNextPage: 1,
        pageLinkList: [...new Array(10)].map(() => '#'),
    },
} satisfies Meta<typeof Pagination>

export default meta
type Story = StoryObj<typeof meta>

/**
 * Storybook上の画面からは操作できません。
 *
 * ページ遷移時の挙動を確認したいときは、`activePage`を変更してください。
 */
export const Default: Story = {}

/** 前後のページを表示しない */
export const HidePrevNextPage: Story = {
    args: {
        showPrevNextPage: 0,
    },
}

/** 1ページ目にいる */
export const ActiveFirstPage: Story = {
    args: {
        activePage: 0,
    },
}

/** 2ページ目にいる */
export const ActiveSecondPage: Story = {
    args: {
        activePage: 1,
    },
}

/** 最後のページにいる */
export const ActiveLastPage: Story = {
    args: {
        activePage: 9,
    },
}
