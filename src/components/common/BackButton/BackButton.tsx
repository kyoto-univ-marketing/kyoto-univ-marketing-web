'use client'

import { useRouter } from 'next/navigation'
import { ComponentProps, FC } from 'react'

import { Button } from '@/components/ui/button'

export interface BackButtonProps extends Omit<ComponentProps<typeof Button>, 'onClick'> {}

/** 戻るボタン */
export const BackButton: FC<BackButtonProps> = ({ ...props }) => {
    const router = useRouter()
    return <Button {...props} onClick={() => router.back()} />
}
