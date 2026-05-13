import type { Meta, StoryObj } from '@storybook/react'
import { LinksPage } from './LinksPage'

const meta = {
    component: LinksPage,
    tags: ['autodocs'],
    parameters: {},
    args: {},
} satisfies Meta<typeof LinksPage>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
