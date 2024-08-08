import { ProjectPage } from './ProjectPage'

import type { Meta, StoryObj } from '@storybook/react'

const meta = {
    component: ProjectPage,
    tags: ['autodocs'],
    parameters: {},
    args: {
        projectDescription: 'プロジェクトの説明が入ります。\nプロジェクトの説明が入ります。',
    },
} satisfies Meta<typeof ProjectPage>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
