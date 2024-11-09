"use client";
import { Icon } from "@iconify-icon/react/dist/iconify.mjs";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import React from "react";

type Props = {};

type LinkType = {
    name: string;
    url: string;
    icon?: string;
};
const Links: LinkType[] = [
    {
        name: "Home",
        url: "/",
        icon: "heroicons:home-20-solid",
    },
    // {
    //     name: "About Me",
    //     url: "/#about",
    //     icon: "heroicons:home-20-solid",
    // },

    {
        name: "Projects",
        url: "/projects",
        icon: "heroicons:home-20-solid",
    },
    {
        name: "Experience",
        url: "/experience",
        icon: "heroicons:home-20-solid",
    },
    {
        name: "Education",
        url: "/education",
        icon: "heroicons:home-20-solid",
    },
];

const Header = (props: Props) => {
    const pathname = usePathname();
    // console.log(pathname);
    const router = useRouter();
    // const hash = router.asPath.split('#')[1];

    // console.log(hash)

    return (
        <header className="sticky top-0 z-50 px-10 shadow-md backdrop-blur-md md:px-20">
            {/* <div className="relative h-auto"></div> */}
            <nav className="flex justify-between py-6 /px-5 text-soft-white">
                <div>
                    <a href="/" className="font-incognito font-[700] text-2xl text-center md:text-normal">
                        {`<Idighs/>✨`}
                    </a>
                </div>
                <div className="block md:hidden">
                    <Link href="https://github.com/idighekere/">
                    <Icon icon="akar-icons:github-fill" width="30" height="30" />
                    </Link>
                </div>
                <div className="hidden md:flex">
                    {Links.map((link) => (
                        <span key={link.name} className={` px-4 py-1  ${pathname === link.url ? "font-[600] text-primary-blue" : "text-soft-white font-[400]"} hover:border hover:border-primary-blue rounded-full`}>
                            <Link href={link.url}>{link.name}</Link>
                        </span>
                    ))}
                </div>
            </nav>
            <div className="border-b md:border-b-2 border-blue-shade/40 "></div>

            {/* <<========MOBILE MENU=========>> */}

        </header>

    );
};

export default Header;
