// "use client"
// import React from 'react'
// import { Icon } from '@iconify-icon/react/dist/iconify.mjs'

// import { experienceType } from '@/data/experience'
// import { experience } from '@/data/experience'
// import { volunteerExperience } from '@/data/volunteer-experience'

// import { usePathname } from "next/navigation";
// import { educationType } from '@/data/education';
// import { education } from '@/data/education';

// type Props = {
//     xps?: experienceType[]
//     edu?: educationType[]
// }


// const Circle = () => {

//     return (
//         <div className="rounded-full h-1/2bg-secondary h-7 w-7 p-1 ">
//             <div className='rounded-full /bg-primary-blue/70 h-5 w-5'></div>

//         </div>
//     )
// }

// const Line = () => {

//     return (
//         <div className=" bg-primary-blue/30 min-h-full h-40 w-[2px] absolute top-0 left-1/2 transform -translate-x-1/2">
//         </div>
//     )
// }
// const TimeLine = (prop: Props) => {
//     const pathname = usePathname();
//     // const data = edu || xps

//     return (
//         <>

//             <div className="flex /flex-col gap-3 relative items-center justify-center">
//                 <div className="before:bg-primary-blue/40 before:w-[2px] before:h-full /before:p-4 before:absolute before:left-[14px] before:transform before:-translate-x-1/2 before:inline-block before:top-1 ">
//                     {experience?.map(xp => (
//                         (<div className="flex flex-col " key={xp.id}>

//                             {pathname === "/experience" && (<div className="flex items-start gap-x-4 lg:gap-x-6 mb-5 relative jusr">
//                                 <div className="">
//                                     <div className="flxex flex-col /relative h-84 items-center">
//                                         <Circle />
//                                         {/* Line component stretches to match height of content */}
//                                         <div className="/relative flex-1">
//                                             {/* <Line /> */}
//                                         </div>
//                                     </div>
//                                 </div>
//                                 <div className="flex flex-col items-start /relative w-[70%]" data-aos="fade-down">
//                                     <h3 className="text-2xl font-[600] text-center /font-incognito text-soft-white m-0 p-0 before:bg-primary-blue before:border-4 before:border-secondary before:w-6 before:h-6 before:rounded-full before:p-4/ before:absolute before:left-[2px] before:top-[4px]">{xp.company}</h3>
//                                     <p className="text-[1.125rem] font-[600] text-center text-soft-white p-0 m-0">{xp.role}</p>
//                                     <time className='uppercase tracking-widest pb-2 text-sm text-dark-grey'><span>{xp.duration.start}</span> - <span className={`${xp.duration.end == "Present" ? "text-primary-blue" : ""}`}>{xp.duration.end}</span></time>
//                                     <ul className='list-none marker:text-primary-blue list-outside /ml-1'>{xp.tasks.map(task => (<li key={task} className='/relative ml-0 /before:w-2 /before:h-2 before:/bg-primary-blue /before:p-1 before:rounded-full flex before:mr-1 items-start gap-2 before:justify-center before:flex-row //before:inline /before:absolute before:left-0 /before:top-1/2 /before:transform-translate'><Icon icon="ei:check" width="20" height="20" style={{ color: "#149ddd" }} /> <span>{task}</span></li>))}</ul>
//                                 </div>
//                             </div>)}
//                         </div>)
//                     ))}
//                 </div>


//             </div>


//             {/* EDUCATION TIMELINE */}
//             <div className="flex flex-col gap-3 relative">
//                 <div className="before:bg-primary-blue/40 before:w-[2px] before:h-full /before:p-4 before:absolute before:left-[14px] before:transform before:-translate-x-1/2 before:inline-block before:top-1">{education?.map(edu => (
//                     (<div className="flex " key={edu.id}>

