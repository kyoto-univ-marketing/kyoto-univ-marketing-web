import { FC } from 'react'

import { cn } from '@/lib/utils'

import { badgeVariants } from '../ui/badge'

export interface TagRadioOption {
    readonly label?: string
    readonly value: string
}

export interface TagRadioItemProps extends TagRadioOption {
    selected: boolean
    onClick?: () => void
}

export const TagRadioItem: FC<TagRadioItemProps> = ({ label, value, selected, onClick, ...props }) => {
    return (
        <button
            onClick={onClick}
            className={cn(
                !selected && 'hover:bg-slate-100',
                selected && '',
                badgeVariants({ variant: selected ? 'default' : 'outline' }),
            )}
        >
            {label || value}
        </button>
    )
}

export interface TagRadioProps {
    value: string
    onChange: (value: string) => void
    options: TagRadioOption[]
}

/** タグの単一選択 */
export const TagRadio: FC<TagRadioProps> = ({ value, onChange, options, ...props }) => {
    return (
        <div className='flex flex-wrap gap-2'>
            {options.map((option) => (
                <TagRadioItem
                    key={option.value}
                    label={option.label}
                    value={option.value}
                    selected={option.value === value}
                    onClick={() => onChange(option.value)}
                />
            ))}
        </div>
    )
}
