import { pageLinkObject } from '@/constants/pageLinks'

import { BreadCrumb } from './BreadCrumb'

import type { Meta, StoryObj } from '@storybook/react'

const meta = {
    component: BreadCrumb,
    tags: ['autodocs'],
} satisfies Meta<typeof BreadCrumb>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        items: [
            { label: pageLinkObject.TOP.textEng, href: pageLinkObject.TOP.href },
            { label: pageLinkObject.ARCHIVE.text, href: pageLinkObject.ARCHIVE.href },
            { label: '第◯回勉強会', href: `${pageLinkObject.ARCHIVE.href}/1` },
        ],
    },
}
