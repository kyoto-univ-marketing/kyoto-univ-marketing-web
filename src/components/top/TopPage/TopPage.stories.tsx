import { TopPage } from './TopPage'

import type { Meta, StoryObj } from '@storybook/react'

const meta = {
    component: TopPage,
    tags: ['autodocs'],
    parameters: {
        layout: 'fullscreen',
    },
} satisfies Meta<typeof TopPage>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
