import type { Meta, StoryObj } from '@storybook/react'
import { ProjectLinkItem } from './ProjectLinkItem'

const meta = {
    component: ProjectLinkItem,
    tags: ['autodocs'],
    parameters: {},
    args: {
        projectName: 'プロジェクト',
        links: [
            { label: 'ラベル付き', href: 'https://example.com' },
            { href: 'https://example.com' },
            { href: 'https://example.com' },
            { href: 'https://example.com' },
        ],
    },
} satisfies Meta<typeof ProjectLinkItem>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
