import { ContactPage } from './ContactPage'

import type { Meta, StoryObj } from '@storybook/react'

const meta = {
    component: ContactPage,
    tags: ['autodocs'],
} satisfies Meta<typeof ContactPage>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
