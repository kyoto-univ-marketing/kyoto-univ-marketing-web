import { CircleOutline } from './CircleOutline'

import type { Meta, StoryObj } from '@storybook/react'

const meta = {
    title: 'CircleOutline',
    component: CircleOutline,
    tags: ['autodocs'],
} satisfies Meta<typeof CircleOutline>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
