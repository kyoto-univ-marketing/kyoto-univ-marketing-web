import { ErrorPage } from './ErrorPage'

import type { Meta, StoryObj } from '@storybook/react'

const meta = {
    component: ErrorPage,
    tags: ['autodocs'],
    parameters: {},
    args: {},
} satisfies Meta<typeof ErrorPage>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
