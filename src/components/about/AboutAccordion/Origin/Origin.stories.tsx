import { OriginPresenter } from './OriginPresenter'

import type { Meta, StoryObj } from '@storybook/react'

const meta = {
    component: OriginPresenter,
    tags: ['autodocs'],
    args: {
        text: ['テキスト', 'テキスト', 'テキスト', 'テキスト'].join('\n'),
    },
} satisfies Meta<typeof OriginPresenter>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
