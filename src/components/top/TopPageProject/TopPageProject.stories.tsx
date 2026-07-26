import type { Meta, StoryObj } from '@storybook/react'
import { TopPageProject } from './TopPageProject'

const meta = {
    component: TopPageProject,
    tags: ['autodocs'],
    parameters: {},
    args: {},
} satisfies Meta<typeof TopPageProject>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
