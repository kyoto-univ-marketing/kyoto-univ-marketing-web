import { LinksPage } from './LinksPage'

import type { Meta, StoryObj } from '@storybook/react'

const meta = {
    component: LinksPage,
    tags: ['autodocs'],
    parameters: {},
    args: {},
} satisfies Meta<typeof LinksPage>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
