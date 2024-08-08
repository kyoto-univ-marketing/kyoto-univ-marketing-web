'use client'

import { ChevronUp } from 'lucide-react'
import { ComponentPropsWithoutRef, FC } from 'react'

import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export interface TopButtonProps extends ComponentPropsWithoutRef<typeof Button> {}

export const TopButton: FC<TopButtonProps> = ({ className, ...props }) => {
    return (
        <Button
            className={cn('mx-auto flex flex-col rounded-full', className)}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            size='icon'
            {...props}
        >
            <ChevronUp />
        </Button>
    )
}
