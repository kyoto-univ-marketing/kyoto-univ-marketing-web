import { Slash } from 'lucide-react'
import { FC } from 'react'

import { NextLink } from '../NextLink/NextLink'
import {
    Breadcrumb,
    BreadcrumbItem as BreadCrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from '../ui/breadcrumb'

interface BreadCrumbItem {
    href?: string
    label: string
}

export interface BreadCrumbProps {
    /** リンクとラベルのリスト */
    items: BreadCrumbItem[]
}

/** パンくずリスト */
export const BreadCrumb: FC<BreadCrumbProps> = ({ items, ...props }) => {
    return (
        <Breadcrumb>
            <BreadcrumbList>
                {items.map((item, index) => (
                    <>
                        <BreadCrumbItem key={index}>
                            {item.href ? (
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
                    </>
                ))}
            </BreadcrumbList>
        </Breadcrumb>
    )
}
