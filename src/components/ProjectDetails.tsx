// "use client"
// import { projectType } from "@/data/projectsList";
// import Image from "next/image";
// import React, { useEffect } from "react";
// import BreadCrumb from "./ui/common/BreadCrumb";
// import ShareIcons from "./ui/common/ShareIcons";
// import Link from "next/link";
// import { Icon } from "@iconify-icon/react/dist/iconify.mjs";
// import { usePathname } from "next/navigation";
// import AOS from 'aos';
// import 'aos/dist/aos.css';

// type Props = {
//     project: projectType;
// };

// const ProjectDetails = ({ project }: Props) => {
//     const pathname = usePathname();
//     const projects = "/projects"
//     // console.log(project)
//     return (
//         <main>
//             <div>
//                 <BreadCrumb title={project.title} slug={project.slug} />
//                 <div key={project.id}>

//                     <div className="relative h-full sm:h-48 lg:h-72 pt-[56.25%] py-3 mt-3">
//                         <Image src={project.imageUrl} alt={project.title} fill className="border-2 rounded-lg border-card-blue-shade/60" />
//                     </div>

//                     <div className="flex w-full gap-4 mt-4">
//                         {project.codeLink && (<Link
//                             href={project.codeLink}
//                             className={`px-1 py-2 rounded-md   hover:text-primary-blue border hover:border-primary-blue text-soft-white shadow-primary-blue hover:shadow-md  duration-200 hidden/ w-full flex items-center gap-3 md:gap-4 justify-center`}
//                         >
//                             {/* <button className=""> */}
//                             <Icon icon="akar-icons:github-fill" width="24" height="24" />
//                             <p className="text-[1.125rem] whitespace-nowrap">Code</p>{" "}
//                             {/* </button> */}
//                         </Link>)}
//                         <Link href={project.liveLink} className={`px-1 py-2 bg-primary-blue rounded-md text-soft-white hover:bg-transparent hover:text-primary-blue border-primary-blue border  duration-200 hidden/ w-full flex items-center gap-3 md:gap-4 justify-center`}>
//                             {/* <button className=""> */}
//                             <Icon icon="quill:link-out" width="24" height="24" />
//                             <p className="text-[1.125rem] whitespace-nowrap">Live</p>{" "}
//                             {/* </button> */}
//                         </Link>
//                     </div>

//                     <h1 className="text-2xl md:text-4xl font-[600] text-center my-3">{project.title}</h1>
//                     <article className="">
//                         <p className="">
//                             {project.desc.map((d) => (
//                                 <span key={d} className="">{d}</span>
//                             ))}
//                         </p>
//                         <p className="my-2">
//                             These are the technologies,frameworks, tools,libraries I used on
//                             this project:
//                         </p>
//                         <div className="">
//                             {project?.stacks.map((stack) => (
//                                 <span key={stack} className="inline-block">
//                                     <p className="ml-1 text-[.9rem]">{stack},</p>
//                                 </span>
//                             ))}
//                         </div>
//                         <h2 className="mt-5 font-[600] text-2xl">Key Features</h2>
//                         <ul className="px-2 list-disc list-inside">
//                             {project?.highlights!.map((highlight) => (
//                                 <li key={highlight} className="">{highlight}</li>
//                             ))}
//                         </ul>
//                         <div className="flex flex-col gap-5 mt-5 md:flex-row">
//                             {project?.challenges?.length > 0 && <div className="">
//                                 <h2 className="font-[600] text-2xl">Challenges</h2>
//                                 <p className="">
//                                     These are the challenges I faced while working on this
//                                     project
//                                 </p>
//                                 <ul className="px-2 list-disc list-inside">
//                                     {project?.challenges!.map((challenge) => (
//                                         <li key={challenge} className="">{challenge}</li>
//                                     ))}
//                                 </ul>
//                             </div>}
//                             {project?.solutions?.length > 0 &&
//                                 (<div className="">
//                                     <h2 className=" font-[600] text-2xl">Solutions</h2>
//                                     <p className="">
//                                         These are the approach I used to tackle the challenges I
//                                         faced
//                                     </p>

//                                     <ul className="px-2 list-disc list-inside">
//                                         {project.solutions!.map((solution) => (
//                                             <li key={solution} className="">{solution}</li>
//                                         ))}
//                                     </ul>
//                                 </div>)}
//                         </div>
//                         {/* IMAGE GALLERY */}
//                         {project.images.length > 1 && (<div>

//                             <h2 className=" font-[600] text-2xl mt-4">Screens</h2>

//                             <div className="grid w-full grid-cols-1 gap-2 overflow-x-auto md:grid-cols-2 lg:grid-cols-3">
//                                 {project.images.map(image => (<div key={`${image}-${image.length + 1}`} className="relative /w-full h-64 /sm:h-48 /lg:h-72 /pt-[56.25%] py-3 "><Image src={image} alt={image} fill className="object-cover w-auto h-auto rounded-md" sizes="100vw"
//                                 /></div>))}
//                             </div>
//                         </div>)}
//                         <h2 className="mt-5 font-[600] text-2xl">Conclusion</h2>
//                         <p className="">{project.conclusion}</p>
//                     </article>
//                 </div>
//                 <div className="flex flex-col justify-center mt-5 mb-2">
//                     <h4 className="text-2xl font-[600]">Share:</h4>
//                     <p></p>
//                     <ShareIcons shareLink={project.slug} shareTitle={project.title} />
//                 </div>            </div >
//         </ main >
//     );
// };

// export default ProjectDetails;
