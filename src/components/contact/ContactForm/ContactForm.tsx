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
import { contactFormSchema } from './schema'

export type ContactFormSchema = z.infer<typeof contactFormSchema>

const keyToLabel: Record<keyof ContactFormSchema, string> = {
    name: 'お名前',
    email: 'メールアドレス',
    message: 'お問い合わせ内容',
    affiliation: 'ご所属(大学名、企業名、団体名)',
} as const

export const ContactForm: FC = ({ ...props }) => {
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
                    toast({
                        title: '送信に失敗しました',
                        description: '時間を置いて、もう一度お試しください。',
                        variant: 'destructive',
                    })
                    setDisabled(false)
                    return
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
                <form
                    className='space-y-8 bg-background-secondary px-4 py-8'
                    onSubmit={form.handleSubmit(() => setDialogOpen(true))}
                >
                    <p className='text-destructive text-sm'>*は必須項目です</p>
                    <FormInput
                        control={form.control}
                        disabled={disabled}
                        label={keyToLabel.name}
                        name='name'
                        rules={{ required: true }}
                    />
                    <FormInput
                        control={form.control}
                        disabled={disabled}
                        label={keyToLabel.affiliation}
                        name='affiliation'
                    />
                    <FormInput
                        control={form.control}
                        disabled={disabled}
                        label={keyToLabel.email}
                        name='email'
                        rules={{ required: true }}
                    />
                    <FormTextarea
                        control={form.control}
                        disabled={disabled}
                        label={keyToLabel.message}
                        name='message'
                        rules={{ required: true }}
                    />
                    <Button className='mx-auto block h-fit min-w-[75%] py-4' disabled={disabled} type='submit'>
                        入力内容の確認へ
                    </Button>
                </form>
            </Form>
            <ConfirmDialog
                onConfirm={handleConfirm}
                onOpenChange={setDialogOpen}
                open={dialogOpen}
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
        <AlertDialog onOpenChange={onOpenChange} open={open}>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>入力内容のご確認</AlertDialogTitle>
                </AlertDialogHeader>
                <div className='space-y-4'>
                    {getKeys(values).map((key) => (
                        <div className='space-y-1' key={key}>
                            <p className='text-gray-500 text-sm underline underline-offset-2'>{keyToLabel[key]}</p>
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
