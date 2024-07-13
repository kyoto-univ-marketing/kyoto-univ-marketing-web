import { ContactSuccessPage } from './ContactSuccessPage'

import type { Meta, StoryObj } from '@storybook/react'

const meta = {
    title: 'ContactSuccessPage',
    component: ContactSuccessPage,
    tags: ['autodocs'],
} satisfies Meta<typeof ContactSuccessPage>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
