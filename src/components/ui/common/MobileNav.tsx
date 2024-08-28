"use client"

import { Icon, IconifyIcon } from '@iconify-icon/react/dist/iconify.mjs';
import Link from 'next/link'
import React from 'react'
import { usePathname } from "next/navigation";

type Props = {}

type LinkType = {
    name: string;
    url: string;
    defaultIcon?: string | IconifyIcon;
    activeIcon?: string | IconifyIcon;
};
const LinksMobile: LinkType[] = [
    {
        name: "Home",
        url: "/",
        defaultIcon: "iconamoon:home-light",
        activeIcon: "iconamoon:home-fill"
    },
    // {
    //     name: "About",
    //     url: "/#about",
    //     defaultIcon: "heroicons:home-20-solid",
    //     activeIcon: "iconamoon:home-fill"

    // },

    {
        name: "Projects",
        url: "/projects",
        defaultIcon: "ion:cube-outline",
        activeIcon: "ion:cube",
    },
    {
        name: "Experience",
        url: "/experience",
        defaultIcon: "heroicons:briefcase",
        activeIcon: "heroicons:briefcase-solid",

    },
    {
        name: "Education",
        url: "/education",
        defaultIcon: "streamline:quality-education",
        activeIcon: "streamline:quality-education-solid",

    },
];
const MobileNav = (props: Props) => {

    const pathname = usePathname();
    // console.log(pathname);
    const iconColor = pathname

    return (
        <div className="z-50 fixed bottom-2 left-0 right-0 mx-6 md:hidden w-auto">
            <div className=" bg-background/70 backdrop-blur-md px-2 py-2 rounded-lg flex justify-around items-center gap-2">
                {LinksMobile.map((link) => (
                    <span key={link.name} className={` //flex flex-col items-center gap-0`}>
                        <Link href={link.url} className=" flex flex-col items-center gap-0">
                            <span className={` ${pathname === link.url ? "  text-primary-blue" : ""} `}>
                                {pathname === link.url ? <Icon icon={link?.activeIcon as string | IconifyIcon} width="22" height="22" /> : <Icon icon={link?.defaultIcon as string | IconifyIcon} width="22" height="22" />}
                            </span>
                            <p className={`text-sm mt-0 ${pathname === link.url ? " font-[600] text-primary-blue" : ""}`}>{link.name}</p>
                        </Link>
                    </span>
                ))}
            </div>
        </div >)
}

export default MobileNav