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
            <main className="hidden md:flex h-screen items-center/ /justify-between gap-20 py-8 md:py-20 ">
                <div className=" md:pr-10">
                    <h1 className="text-3xl md:text-5xl lg:text-7xl font-[700] //-custom-gradient text-primary-blue bg-clip-text font-gitlab">
                        Idighekere Udo
                    </h1>
                    <p className="">Web Developer</p>
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
            <div className="md:hidden block">
                <div className="flex flex-col items-center justify-center">
                    <div className="//bg-custom-gradient //p-1 relative h-64 w-full rounded-lg ">
                        <Image
                            src={"/Idighekere.jpg"}
                            fill
                            alt="Idighekere Udo"
                            className="rounded-lg  max-w-[250px] filter grayscale border-deep-blue border-8 md:hidden"
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
                </div>
                <div className="text-center py-5 mb-4">
                    <h1 className="text-4xl md:text-5xl font-[600] //bg-custom-gradient text-primary-blue //bg-clip-text font-incognito">
                        Idighekere Udo
                        {/* a special human with some ability to love learning and working on teamwork.{" "} */}
                    </h1>
                    <p className="text-xl">Web Developer</p>
                </div>

            </div>
        </>
    );
};

export default Hero;
