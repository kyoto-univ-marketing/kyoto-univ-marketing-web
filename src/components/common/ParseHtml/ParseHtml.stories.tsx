import { mockActivities } from '@/mocks/activities'

import { ParseHtml } from './ParseHtml'

import type { Meta, StoryObj } from '@storybook/react'

const meta = {
    component: ParseHtml,
    tags: ['autodocs'],
    parameters: {},
    args: {
        children: mockActivities[0].content,
    },
} satisfies Meta<typeof ParseHtml>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
