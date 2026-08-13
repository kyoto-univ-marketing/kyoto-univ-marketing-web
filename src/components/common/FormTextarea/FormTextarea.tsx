import { FieldPath, FieldValues, UseControllerProps } from 'react-hook-form'

import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '../../ui/form'
import { Textarea } from '../../ui/textarea'

export interface FormTextareaProps<
    TFieldValues extends FieldValues = FieldValues,
    TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> extends UseControllerProps<TFieldValues, TName> {
    label?: string
    placeholder?: string
    description?: string
}

export const FormTextarea = <
    TFieldValues extends FieldValues = FieldValues,
    TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
    label,
    placeholder,
    description,
    ...props
}: FormTextareaProps<TFieldValues, TName>) => {
    return (
        <FormField
            {...props}
            render={({ field }) => (
                <FormItem>
                    {label && (
                        <FormLabel className='font-title text-base'>
                            {label}
                            {props.rules?.required && (
                                <span className='ml-2 font-en text-brand-accent text-xs tracking-widest'>
                                    REQUIRED
                                </span>
                            )}
                        </FormLabel>
                    )}
                    <FormControl>
                        <Textarea {...field} placeholder={placeholder} />
                    </FormControl>
                    {description && <FormDescription>{description}</FormDescription>}
                    <FormMessage />
                </FormItem>
            )}
        />
    )
}
