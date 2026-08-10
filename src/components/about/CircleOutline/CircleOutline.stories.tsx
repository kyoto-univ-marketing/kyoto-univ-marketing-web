import type { Meta, StoryObj } from '@storybook/react'

import { CircleOutline } from './CircleOutline'

const meta = {
    component: CircleOutline,
    tags: ['autodocs'],
} satisfies Meta<typeof CircleOutline>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        text: '「京大マーケティング研究所」は2024年3月に設立されました。初年度に入会した部員を立ち上げの一期生として、多様な方面に活動の幅を広げてきました。',
    },
}
