import { StatCounter } from './StatCounter'

import type { Meta, StoryObj } from '@storybook/react'

const meta = {
    title: 'StatCounter',
    component: StatCounter,
    tags: ['autodocs'],
    args: {
        value: 43,
        label: '部員数',
    },
} satisfies Meta<typeof StatCounter>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Multiple: Story = {
    render: () => (
        <div className='flex gap-4'>
            <StatCounter value={43} label='部員数' />
            <StatCounter value={11} label='学部学科' />
            <StatCounter value={8} label='プロジェクト' />
        </div>
    ),
}
