import { ContactForm } from './ContactForm'

import type { Meta, StoryObj } from '@storybook/react'

const meta = {
    title: 'ContactForm',
    component: ContactForm,
    tags: ['autodocs'],
} satisfies Meta<typeof ContactForm>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
