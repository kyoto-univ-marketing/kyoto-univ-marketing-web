import parse, { attributesToProps, DOMNode, domToReact, Element, HTMLReactParserOptions } from 'html-react-parser'
import Image from 'next/image'
import { ComponentProps, FC } from 'react'

import { NextLink } from '@/components/common/NextLink/NextLink'
import { cn } from '@/lib/utils'

const options: HTMLReactParserOptions = {
    replace: (domNode) => {
        if (!(domNode instanceof Element && domNode.attribs)) return

        const children = domNode.children as DOMNode[]
        const props = attributesToProps(domNode.attribs)

        if (domNode.name === 'img') {
            const { src, alt, width, height, ...rest } = props as ComponentProps<'img'>
            if (typeof src !== 'string') throw new Error('src attribute is required for img tag')
            return <Image {...rest} src={src} alt={alt ?? ''} width={Number(width)} height={Number(height)} />
        }

        if (domNode.name === 'a') {
            const { href, className, ...rest } = props as ComponentProps<'a'>
            if (typeof href !== 'string') throw new Error('href attribute is required for a tag')
            return (
                <NextLink {...rest} href={href} className={cn('text-blue-700 underline', className)}>
                    {domToReact(children, options)}
                </NextLink>
            )
        }

        if (domNode.name === 'ul') {
            const { className, ...rest } = props as ComponentProps<'ul'>
            return (
                <ul
                    {...rest}
                    className={cn(
                        'list-inside list-disc [&_ul]:ml-6 [&_ul]:list-[circle] [&_ul_ul]:list-[square]',
                        className,
                    )}
                >
                    {domToReact(children, options)}
                </ul>
            )
        }

        if (domNode.name === 'table') {
            const { className, ...rest } = props as ComponentProps<'table'>
            return (
                <div className='w-full overflow-x-auto whitespace-nowrap'>
                    <table {...rest} className={cn('', className)}>
                        {domToReact(children, options)}
                    </table>
                </div>
            )
        }

        if (domNode.name === 'th') {
            const { className, ...rest } = props as ComponentProps<'th'>
            return (
                <th {...rest} className={cn('bg-slate-100 p-4 font-bold', className)}>
                    {domToReact(children, options)}
                </th>
            )
        }

        if (domNode.name === 'td') {
            const { className, ...rest } = props as ComponentProps<'td'>
            return (
                <td {...rest} className={cn('bg-white p-4', className)}>
                    {domToReact(children, options)}
                </td>
            )
        }

        if (domNode.name === 'tr') {
            const { className, ...rest } = props as ComponentProps<'tr'>
            return (
                <tr {...rest} className={cn('border-b last:border-b-0', className)}>
                    {domToReact(children, options)}
                </tr>
            )
        }
    },
}

export interface ParseHtmlProps {
    children: string
}

export const ParseHtml: FC<ParseHtmlProps> = ({ children }) => {
    return <>{parse(children, options)}</>
}
