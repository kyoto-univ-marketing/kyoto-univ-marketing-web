import { zodResolver } from '@hookform/resolvers/zod'
import type { Meta, StoryObj } from '@storybook/react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Button } from '../../ui/button'
import { Form } from '../../ui/form'
import { FormTextarea } from './FormTextarea'

const meta = {
    component: FormTextarea,
    tags: ['autodocs'],
} satisfies Meta<typeof FormTextarea>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    render: ({ label, description, placeholder }) => {
        const schema = z.object({
            message: z.string({
                error: 'お問い合わせ内容は必須です',
            }),
        })
        const form = useForm<z.infer<typeof schema>>({
            resolver: zodResolver(schema),
        })
        return (
            <Form {...form}>
                <form className='space-y-4' onSubmit={form.handleSubmit(() => false)}>
                    <FormTextarea
                        control={form.control}
                        description={description}
                        label={label}
                        name='message'
                        placeholder={placeholder}
                    />
                    <Button type='submit'>送信</Button>
                </form>
            </Form>
        )
    },
    args: { label: 'お問い合わせ内容', name: 'message' },
}
