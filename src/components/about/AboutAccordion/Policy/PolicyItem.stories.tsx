import type { Meta, StoryObj } from '@storybook/react'
import { mockPolicies } from '@/mocks/policies'
import { PolicyItem } from './PolicyItem'

const meta = {
    component: PolicyItem,
    tags: ['autodocs'],
    parameters: {
        layout: 'fullscreen',
    },
    args: {},
    render: (args) => (
        <div className='flex h-dvh w-dvw items-center justify-center'>
            <div className='w-full max-w-(--breakpoint-sm) overflow-hidden p-4'>
                <PolicyItem {...args} />
            </div>
        </div>
    ),
} satisfies Meta<typeof PolicyItem>

export default meta
type Story = StoryObj<typeof meta>

export const Policy1: Story = {
    args: {
        ...mockPolicies[0],
    },
}

export const Policy2: Story = {
    args: {
        ...mockPolicies[1],
    },
}

export const Policy3: Story = {
    args: {
        ...mockPolicies[2],
    },
}

export const Policy4: Story = {
    args: {
        ...mockPolicies[3],
    },
}
