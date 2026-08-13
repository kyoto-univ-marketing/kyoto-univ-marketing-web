import React from 'react'

import { cn } from '@/lib/utils'

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(({ className, type, ...props }, ref) => {
    return (
        <input
            className={cn(
                'flex h-12 w-full border border-gray-300 bg-white px-4 py-2 text-base ring-offset-background transition-colors file:border-0 file:bg-transparent file:font-medium file:text-sm placeholder:text-gray-400 focus-visible:border-primary focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-primary focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50',
                className,
            )}
            ref={ref}
            type={type}
            {...props}
        />
    )
})
Input.displayName = 'Input'

export { Input }
