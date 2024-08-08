import { XIcon } from 'lucide-react'
import { FC } from 'react'

import { cn } from '@/lib/utils'

import { badgeVariants } from '../../ui/badge'
import { Button } from '../../ui/button'
import { Label } from '../../ui/label'
import { RadioGroup, RadioGroupItem } from '../../ui/radio-group'

export interface TagRadioOption {
    readonly label?: string
    readonly value: string
}

export interface TagRadioItemProps extends TagRadioOption {
    selected: boolean
}

export const TagRadioItem: FC<TagRadioItemProps> = ({ label, value, selected, ...props }) => {
    return (
        <div className='flex items-center'>
            <RadioGroupItem hidden id={value} value={value}></RadioGroupItem>
            <Label
                className={cn(
                    !selected && 'hover:bg-slate-100',
                    selected && '',
                    badgeVariants({ variant: selected ? 'default' : 'outline' }),
                )}
                htmlFor={value}
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
    erasable?: boolean
}

/** タグの単一選択 */
export const TagRadio: FC<TagRadioProps> = ({ value, onChange, options, erasable = false, ...props }) => {
    return (
        <RadioGroup className='flex flex-wrap items-center' onValueChange={onChange} value={value}>
            {options.map((option) => (
                <TagRadioItem
                    key={option.value}
                    label={option.label}
                    selected={option.value === value}
                    value={option.value}
                />
            ))}
            {erasable && (
                <Button className='size-fit p-1' onClick={() => onChange('')} variant='ghost'>
                    <XIcon className='size-3.5 text-red-500'></XIcon>
                </Button>
            )}
        </RadioGroup>
    )
}
