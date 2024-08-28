import { projectType } from "@/data/projectsList";
import Image from "next/image";
import React from "react";
import BreadCrumb from "./ui/common/BreadCrumb";
import ShareIcons from "./ui/common/ShareIcons";

type Props = {
    project: projectType;
};

const ProjectDetails = ({ project }: Props) => {

    console.log(project)
    return (
        <main>
            <div>
                <BreadCrumb title={project.title} slug={project.slug} />
                <div key={project.id}>

                    <div className="relative h-full sm:h-48 lg:h-72 pt-[56.25%] py-3 mt-3">
                        <Image src={project.imageUrl} alt={project.title} fill className="rounded-lg border-card-blue-shade/60 border-2" />
                    </div>
                    <h1 className="text-3xl font-[600] text-center my-3">{project.title}</h1>
                    <div className=""></div>

                    <article className="">
                        <p className="">
                            {project.desc.map((d) => (
                                <span key={d} className="">{d}</span>
                            ))}
                        </p>
                        <p className="my-2">
                            These are the technologies,frameworks, tools,libraries I used on
                            this project:
                        </p>
                        <div className="">
                            {project?.stacks.map((stack) => (
                                <span key={stack} className="inline-block">
                                    <p className="ml-1 text-[.9rem]">{stack},</p>
                                </span>
                            ))}
                        </div>
                        <h2 className="mt-5 font-[500] text-xl">Key Features</h2>
                        <ul className="px-2 list-disc list-inside">
                            {project?.highlights!.map((highlight) => (
                                <li key={highlight} className="">{highlight}</li>
                            ))}
                        </ul>
                        <div className="flex md:flex-row flex-col mt-5 gap-5">
                            {project?.challenges!.length > 0 && <div className="">
                                <h2 className="font-[500] text-xl">Challenges</h2>
                                <p className="">
                                    These are the challenges I faced while working on this
                                    project
                                </p>
                                <ul className="px-2 list-disc list-inside">
                                    {project?.challenges!.map((challenge) => (
                                        <li key={challenge} className="">{challenge}</li>
                                    ))}
                                </ul>
                            </div>}
                            {project?.solutions!.length > 0 &&
                                (<div className="">
                                    <h2 className=" font-[500] text-xl">Solutions</h2>
                                    <p className="">
                                        These are the approach I used to tackle the challenges I
                                        faced
                                    </p>

                                    <ul className="px-2 list-disc list-inside">
                                        {project.solutions!.map((solution) => (
                                            <li key={solution} className="">{solution}</li>
                                        ))}
                                    </ul>
                                </div>)}
                        </div>
                        {/* IMAGE GALLERY */}
                        <h2 className=" font-[500] text-xl mt-4">Screens</h2>

                        <div className="grid gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                            {project.images.map(image => (<div key={`${image}-${image.length + 1}`} className="relative /w-full h-64 /sm:h-48 /lg:h-72 /pt-[56.25%] py-3 "><Image src={image} alt={image} fill className="rounded-md w-auto h-auto object-contain" sizes="100vw"
                            /></div>))}
                        </div>
                        <h2 className="mt-5 font-[500] text-xl">Conclusion</h2>
                        <p className="">{project.conclusion}</p>
                    </article>
                </div>
                <div className="flex justify-center mb-2 flex-col mt-5">
                    <h4 className="text-xl font-[600]">Share:</h4>
                    <p></p>
                    <ShareIcons shareLink={project.slug} shareTitle={project.title} />
                </div>            </div >
        </ main >
    );
};

export default ProjectDetails;
