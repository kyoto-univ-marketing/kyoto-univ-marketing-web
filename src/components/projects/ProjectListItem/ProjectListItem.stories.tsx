import type { Meta, StoryObj } from '@storybook/react'
import pick from '@/lib/pick'
import { mockProjects } from '@/mocks/projects'
import { ProjectListItem } from './ProjectListItem'

const meta = {
    component: ProjectListItem,
    tags: ['autodocs'],
    parameters: {},
    args: {
        ...pick(mockProjects[0], 'name', 'description', 'thumbnail'),
    },
} satisfies Meta<typeof ProjectListItem>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
