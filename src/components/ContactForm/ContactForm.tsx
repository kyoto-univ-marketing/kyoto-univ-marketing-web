import { zodResolver } from '@hookform/resolvers/zod'
import { FC, useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { FormInput } from '../FormInput/FormInput'
import { FormTextarea } from '../FormTextarea/FormTextarea'
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from '../ui/alert-dialog'
import { Button } from '../ui/button'
import { Form } from '../ui/form'

export interface ContactFormProps {}

export const schema = z.object({
    /** お名前 */
    name: z.string({
        required_error: 'お名前は必須です。',
    }),
    /** メールアドレス */
    email: z
        .string({
            required_error: 'メールアドレスは必須です。',
        })
        .email({
            message: 'メールアドレスの形式が正しくありません。',
        }),
    /** お問い合わせ内容 */
    message: z.string({
        required_error: 'お問い合わせ内容は必須です。',
    }),
    /** ご所属 */
    affiliation: z.string().optional(),
})

type ContactFormSchema = z.infer<typeof schema>

export const ContactForm: FC<ContactFormProps> = ({ ...props }) => {
    const form = useForm<ContactFormSchema>({
        resolver: zodResolver(schema),
    })
    const [dialogOpen, setDialogOpen] = useState(false)

    const sendForm = () => {
        console.log(form.getValues())
    }

    return (
        <>
            <Form {...form}>
                <form className='space-y-8' onSubmit={form.handleSubmit(() => setDialogOpen(true))}>
                    <FormInput control={form.control} name='name' label='お名前' />
                    <FormInput control={form.control} name='affiliation' label='ご所属' />
                    <FormInput control={form.control} name='email' label='メールアドレス' />
                    <FormTextarea control={form.control} name='message' label='お問い合わせ内容' />
                    <Button type='submit'>送信</Button>
                </form>
            </Form>
            <ConfirmDialog open={dialogOpen} onOpenChange={setDialogOpen} onConfirm={sendForm} />
        </>
    )
}

const ConfirmDialog = ({
    open,
    onOpenChange,
    onConfirm,
}: {
    open: boolean
    onOpenChange: (open: boolean) => void
    onConfirm: () => void
}) => {
    return (
        <AlertDialog open={open} onOpenChange={onOpenChange}>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                    <AlertDialogDescription>
                        This action cannot be undone. This will permanently delete your account and remove your data
                        from our servers.
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction onClick={onConfirm}>Continue</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}
