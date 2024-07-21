import { mockProjects } from '@/mocks/projects'

import { ProjectList } from './ProjectList'

import type { Meta, StoryObj } from '@storybook/react'

const meta = {
    component: ProjectList,
    tags: ['autodocs'],
    parameters: {},
    args: {},
} satisfies Meta<typeof ProjectList>

export default meta
type Story = StoryObj<typeof meta>

export const MarketingSupport: Story = {
    args: {
        tag: 'マーケティング支援',
        projects: mockProjects.filter((project) => project.tag[0] === 'マーケティング支援'),
    },
}

export const CommingSoon: Story = {
    args: {
        tag: 'マーケティング支援',
        projects: [],
    },
}
