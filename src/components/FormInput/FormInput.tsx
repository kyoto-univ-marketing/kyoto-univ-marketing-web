import { FieldPath, FieldValues, UseControllerProps } from 'react-hook-form'

import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '../ui/form'
import { Input } from '../ui/input'

export interface FormInputProps<
    TFieldValues extends FieldValues = FieldValues,
    TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> extends UseControllerProps<TFieldValues, TName> {
    label?: string
    placeholder?: string
    description?: string
}

export const FormInput = <
    TFieldValues extends FieldValues = FieldValues,
    TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
    label,
    placeholder,
    description,
    ...props
}: FormInputProps<TFieldValues, TName>) => {
    return (
        <FormField
            {...props}
            render={({ field }) => (
                <FormItem>
                    {label && (
                        <FormLabel>
                            {label}
                            {props.rules?.required && <span className='ml-1 text-red-500'>*</span>}
                        </FormLabel>
                    )}
                    <FormControl>
                        <Input {...field} placeholder={placeholder} />
                    </FormControl>
                    {description && <FormDescription>{description}</FormDescription>}
                    <FormMessage />
                </FormItem>
            )}
        />
    )
}
