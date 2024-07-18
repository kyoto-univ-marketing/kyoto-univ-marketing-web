import { FC, ReactNode } from 'react'

import { cn } from '@/lib/utils'

import { AccordionContent, AccordionItem, AccordionTrigger, Accordion as ShadcnAccordion } from '../../ui/accordion'

export interface AccordionItem {
    value: string
    title: ReactNode
    content: ReactNode
}

export interface AccordionProps {
    items: AccordionItem[]
    contentClassName?: string
}

export const Accordion: FC<AccordionProps> = ({ items, contentClassName, ...props }) => {
    return (
        <ShadcnAccordion type='multiple' className='w-full'>
            {items.map(({ value, title, content }) => (
                <AccordionItem className='border-b-0' key={value} value={value}>
                    <AccordionTrigger className='border-b'>{title}</AccordionTrigger>
                    <AccordionContent className={cn('py-8', contentClassName)}>{content}</AccordionContent>
                </AccordionItem>
            ))}
        </ShadcnAccordion>
    )
}
