import * as LabelPrimitive from '@radix-ui/react-label'
import { Slot } from '@radix-ui/react-slot'
import {
    ComponentPropsWithoutRef,
    ElementRef,
    HTMLAttributes,
    createContext,
    forwardRef,
    useContext,
    useId,
} from 'react'
import { Controller, ControllerProps, FieldPath, FieldValues, FormProvider, useFormContext } from 'react-hook-form'

import { Label } from '@/components/ui/label'
import { cn } from '@/lib/utils'

const Form = FormProvider

type FormFieldContextValue<
    TFieldValues extends FieldValues = FieldValues,
    TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = {
    name: TName
}

const FormFieldContext = createContext<FormFieldContextValue>({} as FormFieldContextValue)

const FormField = <
    TFieldValues extends FieldValues = FieldValues,
    TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
    ...props
}: ControllerProps<TFieldValues, TName>) => {
    return (
        <FormFieldContext.Provider value={{ name: props.name }}>
            <Controller {...props} />
        </FormFieldContext.Provider>
    )
}

const useFormField = () => {
    const fieldContext = useContext(FormFieldContext)
    const itemContext = useContext(FormItemContext)
    const { getFieldState, formState } = useFormContext()

    const fieldState = getFieldState(fieldContext.name, formState)

    if (!fieldContext) {
        throw new Error('useFormField should be used within <FormField>')
    }

    const { id } = itemContext

    return {
        id,
        name: fieldContext.name,
        formItemId: `${id}-form-item`,
        formDescriptionId: `${id}-form-item-description`,
        formMessageId: `${id}-form-item-message`,
        ...fieldState,
    }
}

type FormItemContextValue = {
    id: string
}

const FormItemContext = createContext<FormItemContextValue>({} as FormItemContextValue)

const FormItem = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => {
    const id = useId()

    return (
        <FormItemContext.Provider value={{ id }}>
            <div className={cn('space-y-2', className)} ref={ref} {...props} />
        </FormItemContext.Provider>
    )
})
FormItem.displayName = 'FormItem'

const FormLabel = forwardRef<
    ElementRef<typeof LabelPrimitive.Root>,
    ComponentPropsWithoutRef<typeof LabelPrimitive.Root>
>(({ className, ...props }, ref) => {
    const { error, formItemId } = useFormField()

    return <Label className={cn(error && 'text-destructive', className)} htmlFor={formItemId} ref={ref} {...props} />
})
FormLabel.displayName = 'FormLabel'

const FormControl = forwardRef<ElementRef<typeof Slot>, ComponentPropsWithoutRef<typeof Slot>>(({ ...props }, ref) => {
    const { error, formItemId, formDescriptionId, formMessageId } = useFormField()

    return (
        <Slot
            aria-describedby={!error ? `${formDescriptionId}` : `${formDescriptionId} ${formMessageId}`}
            aria-invalid={!!error}
            id={formItemId}
            ref={ref}
            {...props}
        />
    )
})
FormControl.displayName = 'FormControl'

const FormDescription = forwardRef<HTMLParagraphElement, HTMLAttributes<HTMLParagraphElement>>(
    ({ className, ...props }, ref) => {
        const { formDescriptionId } = useFormField()

        return (
            <p className={cn('text-muted-foreground text-sm', className)} id={formDescriptionId} ref={ref} {...props} />
        )
    },
)
FormDescription.displayName = 'FormDescription'

const FormMessage = forwardRef<HTMLParagraphElement, HTMLAttributes<HTMLParagraphElement>>(
    ({ className, children, ...props }, ref) => {
        const { error, formMessageId } = useFormField()
        const body = error ? String(error?.message) : children

        if (!body) {
            return null
        }

        return (
            <p
                className={cn('font-medium text-destructive text-sm', className)}
                id={formMessageId}
                ref={ref}
                {...props}
            >
                {body}
            </p>
        )
    },
)
FormMessage.displayName = 'FormMessage'

export { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage, useFormField }
