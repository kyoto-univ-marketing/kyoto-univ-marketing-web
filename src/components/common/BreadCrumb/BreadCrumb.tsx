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
            {/*
              灰色の帯はやめている。この直後に紺のページ見出しが来るので、
              帯が重なると入口が二段になって見えるため。
              現在地は控えめでよいので、小さな文字で本文と同じ左端に揃える。
            */}
            <Breadcrumb className='mx-auto w-full max-w-(--breakpoint-lg) px-6 py-4 md:px-8'>
                <BreadcrumbList className='gap-2 text-gray-500 text-xs sm:gap-3'>
                    {items.map((item, index) => (
                        <Fragment key={index}>
                            <BreadcrumbItem className='max-w-[16rem] truncate'>
                                {index < items.length - 1 ? (
                                    <BreadcrumbLink asChild>
                                        <NextLink className='hover:text-primary' href={item.href}>
                                            {item.label}
                                        </NextLink>
                                    </BreadcrumbLink>
                                ) : (
                                    <BreadcrumbPage className='truncate text-gray-600'>{item.label}</BreadcrumbPage>
                                )}
                            </BreadcrumbItem>
                            {index < items.length - 1 && (
                                <BreadcrumbSeparator className='text-brand-accent/60'>
                                    <span aria-hidden>/</span>
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
