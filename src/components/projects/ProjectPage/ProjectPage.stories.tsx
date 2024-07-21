import { ProjectPage } from './ProjectPage'

import type { Meta, StoryObj } from '@storybook/react'

const meta = {
    component: ProjectPage,
    tags: ['autodocs'],
    parameters: {},
    args: {},
} satisfies Meta<typeof ProjectPage>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
