import { BreadCrumb } from './BreadCrumb'

import type { Meta, StoryObj } from '@storybook/react'

const meta = {
    title: 'BreadCrumb',
    component: BreadCrumb,
    tags: ['autodocs'],
} satisfies Meta<typeof BreadCrumb>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        items: [{ label: 'HOME', href: '/' }, { label: '活動記録', href: '/articles' }, { label: '第◯回勉強会' }],
    },
}
