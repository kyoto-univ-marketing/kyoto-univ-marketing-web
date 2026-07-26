import type { Meta, StoryObj } from '@storybook/react'
import { ContactSuccessPage } from './ContactSuccessPage'

const meta = {
    component: ContactSuccessPage,
    tags: ['autodocs'],
} satisfies Meta<typeof ContactSuccessPage>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
