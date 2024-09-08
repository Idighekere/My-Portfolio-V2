import { Icon, IconifyIcon } from '@iconify-icon/react/dist/iconify.mjs'
import Image from 'next/image'
import React from 'react'

type Props = {}
type LanguageType = {
    // map(arg0: (list: any) => React.JSX.Element): React.ReactNode
    name?: string;
    icon?: string | IconifyIcon
}

const ListsOfTools: LanguageType[] = [
    {
        name: "HTML",
        icon: "flowbite:html-solid",
    },
    {
        name: "CSS",
        icon: "flowbite:css-solid",
    },
    {
        name: "Javascript",
        icon: "akar-icons:javascript-fill",
    },
    {
        name: "Tailwind",
        icon: "ri:tailwind-css-fill",
    },
    {
        name: "React Js",
        icon: "cib:react",
    },
    {
        name: "Next Js",
        icon: "akar-icons:nextjs-fill",
    },
    {
        name: "Wordpress",
        icon: "bxl:wordpress",
    },
    {
        name: "Docker",
        icon: "ion:logo-docker",
    },
]

const LanguageBox: React.FC = ({ icon, name }: LanguageType) => {

    return (
        <div className="grid grid-cols-3 sm:grids-cols-3 md:grid-cols-4 lg:grid-cols-5 p-5 py-9 md:p-10  gap-3 md:gap-5 ">{ListsOfTools.map(tool => (<div className="flex flex-col items-center  text-primary-blue hover:text-light-blue duration-200 hover:scale-110 transform transition-transform ease-in-out        //hover:shadow-md cursor-pointer" key={tool.icon as string} data-aos="zoom-in">
            <Icon icon={tool.icon as string | IconifyIcon} height="40" width="40" className="text-7xl md:text-9xl" />
            <p className="text-[0.7rem]">{tool.name}</p>
        </div>))}
        </div>
    )
}
const Skills = (props: Props) => {
    return (
        <section className='mt-10 p-5 md:p-20'>
            <div className="flex justify-center mb-5">
                <h2 className='text-4xl font-[600] text-center //mb-6 font-incognito text-soft-white border-b-4 inline-block border-primary-blue '>MY SKILLS</h2>

            </div>

            <div className="flex flex-col md:flex-row w-full items-center md:items-normal md:justify-between">

                {/* <div className='md:w-1/2 hidden'>
                    <h1 className='text-4xl font-[600] text-center //mb-6 font-incognito text-soft-white border-b-4 inline-block border-primary-blue '>My Skills</h1>

                    <p className="text-light-blue">What I work with</p>

                </div> */}
                <div className="rounded-lg bg-secondary /flex j/ustify-center mx-auto w-full md:w-[80%] //md:w-1/2">

                    <LanguageBox />
                </div>
            </div>
        </section >
    )
}

export default Skills


