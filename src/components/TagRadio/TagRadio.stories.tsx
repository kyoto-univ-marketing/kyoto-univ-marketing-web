import { useState } from 'react'

import { TagRadio } from './TagRadio'

import type { Meta, StoryObj } from '@storybook/react'

const meta = {
    title: 'TagRadio',
    component: TagRadio,
    tags: ['autodocs'],
    args: {
        options: [
            { value: 'one', label: 'One' },
            { value: 'two', label: 'Two' },
            { value: 'three', label: 'Three' },
        ],
        value: 'one',
        onChange: (value: string) => console.log(value),
    },
    render: (args) => {
        const [value, setValue] = useState(args.value)
        return (
            <TagRadio
                {...args}
                value={value}
                onChange={(value) => {
                    setValue(value)
                    args.onChange(value)
                }}
            />
        )
    },
} satisfies Meta<typeof TagRadio>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
