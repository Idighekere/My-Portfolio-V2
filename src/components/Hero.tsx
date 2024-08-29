/* eslint-disable react/no-unescaped-entities */
import { connect } from "http2";
import Image from "next/image";
import Link from "next/link";
import React from "react";
// import { HomeIcon } from '@radix-ui/react-icons';
import { Icon } from "@iconify-icon/react";

type Props = {};

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

const Hero = (props: Props) => {
    return (
        <>
            <main className="//hidden flex h-[80vh] md:h-screen items-center /justify-between //gap-20 p-5 md:p-20 ">
                <div className=" md:pr-10 mt-0" data-aos="fade-right">
                    <p className="text-primary-blue text-[1.125rem]">Hi👋, my name is</p>
                    <h1 className="text-5xl md:text-6xl lg:text-8xl font-[600] bg-text-gradient text-transparent bg-clip-text font-incognito" data-aos="flip-up">
                        Idighekere Udo
                    </h1>
                    <h3 className="text-3xl md:text-3xl lg:text-4xl font-[600] //-custom-gradient text-[#8892b0] bg-clip-text font-incognito">I&apos;m  a Web Developer</h3>
                    <p className="text-[1.125rem] text-[#8892b0]">I am glad to have you here. I am excited to connect & share my works with you.</p>
                    <div>
                        <p className="flex gap-3 py-3 text-primary-blue">
                            {connectLinks.map((l) => (
                                <Link href={l.link} key={l.link} className="hover:bg-deep-blue  rounded-full bg-transparent duration-350 p-3 w-10 h-10  flex justify-center items-center border-primary-blue border transition ease-in-out transition-translate hover:scale-[1.2]">
                                    <Icon icon={l.icon} width="25" height="25" />
                                </Link>
                            ))}
                        </p>
                    </div>
                </div>
                {/* <div className="relative w-full h-64">

                    <Image
                        src={"/Idighekere.jpg"}
                        fill
                        alt="Idighekere Udo"
                        className="rounded-lg  max-w-[250px] filter grayscale border-deep-blue border-8"
                    />
                </div> */}
            </main>
            {/* <<==============MOBILE HERRRO===========>> */}
            <div className="hidden /flex flex-col h-screen justiy-center">
                {/* <div className="flex flex-col items-center justify-center mx-auto w-full">
                    <div className=" relative h-64 w-full rounded-lg  ">
                        <Image
                            src={"/Idighekere.jpg"}
                            fill
                            alt="Idighekere Udo"
                            className="rounded-md  max-w-[250px] filter grayscale  md:hidden mx-auto border-deep-blue border-6"
                        />
                    </div>
                    <div>
                        <p className="flex gap-3 py-3">
                            {connectLinks.map((l) => (
                                <Link href={l.link} key={l.link} className="bg-deep-blue  rounded-full hover:bg-primary-blue duration-250 p-3 w-10 h-10  flex justify-center items-center border-grey border">
                                    <Icon icon={l.icon} width="25" height="25" />
                                </Link>
                            ))}
                        </p>
                    </div>
                </div> */}
                <div className="text-center/ py-5 mb-4">
                    <p className="text-primary-blue">Hi👋, my name is</p>

                    <h1 className="text-5xl md:text-5xl font-[600] bg-text-gradient text-transparent bg-clip-text font-incognito">
                        Idighekere Udo
                        {/* a special human with some ability to love learning and working on teamwork.{" "} */}
                    </h1>
                    <h3 className="text-3xl md:text-3xl lg:text-4xl font-[600] //-custom-gradient text-[#8892b0] bg-clip-text font-incognito">I'm  a Web Developer</h3>
                </div>

            </div>
        </>
    );
};

export default Hero;