//                         {pathname === "/education" && (<div className="flex items-start gap-x-4 lg:gap-x-6 mb-4 relative">
//                             <div className="">
//                                 <div className="flex flex-col /relative h-full items-center">
//                                     <Circle />
//                                     {/* Line component stretches to match height of content */}
//                                     {/* <div className="/relative flex-1">
//                                         <Line />
//                                     </div> */}
//                                 </div>
//                             </div>
//                             <div className="flex flex-col items-start" data-aos="fade-down">
//                                 <h3 className="text-2xl font-[600]  font-incognito text-soft-white m-0 p-0 before:bg-primary-blue before:border-4 before:border-secondary before:w-6 before:h-6 before:rounded-full before:p-4/ before:absolute before:left-[2px] before:top-[4px]">{edu.degree}</h3>
//                                 <p className="text-[1.125rem] font-[600]  text-soft-white p-0 m-0">{edu.school}</p>
//                                 <time className='uppercase tracking-widest pb-2 text-sm text-dark-grey'><span>{edu.duration.start}</span> - <span className={`${edu.duration.end == "Present" ? "text-primary-blue" : ""}`}>{edu.duration.end}</span></time>
//                                 <p>{edu.desc}</p>
//                                 {/* <ul className='list-none marker:text-primary-blue list-outside ml-1'>{xp.tasks.map(task => (<li key={task} className='relative ml-0 before:w-2 before:h-2 before:bg-primary-blue before:p-1 before:rounded-full before:flex before:mr-1 before:items-center before:justify-center before:flex-row //before:inline /before:absolute before:left-0 /before:top-1/2 before:transform-translate'>{task}</li>))}</ul> */}
//                             </div>
//                         </div>)}

//                     </div>)
//                 ))}</div>
//             </div>

//             {/* VOLUNTEER EXPERIENCE TIMELINE */}
//             <div className="mt-20 flex flex-col justify-center">
//                 <h2 className="text-4xl font-[600] text-center mb-6 font-/incognito text-soft-white border-b-4 inline border-primary-blue /inline-block">VOLUNTEER EXPERIENCE</h2>

//                 <div className="relative ">

//                     <div className="before:bg-primary-blue/40 before:w-[2px] before:h-full /before:p-4 before:absolute before:left-[14px] before:transform before:-translate-x-1/2 before:inline-block before:top-1 ">
//                         {volunteerExperience?.map(xp => (
//                             (<div className="flex flex-col " key={xp.id}>

//                                 {pathname === "/experience" && (<div className="flex items-start gap-x-4 lg:gap-x-6 mb-5 relative jusr">
//                                     <div className="">
//                                         <div className="flxex flex-col /relative h-84 items-center">
//                                             <Circle />
//                                             {/* Line component stretches to match height of content */}
//                                             <div className="/relative flex-1">
//                                                 {/* <Line /> */}
//                                             </div>
//                                         </div>
//                                     </div>
//                                     <div className="flex flex-col items-start /relative w-[70%]" data-aos="fade-down">
//                                         <h3 className="text-2xl font-[600] text-center font-incognito text-soft-white m-0 p-0 before:bg-primary-blue before:border-4 before:border-secondary before:w-6 before:h-6 before:rounded-full before:p-4/ before:absolute before:left-[2px] before:top-[4px]">{xp.company}</h3>
//                                         <p className="text-[1.125rem] font-[600] text-center text-soft-white p-0 m-0">{xp.role}</p>
//                                         <time className='uppercase tracking-widest pb-2 text-sm text-dark-grey'><span>{xp.duration.start}</span> - <span className={`${xp.duration.end == "Present" ? "text-primary-blue" : ""}`}>{xp.duration.end}</span></time>
//                                         <ul className='list-none marker:text-primary-blue list-outside /ml-1'>{xp.tasks.map(task => (<li key={task} className='/relative ml-0 /before:w-2 /before:h-2 before:/bg-primary-blue /before:p-1 before:rounded-full flex before:mr-1 items-start gap-2 before:justify-center before:flex-row //before:inline /before:absolute before:left-0 /before:top-1/2 /before:transform-translate'><Icon icon="ei:check" width="20" height="20" style={{ color: "#149ddd" }} /> <span>{task}</span></li>))}</ul>
//                                     </div>
//                                 </div>)}
//                             </div>)
//                         ))}
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }

// export default TimeLine
