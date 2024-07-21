import pick from '@/lib/pick'
import { mockProjects } from '@/mocks/projects'

import { ProjectListItem } from './ProjectListItem'

import type { Meta, StoryObj } from '@storybook/react'

const meta = {
    component: ProjectListItem,
    tags: ['autodocs'],
    parameters: {},
    args: {
        ...pick(mockProjects[0], 'name', 'description', 'thumbnail'),
        reverse: false,
    },
} satisfies Meta<typeof ProjectListItem>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
