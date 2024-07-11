'use client'

import * as AvatarPrimitive from '@radix-ui/react-avatar'
import { cva, VariantProps } from 'class-variance-authority'
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import { cn } from '@/lib/utils'

export const avatarVariants = cva('relative flex shrink-0 overflow-hidden rounded-full', {
    variants: {
        size: {
            sm: 'size-8',
            md: 'size-10',
            lg: 'size-12',
            xl: 'size-14',
            '2xl': 'size-16',
            '3xl': 'size-20',
        },
    },
    defaultVariants: {
        size: 'md',
    },
})

export interface AvatarProps
    extends ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>,
        VariantProps<typeof avatarVariants> {}

const Avatar = forwardRef<ElementRef<typeof AvatarPrimitive.Root>, AvatarProps>(
    ({ className, size, ...props }, ref) => (
        <AvatarPrimitive.Root ref={ref} className={cn(avatarVariants({ size, className }))} {...props} />
    ),
)
Avatar.displayName = AvatarPrimitive.Root.displayName

const AvatarImage = forwardRef<
    ElementRef<typeof AvatarPrimitive.Image>,
    ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>
>(({ className, ...props }, ref) => (
    <AvatarPrimitive.Image ref={ref} className={cn('aspect-square h-full w-full', className)} {...props} />
))
AvatarImage.displayName = AvatarPrimitive.Image.displayName

const AvatarFallback = forwardRef<
    ElementRef<typeof AvatarPrimitive.Fallback>,
    ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>
>(({ className, ...props }, ref) => (
    <AvatarPrimitive.Fallback
        ref={ref}
        className={cn('flex h-full w-full items-center justify-center rounded-full bg-muted', className)}
        {...props}
    />
))
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName

export { Avatar, AvatarFallback, AvatarImage }
