import type { Meta, StoryObj } from '@storybook/react'
import { StatCounter } from './StatCounter'

const meta = {
    component: StatCounter,
    tags: ['autodocs'],
    args: {
        value: 43,
        label: '会員数',
    },
} satisfies Meta<typeof StatCounter>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Multiple: Story = {
    render: () => (
        <div className='flex gap-4'>
            <StatCounter label='会員数' value={43} />
            <StatCounter label='学部学科' value={11} />
            <StatCounter label='プロジェクト' value={8} />
        </div>
    ),
}
