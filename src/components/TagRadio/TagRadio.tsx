import { FC } from 'react'

import { cn } from '@/lib/utils'

import { badgeVariants } from '../ui/badge'
import { Label } from '../ui/label'
import { RadioGroup, RadioGroupItem } from '../ui/radio-group'

export interface TagRadioOption {
    readonly label?: string
    readonly value: string
}

export interface TagRadioItemProps extends TagRadioOption {
    selected: boolean
}

export const TagRadioItem: FC<TagRadioItemProps> = ({ label, value, selected, ...props }) => {
    return (
        <div>
            <RadioGroupItem hidden id={value} value={value}></RadioGroupItem>
            <Label
                htmlFor={value}
                className={cn(
                    !selected && 'hover:bg-slate-100',
                    selected && '',
                    badgeVariants({ variant: selected ? 'default' : 'outline' }),
                )}
            >
                {label || value}
            </Label>
        </div>
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
        <RadioGroup className='flex flex-wrap' onValueChange={onChange}>
            {options.map((option) => (
                <TagRadioItem
                    key={option.value}
                    label={option.label}
                    value={option.value}
                    selected={option.value === value}
                />
            ))}
        </RadioGroup>
    )
}
