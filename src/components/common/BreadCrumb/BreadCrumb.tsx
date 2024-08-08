import { Slash } from 'lucide-react'
import { FC, Fragment } from 'react'
import { BreadcrumbList as BreadcrumbListSchemaType, WithContext } from 'schema-dts'

import profile from '@/constants/profile'

import {
    Breadcrumb,
    BreadcrumbItem,
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
            item: `${profile.homepageUrl}${item.href}` as const,
        })) satisfies { '@type': 'ListItem'; position: number; name: string; item: string }[],
    } as const satisfies WithContext<BreadcrumbListSchemaType>
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
                            <BreadcrumbItem>
                                {index < items.length - 1 ? (
                                    <BreadcrumbLink asChild>
                                        <NextLink href={item.href}>{item.label}</NextLink>
                                    </BreadcrumbLink>
                                ) : (
                                    <BreadcrumbPage>{item.label}</BreadcrumbPage>
                                )}
                            </BreadcrumbItem>
                            {index < items.length - 1 && (
                                <BreadcrumbSeparator>
                                    <Slash />
                                </BreadcrumbSeparator>
                            )}
                        </Fragment>
                    ))}
                </BreadcrumbList>
            </Breadcrumb>
            <JsonLD id='breadcrumb-json-ld' json={json} />
        </>
    )
}
