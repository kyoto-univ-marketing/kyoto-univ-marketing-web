import type { Meta, StoryObj } from '@storybook/react'

import { mockProjects } from '@/mocks/projects'

import { ProjectList } from './ProjectList'

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
        heading: 'マーケティング支援',
        projects: mockProjects
            .filter((project) => project.tag[0] === 'マーケティング支援')
            .map((project, i) => ({ ...project, archived: i % 3 === 0 })),
    },
}

export const CommingSoon: Story = {
    args: {
        heading: 'マーケティング支援',
        projects: [],
    },
}
