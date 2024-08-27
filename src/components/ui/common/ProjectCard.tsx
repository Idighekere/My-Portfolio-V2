"use client"

import { Icon } from "@iconify-icon/react/dist/iconify.mjs";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

export interface Props {
    featured: {
        title: string;
        stacks: string[];
        codeLink?: string | null;
        liveLink: string;
        isFeatured?: boolean;
        imageUrl: string;
        desc: string[];
        id: string;
        tasks?: string[];
        category?: string;
        slug: string;
        images: string[];
        highlights?: string[];
        challenges?: string[];
        solutions?: string[];
        conclusion?: string;
    }
};


const ProjectCard = ({ featured }: Props) => {
    const pathname = usePathname();
    console.log(pathname)
    const projects = "/projects"
    return (
        <div className="//bg-custom-gradient p-[2px] rounded-lg shadow-light h-full">
            <div className={` hover:scale-[1.01] transform transition-transform ease-in-out  flex lg:cgap-8 flex-col  border-2 border-primary-blue/40 rounded-lg hover:shadow-lg hover:shadow-blue-shade/50 duration-300 text-grey ${pathname === projects ? "lg:flex-col" : "lg:flex-row"}`}>
                <div className={`${pathname === projects ? " rounded-tl-lg rounded-tr-lg " : "md:pt-10 md:px-7 lg:rounded-tl-lg lg:rounded-bl-lg lg:rounded-tr-none"}  flex flex-col justify-end items-center /border-2 border-secondary`}>
                    <div className={` gap-1 py-3 hidden flex-wrap ${pathname === projects ? "hidden" : "md:flex"}`}>
                        <p className="text-[.9rem] font-[600]">Stacks</p>
                        {featured.stacks.map((icon) => (
                            <span
                                key={icon}
                                className="  hoover:bg-transparent duration-150  //border px-1 text-sm rounded-sm border-light-blue //bg-background text-primary-blue  "
                            >
                                {/* <Icon icon={icon} width="22px" height="22px" /> */}
                                {icon}
                            </span>
                        ))}
                    </div>
                    <div className={`"z-10 relative w-full h-full sm:h-48 //md:h-64 /lg:h-72 pt-[56.25%] " ${pathname === projects ? "" : "lg:w-96 "}`}>
                        <Image
                            src={featured.imageUrl}
                            fill
                            alt={featured.title}
                            className={` rounded-tl-lg rounded-tr-lg w-full lg:object-clover  ${pathname === projects ? "w-full" : "lg:max-w-[600px] lg:w-[600px]"}`}
                        // layout="responsive"
                        />
                    </div>
                </div>
                <div className={`"//shadow-md shadow-[#d1d1d1]/40 p-5   bg-secondary rounded-bl-lg rounded-br-lg rounded-tr-none rounded-tl-none" ${pathname === projects ? "" : "md:p-10 lg:rounded-tr-lg lg:rounded-br-lg lg:rounded-tl-none lg:rounded-bl-none"}`}>
                    <h2 className="text-xl md:text-2xl font-[600]">
                        {featured.title}
                    </h2>
                    <p>{featured.desc[0]}</p>
                    {/* {featured.tasks.length > 0 && (<h4 className="text-[1.1rem] font-[600]">Main Features:</h4>)}
                    <ul className="px-2 list-disc list-inside ">{featured?.tasks.map(task => (<li key={task}>{task}</li>))}</ul> */}
                    <div className={`flex gap-1 flex-wrap  py-3  ${pathname === projects ? "" : "md:hidden"}`}>
                        {/* <p className="text-[.9rem] font-[600]">Stacks</p> */}
                        {featured.stacks.map((icon) => (
                            <span
                                key={icon}
                                className=" hoover:bg-transparent duration-150  //border px-1 text-sm rounded-sm border-light-blue //bg-background text-primary-blue"
                            >
                                {/* <Icon icon={icon} width="22px" height="22px" /> */}
                                {icon}
                            </span>
                        ))}
                    </div>
                    <div className={`flex justify-between w-full items-center mt-4  bottom-1 ${pathname == projects ? "" : "md:mt-5 lg:mt-24"}`}>
                        <div className={`flex justify-between`}>

                            <Link href={`/projects/${featured?.slug}`} className={`flex items-center text-soft-white  hover:text-primary-blue duration-200 border-b border-soft-white hover:border-primary-blue /py-1`}>Details <Icon icon="basil:arrow-right-solid" width="26" height="26" /></Link>
                        </div>
                        <div className={`flex justify-between gap-2 md:gap-3 items-center /mt-5 md:items-end //flex-col flex-row /w-full ${pathname === projects ? "" : "md:justify-end"}`}>
                            {featured.codeLink && <Link
                                href={featured.codeLink}
                                className={`px-1 py-2 rounded-md text-soft-white  hover:text-primary-blue duration-200 ${pathname === projects ? "" : "md:hidden"}`}> <Icon icon="akar-icons:github-fill" width="27" height="27" /></Link>}

                            <Link href={featured.liveLink} className={`px-1 py-2   duration-200 text-soft-white  hover:text-primary-blue ${pathname === projects ? "" : "md:hidden"}`}>

                                <Icon icon="quill:link-out" width="27" height="27" />
                                {/* <p className="text-sm whitespace-nowrap">Live</p>{" "} */}
                            </Link>
                            {featured.codeLink && (<Link
                                href={featured.codeLink}
                                className={`px-1 py-2 rounded-md   hover:text-primary-blue border hover:border-primary-blue text-soft-white shadow-primary-blue hover:shadow-md  duration-200 hidden  ${pathname === projects ? "" : "md:inline-block"}`}
                            >
                                <button className="w-[7rem] flex items-center gap-3 md:gap-4 justify-center ">
                                    <Icon icon="akar-icons:github-fill" width="24" height="24" />
                                    <p className="text-[1.125rem] whitespace-nowrap">Code</p>{" "}
                                </button>
                            </Link>)}
                            <Link href={featured.liveLink} className={`px-1 py-2 bg-primary-blue rounded-md text-soft-white hover:bg-transparent hover:text-primary-blue border-primary-blue border  duration-200 hidden ${pathname === projects ? "" : "md:inline-block"}`}>
                                <button className="w-[7rem] flex items-center gap-3 md:gap-4 justify-center">
                                    <Icon icon="quill:link-out" width="24" height="24" />
                                    <p className="text-[1.125rem] whitespace-nowrap">Live</p>{" "}
                                </button>
                            </Link>

                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default ProjectCard;
