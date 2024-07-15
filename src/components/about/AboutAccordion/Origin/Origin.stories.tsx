import { Origin } from './Origin'

import type { Meta, StoryObj } from '@storybook/react'

const meta = {
    component: Origin,
    tags: ['autodocs'],
} satisfies Meta<typeof Origin>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
