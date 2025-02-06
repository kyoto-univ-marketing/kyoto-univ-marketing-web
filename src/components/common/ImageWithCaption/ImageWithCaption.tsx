import Image from 'next/image'
import { ComponentProps, FC } from 'react'

export interface ImageWithCaptionProps extends ComponentProps<typeof Image> {}

export const ImageWithCaption: FC<ImageWithCaptionProps> = ({ ...props }) => {
    const { alt, width } = props
    return (
        <figure className='space-y-1' style={{ maxWidth: width }}>
            <Image {...props} />
            <figcaption className='whitespace-pre-wrap text-gray-600 text-sm'>{alt}</figcaption>
        </figure>
    )
}
