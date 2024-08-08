'use client'

import * as AccordionPrimitive from '@radix-ui/react-accordion'
import { MinusCircleIcon, PlusCircleIcon } from 'lucide-react'
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import { cn } from '@/lib/utils'

const Accordion = AccordionPrimitive.Root

const AccordionItem = forwardRef<
    ElementRef<typeof AccordionPrimitive.Item>,
    ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
    <AccordionPrimitive.Item className={cn('border-b', className)} ref={ref} {...props} />
))
AccordionItem.displayName = 'AccordionItem'

const AccordionTrigger = forwardRef<
    ElementRef<typeof AccordionPrimitive.Trigger>,
    ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
    <AccordionPrimitive.Header className='flex'>
        <AccordionPrimitive.Trigger
            className={cn(
                'group relative flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180',
                className,
            )}
            ref={ref}
            {...props}
        >
            {children}
            <PlusCircleIcon
                className='absolute right-4 shrink-0 text-primary opacity-100 transition-all duration-300 group-data-[state=open]:opacity-0'
                size={18}
            />
            <MinusCircleIcon
                className='absolute right-4 shrink-0 text-primary opacity-0 transition-all duration-300 group-data-[state=open]:opacity-100'
                size={18}
            />
        </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
))
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName

const AccordionContent = forwardRef<
    ElementRef<typeof AccordionPrimitive.Content>,
    ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
    <AccordionPrimitive.Content
        className='overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down'
        ref={ref}
        {...props}
    >
        <div className={cn('pb-4 pt-0', className)}>{children}</div>
    </AccordionPrimitive.Content>
))

AccordionContent.displayName = AccordionPrimitive.Content.displayName

export { Accordion, AccordionContent, AccordionItem, AccordionTrigger }
