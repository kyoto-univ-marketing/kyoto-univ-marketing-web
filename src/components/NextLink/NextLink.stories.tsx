import { NextLink } from './NextLink'

import type { Meta, StoryObj } from '@storybook/react'

const meta = {
    title: 'NextLink',
    component: NextLink,
    tags: ['autodocs'],
} satisfies Meta<typeof NextLink>

export default meta
type Story = StoryObj<typeof meta>

/**
 * 外部リンク
 * - 新しいウィンドウを開く
 */
export const External: Story = {
    args: {
        href: '#',
        children: 'external link',
    },
}

/**
 * 内部リンク
 * - 同じウィンドウでページ遷移
 */
export const Internal: Story = {
    args: {
        href: '/',
        children: 'internal link',
    },
}
