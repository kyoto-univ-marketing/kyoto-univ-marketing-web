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
import { NextLink } from '../NextLink/NextLink'

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
                    <Fragment key={index}>
                        <BreadCrumbItem>
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
                    </Fragment>
                ))}
            </BreadcrumbList>
        </Breadcrumb>
    )
}
