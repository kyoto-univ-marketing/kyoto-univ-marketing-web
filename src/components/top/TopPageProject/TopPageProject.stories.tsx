import { TopPageProject } from './TopPageProject'

import type { Meta, StoryObj } from '@storybook/react'

const meta = {
    component: TopPageProject,
    tags: ['autodocs'],
    parameters: {},
    args: {},
} satisfies Meta<typeof TopPageProject>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
