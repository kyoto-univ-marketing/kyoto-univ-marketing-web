import { AboutAccordion } from './AboutAccordion'

import type { Meta, StoryObj } from '@storybook/react'

const meta = {
    title: 'AboutAccordion',
    component: AboutAccordion,
    tags: ['autodocs'],
    parameters: {
        layout: 'padded',
    },
} satisfies Meta<typeof AboutAccordion>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
