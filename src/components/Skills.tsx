import { Icon } from '@iconify-icon/react/dist/iconify.mjs'
import Image from 'next/image'
import React from 'react'

type Props = {}
type LanguageType = {
    // map(arg0: (list: any) => React.JSX.Element): React.ReactNode
    name?: string;
    icon?: string;
}

const ListsOfTools: LanguageType = [
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
        name: "Tailwind CSS",
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
        <div className="flex flex-col items-center  text-primary-blue hover:text-light-blue duration-200 hover:scale-110 transform transition-transform ease-in-out        //hover:shadow-md cursor-pointer">
            <Icon icon={icon} height="40" width="40" className="text-7xl md:text-2xl" />
            <p className="text-[0.8rem]">{name}</p>
        </div>
    )
}
const Skills = (props: Props) => {
    return (
        <section className='mt-10'>
            <div className="flex flex-col md:flex-row w-full items-center md:items-normal md:justify-between">

                <div className='md:w-1/2'>
                    <h1 className='text-3xl font-[600] text-center mb-2 font-incognito  md:text-left text-soft-white '>My Skills</h1>

                    <p className="text-grey">What I work with</p>

                </div>
                <div className="rounded-lg bg-secondary grid grid-cols-3 sm:grids-cols-3 md:grid-cols-4 lg:grid-cols-5 /justify-center p-5 py-9 md:p-10  gap-5 w-full md:w-1/2 ">

                    {ListsOfTools.map(list => (<span key={list.name}><LanguageBox name={list?.name} icon={list?.icon} /></span>))}
                </div>
            </div>
        </section>
    )
}

export default Skills


