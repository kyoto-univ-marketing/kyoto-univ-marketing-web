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
    website: '',
} as const

export const ContactForm: FC = ({ ...props }) => {
    const form = useForm({
        resolver: zodResolver(contactFormSchema),
        defaultValues: {
            name: '',
            affiliation: '',
            email: '',
            message: '',
            website: '',
        },
    })
    const [dialogOpen, setDialogOpen] = useState(false)
    const [disabled, setDisabled] = useState(false)
    const { toast } = useToast()
    const router = useRouter()

    const handleConfirm = async () => {
        setDisabled(true)
        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(form.getValues()),
            })
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
        } catch {
            // 失敗時は、トーストを表示して再入力可能な状態にする
            toast({
                title: '送信に失敗しました',
                description: '時間を置いて、もう一度お試しください。',
                variant: 'destructive',
            })
            setDisabled(false)
        }
    }

    return (
        <>
            <Form {...form}>
                {/* 灰色の箱で囲まない。囲む見た目は押せるものに限る、というサイト全体の決まり */}
                <form className='space-y-10' onSubmit={form.handleSubmit(() => setDialogOpen(true))}>
                    <p className='border-gray-200 border-b pb-4 text-gray-600 text-sm'>
                        <span className='text-brand-accent text-xs'>必須</span>
                        と書かれた項目は必ずご入力ください。
                    </p>
                    {/* ハニーポット: ボット対策のため非表示（人間は入力しない） */}
                    <input
                        aria-hidden='true'
                        autoComplete='off'
                        className='hidden'
                        tabIndex={-1}
                        {...form.register('website')}
                    />
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
                    <Button className='h-fit w-full py-5 sm:mx-auto sm:w-auto sm:px-16' disabled={disabled} type='submit'>
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
                    <AlertDialogTitle className='font-title text-heading'>入力内容のご確認</AlertDialogTitle>
                </AlertDialogHeader>
                <div className='max-h-[50svh] divide-y divide-gray-200 overflow-y-auto border-gray-200 border-y'>
                    {getKeys(values)
                        .filter((key) => key !== 'website')
                        .map((key) => (
                            <div className='space-y-1 py-4' key={key}>
                                <p className='text-gray-600 text-xs'>{keyToLabel[key]}</p>
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
