import type { Meta, StoryObj } from '@storybook/react'
import { AboutAccordion } from './AboutAccordion'

const meta = {
    component: AboutAccordion,
    tags: ['autodocs'],
    parameters: {
        layout: 'padded',
    },
} satisfies Meta<typeof AboutAccordion>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
