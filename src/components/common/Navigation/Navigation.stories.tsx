import { Navigation } from './Navigation'

import type { Meta, StoryObj } from '@storybook/react'

const meta = {
    component: Navigation,
    tags: ['autodocs'],
    parameters: {
        layout: 'fullscreen',
    },
} satisfies Meta<typeof Navigation>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
