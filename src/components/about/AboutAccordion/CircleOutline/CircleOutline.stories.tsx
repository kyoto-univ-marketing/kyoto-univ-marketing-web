import type { Meta, StoryObj } from '@storybook/react'
import { CircleOutline } from './CircleOutline'

const meta = {
    component: CircleOutline,
    tags: ['autodocs'],
} satisfies Meta<typeof CircleOutline>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
