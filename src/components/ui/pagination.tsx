import { ChevronLeft, ChevronRight, MoreHorizontal } from 'lucide-react'
import { ComponentProps, forwardRef } from 'react'

import { ButtonProps, buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'

import { NextLink } from '../common/NextLink/NextLink'

const Pagination = ({ className, ...props }: ComponentProps<'nav'>) => (
    <nav
        aria-label='pagination'
        className={cn('mx-auto flex w-full justify-center', className)}
        role='navigation'
        {...props}
    />
)
Pagination.displayName = 'Pagination'

const PaginationContent = forwardRef<HTMLUListElement, ComponentProps<'ul'>>(({ className, ...props }, ref) => (
    <ul className={cn('flex flex-row items-center gap-1', className)} ref={ref} {...props} />
))
PaginationContent.displayName = 'PaginationContent'

const PaginationItem = forwardRef<HTMLLIElement, ComponentProps<'li'>>(({ className, ...props }, ref) => (
    <li className={cn('', className)} ref={ref} {...props} />
))
PaginationItem.displayName = 'PaginationItem'

type PaginationLinkProps = {
    isActive?: boolean
} & Pick<ButtonProps, 'size'> &
    ComponentProps<typeof NextLink>

const PaginationLink = ({ className, isActive, size = 'icon', ...props }: PaginationLinkProps) => (
    <NextLink
        aria-current={isActive ? 'page' : undefined}
        className={cn(
            buttonVariants({
                variant: isActive ? 'default' : 'ghost',
                size,
            }),
            isActive && 'aria-disabled:opacity-100',
            className,
        )}
        {...props}
    />
)
PaginationLink.displayName = 'PaginationLink'

const PaginationPrevious = ({ className, ...props }: ComponentProps<typeof PaginationLink>) => (
    <PaginationLink
        aria-label='Go to previous page'
        className={cn('gap-1 pl-2.5', className)}
        size='default'
        {...props}
    >
        <ChevronLeft className='h-4 w-4' />
        {/* <span>Previous</span> */}
    </PaginationLink>
)
PaginationPrevious.displayName = 'PaginationPrevious'

const PaginationNext = ({ className, ...props }: ComponentProps<typeof PaginationLink>) => (
    <PaginationLink aria-label='Go to next page' className={cn('gap-1 pr-2.5', className)} size='default' {...props}>
        {/* <span>Next</span> */}
        <ChevronRight className='h-4 w-4' />
    </PaginationLink>
)
PaginationNext.displayName = 'PaginationNext'

const PaginationEllipsis = ({ className, ...props }: ComponentProps<'span'>) => (
    <span aria-hidden className={cn('flex h-9 w-9 items-center justify-center', className)} {...props}>
        <MoreHorizontal className='h-4 w-4' />
        <span className='sr-only'>More pages</span>
    </span>
)
PaginationEllipsis.displayName = 'PaginationEllipsis'

export {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
}
