import type { Meta, StoryObj } from '@storybook/react'
import { AboutSections } from './AboutAccordion'

const meta = {
    component: AboutSections,
    tags: ['autodocs'],
    parameters: {
        layout: 'padded',
    },
} satisfies Meta<typeof AboutSections>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
