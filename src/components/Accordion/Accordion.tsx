import { FC, ReactNode } from 'react'

import { AccordionContent, AccordionItem, AccordionTrigger, Accordion as ShadcnAccordion } from '../ui/accordion'

export interface AccordionItem {
    value: string
    title: string
    content: ReactNode
}

export interface AccordionProps {
    items: AccordionItem[]
}

export const Accordion: FC<AccordionProps> = ({ items, ...props }) => {
    return (
        <ShadcnAccordion type='multiple' className='w-full'>
            {items.map(({ value, title, content }) => (
                <AccordionItem key={value} value={value}>
                    <AccordionTrigger>{title}</AccordionTrigger>
                    <AccordionContent>{content}</AccordionContent>
                </AccordionItem>
            ))}
        </ShadcnAccordion>
    )
}
