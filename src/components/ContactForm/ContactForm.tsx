import { zodResolver } from '@hookform/resolvers/zod'
import { FC, useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import getKeys from '@/lib/getKeys'

import { FormInput } from '../FormInput/FormInput'
import { FormTextarea } from '../FormTextarea/FormTextarea'
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
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

const keyToLabel: Record<keyof ContactFormSchema, string> = {
    name: 'お名前',
    email: 'メールアドレス',
    message: 'お問い合わせ内容',
    affiliation: 'ご所属(大学名、企業名、団体名)',
} as const

export const ContactForm: FC<ContactFormProps> = ({ ...props }) => {
    const form = useForm<ContactFormSchema>({
        resolver: zodResolver(schema),
    })
    const [dialogOpen, setDialogOpen] = useState(false)

    const handleConfirm = () => {
        console.log(form.getValues())
    }

    return (
        <>
            <Form {...form}>
                <form className='space-y-8' onSubmit={form.handleSubmit(() => setDialogOpen(true))}>
                    <FormInput control={form.control} name='name' label={keyToLabel.name} />
                    <FormInput control={form.control} name='affiliation' label={keyToLabel.affiliation} />
                    <FormInput control={form.control} name='email' label={keyToLabel.email} />
                    <FormTextarea control={form.control} name='message' label={keyToLabel.message} />
                    <Button type='submit'>入力内容の確認へ</Button>
                </form>
            </Form>
            <ConfirmDialog
                open={dialogOpen}
                onOpenChange={setDialogOpen}
                onConfirm={handleConfirm}
                values={form.getValues()}
            />
        </>
    )
}

const ConfirmDialog = ({
    open,
    onOpenChange,
    onConfirm,
    values,
}: {
    open: boolean
    onOpenChange: (open: boolean) => void
    onConfirm: () => void
    values: ContactFormSchema
}) => {
    return (
        <AlertDialog open={open} onOpenChange={onOpenChange}>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>入力内容のご確認</AlertDialogTitle>
                </AlertDialogHeader>
                <div className='space-y-4'>
                    {getKeys(values).map((key) => (
                        <div key={key} className='space-y-1'>
                            <p className='text-sm text-gray-500 underline underline-offset-2'>{keyToLabel[key]}</p>
                            {values[key] ? (
                                <p className='whitespace-pre-wrap break-all'>{values[key]}</p>
                            ) : (
                                <p className='whitespace-pre-wrap break-all text-gray-500'>（入力なし）</p>
                            )}
                        </div>
                    ))}
                </div>
                <AlertDialogFooter>
                    <AlertDialogCancel>キャンセル</AlertDialogCancel>
                    <AlertDialogAction onClick={onConfirm}>送信</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}
