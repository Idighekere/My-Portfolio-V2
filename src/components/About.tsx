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
        <main className="bg-secondary p-5 md:p-20">
            <div className="flex justify-center">

                                    <h2 className="text-4xl font-[600] text-center //mb-6 font-incognito text-soft-white border-b-4 inline-block border-primary-blue ">About Me</h2>
            </div>
            

            <div className="/flex gap-3 //items-center flex-col md:flex-row mt-5">
                <div className="flex gap-4 md:gap-7 lg:gap-20  //items-center md:items-normal flex-col md:flex-row-reverse justify-between">
                    {/* <div clasName="flex w-full"> */}
                        <div className=" relative h-64 md:h-72 w-full rounded-lg  ">
                        <Image
                            src={"/Idighekere.jpg"}
                            fill
                            alt="Idighekere Udo"
                            className="rounded-md max-w-[250px] md:max-w-[350px] filter grayscale hover:grayscale-0   mx-auto border-soft-white/50 border-2"
                        />
                        <div className="absolute bottom-0 left-0 m-auto w-full right-0">
                            <a href={""} className="">
                                <button className={`px-4 py-1 //border border-soft-white/50 text-soft-white bg-bgd rounded-md flex items-center font-[400] gap-1`}><p>Resume</p> <Icon icon="hugeicons:download-05" width="26" height="26" /></button>
                            </a>
                        </div>
                       </div>
                    {/* </div> */}
                    <div className="">
                        <div className="text-grey flex flex-col gap-3">
                            <p className="">I&apos;m a self driven, dedicated developer specializing in the frontend-web development, currently pursuing a bachelors degree in computer engineering. I primarily work with web technologies like HTML, CSS, Tailwind CSS, ReactJS, NextJS. I also have little knowledge on Docker, NodeJs, MongoDb, ExpressJs.</p>
                            <p className="">I create, manage, troubleshoot wordpress sites.</p>
                            <p className="">I thrive in collaborative environments and I&apos;m always eager to learn and improve myself</p>
                        </div>
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

            <div className="/flex gap-3 items-center flex-col md:flex-row hidden">
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