import { Slot } from '@radix-ui/react-slot'
import { ChevronRight, MoreHorizontal } from 'lucide-react'
import { ComponentProps, ComponentPropsWithoutRef, ReactNode, forwardRef } from 'react'

import { cn } from '@/lib/utils'

const Breadcrumb = forwardRef<
    HTMLElement,
    ComponentPropsWithoutRef<'nav'> & {
        separator?: ReactNode
    }
>(({ ...props }, ref) => <nav aria-label='breadcrumb' ref={ref} {...props} />)
Breadcrumb.displayName = 'Breadcrumb'

const BreadcrumbList = forwardRef<HTMLOListElement, ComponentPropsWithoutRef<'ol'>>(({ className, ...props }, ref) => (
    <ol
        className={cn(
            'flex flex-wrap items-center gap-1.5 break-words text-sm text-muted-foreground sm:gap-2.5',
            className,
        )}
        ref={ref}
        {...props}
    />
))
BreadcrumbList.displayName = 'BreadcrumbList'

const BreadcrumbItem = forwardRef<HTMLLIElement, ComponentPropsWithoutRef<'li'>>(({ className, ...props }, ref) => (
    <li className={cn('inline-flex items-center gap-1.5', className)} ref={ref} {...props} />
))
BreadcrumbItem.displayName = 'BreadcrumbItem'

const BreadcrumbLink = forwardRef<
    HTMLAnchorElement,
    ComponentPropsWithoutRef<'a'> & {
        asChild?: boolean
    }
>(({ asChild, className, ...props }, ref) => {
    const Comp = asChild ? Slot : 'a'

    return <Comp className={cn('transition-colors hover:text-foreground', className)} ref={ref} {...props} />
})
BreadcrumbLink.displayName = 'BreadcrumbLink'

const BreadcrumbPage = forwardRef<HTMLSpanElement, ComponentPropsWithoutRef<'span'>>(({ className, ...props }, ref) => (
    <span
        aria-current='page'
        aria-disabled='true'
        className={cn('font-normal text-foreground', className)}
        ref={ref}
        role='link'
        {...props}
    />
))
BreadcrumbPage.displayName = 'BreadcrumbPage'

const BreadcrumbSeparator = ({ children, className, ...props }: ComponentProps<'li'>) => (
    <li aria-hidden='true' className={cn('[&>svg]:size-3.5', className)} role='presentation' {...props}>
        {children ?? <ChevronRight />}
    </li>
)
BreadcrumbSeparator.displayName = 'BreadcrumbSeparator'

const BreadcrumbEllipsis = ({ className, ...props }: ComponentProps<'span'>) => (
    <span
        aria-hidden='true'
        className={cn('flex h-9 w-9 items-center justify-center', className)}
        role='presentation'
        {...props}
    >
        <MoreHorizontal className='h-4 w-4' />
        <span className='sr-only'>More</span>
    </span>
)
BreadcrumbEllipsis.displayName = 'BreadcrumbElipssis'

export {
    Breadcrumb,
    BreadcrumbEllipsis,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
}
