import { NotFoundPage } from './NotFoundPage'

import type { Meta, StoryObj } from '@storybook/react'

const meta = {
    component: NotFoundPage,
    tags: ['autodocs'],
    parameters: {},
    args: {},
} satisfies Meta<typeof NotFoundPage>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
