"use client"

import { Icon, IconifyIcon } from '@iconify-icon/react/dist/iconify.mjs';
import Link from 'next/link'
import React from 'react'
import { usePathname } from "next/navigation";

type Props = {}

type LinkType = {
    name: string;
    url: string;
    icon?: string | IconifyIcon;
};
const LinksMobile: LinkType[] = [
    {
        name: "Home",
        url: "/",
        icon: "heroicons:home-20-solid",
    },
    // {
    //     name: "About",
    //     url: "/#about",
    //     icon: "heroicons:home-20-solid",
    // },

    {
        name: "Projects",
        url: "/projects",
        icon: "heroicons:folder-20-solid",
    },
    {
        name: "Qualifications",
        url: "/qualifications",
        icon: "mdi:medal",
    },
];
const MobileNav = (props: Props) => {

    const pathname = usePathname();
    // console.log(pathname);
    const iconColor = pathname

    return (
        <div className="z-50 fixed bottom-5 left-0 right-0 mx-7 md:hidden">
            <div className=" bg-background/70 backdrop-blur-md px-2 py-2 rounded-lg flex justify-around items-center gap-2">
                {LinksMobile.map((link) => (
                    <span key={link.name} className={` //flex flex-col items-center gap-0`}>
                        <Link href={link.url} className=" flex flex-col items-center gap-0">
                            <span className={` ${pathname === link.url ? "  text-primary-blue" : ""} `}>
                                <Icon icon={link?.icon as string | IconifyIcon} width="22" height="22" /></span>
                            <p className={`text-sm mt-0 ${pathname === link.url ? " font-[600] text-primary-blue" : ""}`}>{link.name}</p>
                        </Link>
                    </span>
                ))}
            </div>
        </div >)
}

export default MobileNav