import { Icon } from '@iconify-icon/react/dist/iconify.mjs'
import Link from 'next/link'
import React from 'react'

type Props = {
    slug: string
    title: string
}

const BreadCrumb = ({ slug, title }: Props) => {
    return (
        <div>

            <span className="text-primary-blue text-sm md:text-base flex gap-0 items-center justify-center mt-2">
                <Link href={`/`} ><Icon icon="iconamoon:home-light" width="20" height="20" /></Link>
                <Icon icon="iconamoon:arrow-right-2-light" width="26" height="26" />
                <Link href={`/projects`}>Projects</Link>
                <Icon icon="iconamoon:arrow-right-2-light" width="26" height="26" />
                <Link href={`/projects/${slug}`} className="text-soft-white  hover:text-primary-blue hover:underline /hover:border-b /hover:border-primary-blue">{title}</Link>

            </span>
        </div>
    )
}

export default BreadCrumb
