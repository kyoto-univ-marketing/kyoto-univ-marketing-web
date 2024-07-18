import { ProjectLinkList } from './ProjectLinkList'
import { ProjectLinkItemProps } from '../ProjectLinkItem/ProjectLinkItem'

import type { Meta, StoryObj } from '@storybook/react'

const project = {
    projectName: 'プロジェクト名',
    links: [
        { label: 'ラベル付き', href: 'https://example.com' },
        { href: 'https://example.com' },
        { href: 'https://example.com' },
        { href: 'https://example.com' },
    ],
} satisfies ProjectLinkItemProps

const meta = {
    component: ProjectLinkList,
    tags: ['autodocs'],
    parameters: {},
    args: {
        projects: [project, project, project],
    },
} satisfies Meta<typeof ProjectLinkList>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
