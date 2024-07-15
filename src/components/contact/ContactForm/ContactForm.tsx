'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { FC, useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import getKeys from '@/lib/getKeys'

import { FormInput } from '../../common/FormInput/FormInput'
import { FormTextarea } from '../../common/FormTextarea/FormTextarea'
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from '../../ui/alert-dialog'
import { Button } from '../../ui/button'
import { Form } from '../../ui/form'
import { useToast } from '../../ui/use-toast'

export interface ContactFormProps {}

export const contactFormSchema = z.object({
    /** お名前 */
    name: z.string().refine((value) => value.trim() !== '', {
        message: 'お名前は必須です。',
    }),
    /** メールアドレス */
    email: z.string().email({
        message: 'メールアドレスの形式が正しくありません。',
    }),
    /** お問い合わせ内容 */
    message: z.string().refine((value) => value.trim() !== '', {
        message: 'お問い合わせ内容は必須です。',
    }),
    /** ご所属 */
    affiliation: z
        .string()
        .optional()
        .transform((value) => value || null),
})

export type ContactFormSchema = z.infer<typeof contactFormSchema>

const keyToLabel: Record<keyof ContactFormSchema, string> = {
    name: 'お名前',
    email: 'メールアドレス',
    message: 'お問い合わせ内容',
    affiliation: 'ご所属(大学名、企業名、団体名)',
} as const

export const ContactForm: FC<ContactFormProps> = ({ ...props }) => {
    const form = useForm<ContactFormSchema>({
        resolver: zodResolver(contactFormSchema),
        defaultValues: {
            name: '',
            affiliation: '',
            email: '',
            message: '',
        },
    })
    const [dialogOpen, setDialogOpen] = useState(false)
    const [disabled, setDisabled] = useState(false)
    const { toast } = useToast()
    const router = useRouter()

    const handleConfirm = async () => {
        setDisabled(true)
        fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(form.getValues()),
        })
            .then((res) => {
                if (!res.ok) {
                    throw new Error('送信に失敗しました')
                }
                // 成功時は、成功ページに移動
                router.push('/contact/success')
            })
            .catch(() => {
                // 失敗時は、トーストを表示して再入力可能な状態にする
                toast({
                    title: '送信に失敗しました',
                    description: '時間を置いて、もう一度お試しください。',
                    variant: 'destructive',
                })
                setDisabled(false)
            })
    }

    return (
        <>
            <Form {...form}>
                <form className='space-y-8' onSubmit={form.handleSubmit(() => setDialogOpen(true))}>
                    <FormInput
                        rules={{ required: true }}
                        disabled={disabled}
                        control={form.control}
                        name='name'
                        label={keyToLabel.name}
                    />
                    <FormInput
                        disabled={disabled}
                        control={form.control}
                        name='affiliation'
                        label={keyToLabel.affiliation}
                    />
                    <FormInput
                        disabled={disabled}
                        control={form.control}
                        rules={{ required: true }}
                        name='email'
                        label={keyToLabel.email}
                    />
                    <FormTextarea
                        rules={{ required: true }}
                        disabled={disabled}
                        control={form.control}
                        name='message'
                        label={keyToLabel.message}
                    />
                    <Button disabled={disabled} type='submit'>
                        入力内容の確認へ
                    </Button>
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
