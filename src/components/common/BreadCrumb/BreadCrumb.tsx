import { Slash } from 'lucide-react'
import { FC, Fragment } from 'react'

import {
    Breadcrumb,
    BreadcrumbItem as BreadCrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from '../../ui/breadcrumb'
import { JsonLD } from '../JsonLD/JsonLD'
import { NextLink } from '../NextLink/NextLink'

interface BreadCrumbItem {
    href: `/${string}`
    label: string
}

export interface BreadCrumbProps {
    /** リンクとラベルのリスト */
    items: BreadCrumbItem[]
}

const toJsonLD = (items: BreadCrumbItem[]) => {
    return {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        name: 'パンくずリスト',
        itemListElement: items.map((item) => ({
            '@type': 'ListItem',
            position: items.indexOf(item) + 1,
            name: item.label,
            item: `https://kyodaimarketing.com${item.href}` as const,
        })) satisfies { '@type': 'ListItem'; position: number; name: string; item: string }[],
    } as const
}

/** パンくずリスト */
export const BreadCrumb: FC<BreadCrumbProps> = ({ items, ...props }) => {
    const json = toJsonLD(items)
    return (
        <>
            <Breadcrumb className='bg-backgroundSecondary px-6 py-2'>
                <BreadcrumbList>
                    {items.map((item, index) => (
                        <Fragment key={index}>
                            <BreadCrumbItem>
                                {index < items.length - 1 ? (
                                    <BreadcrumbLink asChild>
                                        <NextLink href={item.href}>{item.label}</NextLink>
                                    </BreadcrumbLink>
                                ) : (
                                    <BreadcrumbPage>{item.label}</BreadcrumbPage>
                                )}
                            </BreadCrumbItem>
                            {index < items.length - 1 && (
                                <BreadcrumbSeparator>
                                    <Slash />
                                </BreadcrumbSeparator>
                            )}
                        </Fragment>
                    ))}
                </BreadcrumbList>
            </Breadcrumb>
            <JsonLD json={json} id='breadcrumb-json-ld' />
        </>
    )
}
