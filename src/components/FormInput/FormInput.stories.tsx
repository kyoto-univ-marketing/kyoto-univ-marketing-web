import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { FormInput } from './FormInput'
import { Button } from '../ui/button'
import { Form } from '../ui/form'

import type { Meta, StoryObj } from '@storybook/react'

const meta = {
    component: FormInput,
    tags: ['autodocs'],
    args: {},
} satisfies Meta<typeof FormInput>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    render: ({ label, description, placeholder }) => {
        const form = useForm<{ name: string }>()
        return (
            <Form {...form}>
                <FormInput
                    control={form.control}
                    name='name'
                    label={label}
                    placeholder={placeholder}
                    description={description}
                />
            </Form>
        )
    },
    args: { label: 'お名前', placeholder: '山田 太郎', description: 'お名前を入力してください', name: 'name' },
}

export const Email: Story = {
    render: ({ label, description, placeholder }) => {
        const schema = z.object({
            email: z
                .string({
                    required_error: 'メールアドレスは必須です',
                })
                .email({
                    message: 'メールアドレスの形式が正しくありません',
                }),
        })
        const form = useForm<z.infer<typeof schema>>({
            resolver: zodResolver(schema),
        })
        return (
            <Form {...form}>
                <form className='space-y-4' onSubmit={form.handleSubmit((data) => console.log(data))}>
                    <FormInput
                        control={form.control}
                        name='email'
                        label={label}
                        placeholder={placeholder}
                        description={description}
                    />
                    <Button type='submit'>送信</Button>
                </form>
            </Form>
        )
    },
    args: {
        label: 'メールアドレス',
        placeholder: '****@example.com',
        description: 'メールアドレスを入力してください',
        name: 'email',
    },
}
