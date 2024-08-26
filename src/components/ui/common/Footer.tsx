import { Icon } from '@iconify-icon/react/dist/iconify.mjs';
import Link from 'next/link'
import React from 'react'

type Props = {}

type ConnectType = {
    name: string;
    link: string;
    icon: string;
};

const connectLinks: ConnectType[] = [
    {
        name: "Facebook",
        link: "https://faceboook.com/idighs",
        icon: "basil:facebook-outline",
    },
    {
        name: "Twitter",
        link: "https://x.com/idighekere",
        icon: "hugeicons:new-twitter",
    },
    {
        name: "Whatsapp",
        link: "https://wa.me/+2347041300445",
        icon: "basil:whatsapp-outline",
    },
    {
        name: "LinkedIn",
        link: "https://linkedin.com/in/idighekere-udo",
        icon: "basil:linkedin-outline",
    },
];

const Footer = (props: Props) => {
    const date = Date()
    // const year = FullYear(date)
    // console.log(date)
    return (
        <footer className="mt-20 h-40/ bg-secondary px-5 py-20 md:p-20">

            <div className="grid grid-cols-1 md:grid-cols-3 justify-center md:justify-normal text-center md:text-normal items-center gap-4 md:gap-0">

                <div className='flex gap-2 justify-center md:justify-normal'>
                    {connectLinks.map((l) => (
                        <Link href={l.link} key={l.link} className="bg-deep-blue  rounded-full hover:bg-primary-blue duration-250 .p-6 w-8 h-8  flex justify-center items-center">
                            <Icon icon={l.icon} width="24" height="24" className=" top-0 right-0 left-0" />
                        </Link>
                    ))}
                </div>
                <div>
                    <h3 className="font-incognito font-[600] text-3xl md:text-4xl">Idighekere Udo</h3>
                    <p className="">A Web Developer</p>
                </div>

                <div>            <p className="text-sm">© 2024 | Developed by <Link href="/">Idighekere Udo</Link></p>
                </div>


            </div>
        </footer>
    )
}

export default Footer