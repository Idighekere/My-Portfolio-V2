import { Icon } from '@iconify-icon/react/dist/iconify.mjs'
import Image from 'next/image'
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

const About = (props: Props) => {
    return (
        <main>
            <div className="flex gap-3 //items-center flex-col md:flex-row ">
                <div className="flex gap-3 md:w-[60%] items-center flex-col md:flex-row">
                    <div className="//bg-custom-gradient //p-1 rounded-full">
                        <Image
                            src={"/Idighekere.jpg"}
                            height={200}
                            width={200}
                            alt="Idighekere Udo"
                            className="rounded-full  max-w-[250px] filter grayscale border-deep-blue border-8 hidden md:block"
                        />
                    </div>
                    <div>
                        <h2 className="text-3xl font-[600] text-center mb-2 font-incognito text-soft-white">About Me</h2>
                        <p className="text-grey">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Necessitatibus, nesciunt facere. Veniam, facilis temporibus
                            ullam sequi inventore dicta debitis, odio voluptatibus fugit
                            aliquid quaerat ea.
                        </p>
                    </div>
                </div>
                {/* <div>
                    <h2 className="text-xl font-[600]  text-soft-white">Connect with Me</h2>
                    <p className="flex gap-3">
                        {connectLinks.map((l) => (
                            <Link href={l.link} key={l.link}
                            // className="bg-deep-blue  rounded-full hover:blue duration-250 p-7"
                            >
                                <span className="absolute"> <Icon icon={l.icon} width="23px" height="23px" /></span>
                            </Link>
                        ))}
                    </p>
                </div> */}
            </div>

            <div className="flex gap-3 items-center flex-col md:flex-row">
                <div>
                    <h2 className="text-xl font-[600] text-center text-soft-white">ABOUT ME</h2>
                    <p className="text-grey">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Necessitatibus, nesciunt facere. Veniam, facilis temporibus ullam
                        sequi inventore dicta debitis, odio voluptatibus fugit aliquid
                        quaerat ea.
                    </p>
                </div>
            </div>
        </main >
    )
}

export default About